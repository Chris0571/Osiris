/**
 * OSIRIS — Stealth Fetch Utility
 * Provides realistic browser TLS/HTTP fingerprints and clean request handling
 * to pass WAF/Cloudflare checks without triggering anti-spoofing drops.
 */

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
];

function randomUA(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

/**
 * Generates realistic browser headers compliant with WAF/CDN checks.
 */
export function stealthHeaders(extraHeaders?: Record<string, string>): Record<string, string> {
  const ua = randomUA();
  const isFirefox = ua.includes('Firefox');

  const baseHeaders: Record<string, string> = {
    'User-Agent': ua,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  };

  if (!isFirefox) {
    baseHeaders['Sec-Ch-Ua'] = '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"';
    baseHeaders['Sec-Ch-Ua-Mobile'] = '?0';
    baseHeaders['Sec-Ch-Ua-Platform'] = '"Windows"';
    baseHeaders['Sec-Fetch-Dest'] = 'empty';
    baseHeaders['Sec-Fetch-Mode'] = 'cors';
    baseHeaders['Sec-Fetch-Site'] = 'cross-site';
  }

  return {
    ...baseHeaders,
    ...extraHeaders,
  };
}

/**
 * Drop-in replacement for global fetch() with stealth browser headers and managed timeout.
 */
export async function stealthFetch(
  url: string | URL | Request,
  init?: RequestInit
): Promise<Response> {
  const headers = stealthHeaders(
    init?.headers
      ? Object.fromEntries(
          init.headers instanceof Headers
            ? init.headers.entries()
            : Array.isArray(init.headers)
            ? init.headers
            : Object.entries(init.headers)
        )
      : undefined
  );

  const controller = new AbortController();
  
  // Propaga il segnale esterno se già passato
  if (init?.signal) {
    if (init.signal.aborted) {
      controller.abort(init.signal.reason);
    } else {
      init.signal.addEventListener('abort', () => controller.abort(init.signal?.reason), { once: true });
    }
  }

  // Timeout predefinito esteso a 45 secondi per indici pesanti (es. OpenCCTV 7.3MB)
  const timeoutMs = 45000;
  const timeoutId = setTimeout(() => {
    controller.abort(new Error(`stealthFetch Timeout after ${timeoutMs}ms`));
  }, timeoutMs);

  try {
    const res = await fetch(url, {
      ...init,
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}