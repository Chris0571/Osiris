import type { CctvCamera } from './types';

// ── SkylineWebcams — Live Snapshot JPGs (auto-refresh) ──
const SKYLINE_ITALY: CctvCamera[] = [
  // Rome
  { id: 'sky-it-trevi', lat: 41.9009, lng: 12.4833, name: 'Fontana di Trevi', city: 'Rome', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive341.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/fontana-di-trevi.html', source: 'SkylineWebcams' },
  { id: 'sky-it-pantheon', lat: 41.8986, lng: 12.4769, name: 'Pantheon', city: 'Rome', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/pantheon.html', source: 'SkylineWebcams' },
  { id: 'sky-it-colosseum', lat: 41.8902, lng: 12.4922, name: 'Colosseo', city: 'Rome', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/colosseo.html', source: 'SkylineWebcams' },
  { id: 'sky-it-navona', lat: 41.8992, lng: 12.4731, name: 'Rome - Piazza Navona', city: 'Rome', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive343.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/piazza-navona.html', source: 'SkylineWebcams' },
  { id: 'sky-it-spagna', lat: 41.9059, lng: 12.4827, name: 'Rome - Piazza Spagna', city: 'Rome', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lazio/roma/piazza-di-spagna.html', source: 'SkylineWebcams' },
  
  // Surf
  { id: 'surf-forecast-marinaretti',
	  lat: 41.4522,
	  lng: 12.6373,
	  name: 'Marinaretti',
	  city: 'Anzio',
	  country: 'Italy',
	  //feed_url: 'https://vedetta.org/image-client/anzio-levante/image.jpg',
    // 1. Immagine/Poster di anteprima (Proxata per bypassare il blocco CORS di Vedetta)
    feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fvedetta.org%2Fimage-client%2Fanzio-levante%2Fimage.jpg',    
    // 2. Stream Video Live HLS (DIRETTO, senza passare dal proxy di Osiris)
    stream_url: 'https://5e0add8153fcd.streamlock.net:1936/vedetta/anzio-levante.stream/playlist.m3u8',
    stream_type: 'hls',
    // 3. Pagina Web per apertura esterna
    external_url: 'https://vedetta.org/webcam/italia/lazio/roma/anzio-levante/',
    source: 'Vedetta.org' },

 {
    id: 'surf-forecast-lido-garda',
    lat: 41.4732,
    lng: 12.6033,
    name: 'Lido Garda - Cincinnato',
    city: 'Anzio',
    country: 'Italy',
    feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fvedetta.org%2Fimage-client%2Fanzio-lido-di-cincinnato%2Fcincinnato.jpg',
    stream_url: 'https://5e0add8153fcd.streamlock.net:1936/vedetta/streamapprodo-sud.stream/playlist.m3u8',
    stream_type: 'hls',
    external_url: 'https://vedetta.org/webcam/italia/lazio/roma/anzio-lido-di-cincinnato/',
    source: 'Vedetta.org',
  },
  {
    id: 'surf-forecast-lido-garda-tor-caldara',
    lat: 41.4789,
    lng: 12.5984,
    name: 'Lido Garda - Tor Caldara',
    city: 'Anzio',
    country: 'Italy',
    feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fvedetta.org%2Fimage-client%2Fanzio-lido-di-cincinnato%2Fcaldara.jpg',
    stream_url: 'https://5e0add8153fcd.streamlock.net:1936/vedetta/streamapprodo-nord.stream/playlist.m3u8',
    stream_type: 'hls',
    external_url: 'https://vedetta.org/webcam/italia/lazio/roma/anzio-lido-di-cincinnato/',
    source: 'Vedetta.org',
  },

   { id: 'surf-forecast-circeo',
    lat: 41.2308,
    lng: 13.0967,
    name: 'Carrubo',
    city: 'San Felice Circeo',
    country: 'Italy',
    feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fvedetta.org%2Fimage-client%2Fsan-felice-circeo%2Fimage.jpg',
    
    // Stream Video Live HLS DIRETTO
    stream_url: 'https://5e0add8153fcd.streamlock.net:1936/vedetta/san-felice-circeo.stream/playlist.m3u8',
    stream_type: 'hls',
    external_url: 'https://vedetta.org/webcam/italia/lazio/latina/san-felice-circeo/',
    source: 'Vedetta.org' },  



// Abruzzo
{ id: 'ski-campo-felice',
          lat: 42.2069,
          lng: 13.4693,
          name: 'Campo Felice',
          city: 'Rocca di Mezzo',
          country: 'Italy',
          feed_url: 'https://wtvthmb.feratel.com/thumbnails/6420.jpeg',
          external_url: 'https://webtv.feratel.com/webtv/?design=v5&cam=6420',
          source: 'Vedetta.org' },


// Venice
  { id: 'sky-it-rialto', lat: 45.4381, lng: 12.3358, name: 'Venice - Rialto Bridge', city: 'Venice', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/veneto/venezia/ponte-di-rialto.html', source: 'SkylineWebcams' },
  { id: 'sky-it-sanmarco', lat: 45.4341, lng: 12.3384, name: 'Venice - St. Mark\'s Square', city: 'Venice', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/veneto/venezia/piazza-san-marco.html', source: 'SkylineWebcams' },
  { id: 'sky-it-grandcanal', lat: 45.4311, lng: 12.3283, name: 'Venice - Grand Canal', city: 'Venice', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/veneto/venezia/canal-grande.html', source: 'SkylineWebcams' },

  // Milan
  { id: 'sky-it-duomo', lat: 45.4642, lng: 9.1900, name: 'Milan - Milan Cathedral', city: 'Milan', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/duomo-milano.html', source: 'SkylineWebcams' },
  { id: 'sky-it-sanbabila', lat: 45.4665, lng: 9.1969, name: 'Milan - Piazza San Babila', city: 'Milan', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive435.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/lombardia/milano/piazza-san-babila.html', source: 'SkylineWebcams' },

  // Florence
  { id: 'sky-it-signoria', lat: 43.7695, lng: 11.2558, name: 'Florence - Piazza della Signoria', city: 'Florence', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive245.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/toscana/firenze/piazza-della-signoria.html', source: 'SkylineWebcams' },
  { id: 'sky-it-pontevecchio', lat: 43.7687, lng: 11.2530, name: 'Florence - Ponte Vecchio', city: 'Florence', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/toscana/firenze/ponte-vecchio.html', source: 'SkylineWebcams' },

  // Naples
  { id: 'sky-it-vesuvio', lat: 40.8174, lng: 14.4261, name: 'Naples - Mount Vesuvius', city: 'Naples', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive66.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/campania/napoli/vesuvio.html', source: 'SkylineWebcams' },
  { id: 'sky-it-plebiscito', lat: 40.8359, lng: 14.2487, name: 'Naples - Piazza del Plebiscito', city: 'Naples', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive260.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/campania/napoli/piazza-del-plebiscito.html', source: 'SkylineWebcams' },

  // Amalfi Coast
  { id: 'sky-it-amalfi', lat: 40.6333, lng: 14.6027, name: 'Amalfi Coast - Positano', city: 'Positano', country: 'Italy', feed_url: '/api/cctv/proxy?url=https%3A%2F%2Fcdn.skylinewebcams.com%2Flive259.jpg', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/campania/salerno/positano.html', source: 'SkylineWebcams' },
  
  // Sicily
  { id: 'sky-it-etna', lat: 37.7510, lng: 14.9934, name: 'Mount Etna - Volcano', city: 'Catania', country: 'Italy', external_url: 'https://www.skylinewebcams.com/en/webcam/italia/sicilia/catania/vulcano-etna.html', source: 'SkylineWebcams' },
];

export async function fetchItalyCameras(): Promise<CctvCamera[]> {
  return SKYLINE_ITALY;
}
