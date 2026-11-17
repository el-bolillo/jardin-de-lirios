/**
 * ============================================================================
 * JARDÍN DE LIRIOS — LÓGICA INTERACTIVA, FLORACIÓN LENTA, CICLO NOCHE-DÍA Y LETRA
 * Archivo: script.js
 * ============================================================================
 * Incluye:
 * 1. Letra completa calibrada con los compases reales del archivo de audio:
 *    "Romeroflacko - G-LOVE ft. EL MESIAS y The B Brothers" (cancion.mp3)
 * 2. Crecimiento y floración lenta y progresiva de los lirios en SVG/CSS.
 * 3. Transición atmosférica continua de Noche Estrellada -> Amanecer -> Día Soleado
 *    a medida que avanza la canción.
 * 4. Barra de música oculta como un icono en la esquina inferior izquierda
 *    que se despliega al tocarla.
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. LETRA SINCRONIZADA CON PRECISIÓN AL COMPÁS DEL AUDIO (04:24 / 264.4s)
     ========================================================================== */
  const SYNCHRONIZED_LYRICS = [
    { start: 0.0, end: 3.6, artist: 'Preludio Nocturno', text: '♪ Melodía de medianoche... los lirios despiertan ♪', chorus: false },
    { start: 3.6, end: 6.0, artist: 'Intro · Romeroflacko', text: '¡Uuuuh!', chorus: false },
    { start: 6.0, end: 10.1, artist: 'Intro · Romeroflacko', text: 'Baby, baby, baby, baby... Ah', chorus: false },
    { start: 10.1, end: 14.3, artist: 'Intro · Romeroflacko', text: 'Romeroflacko está en la casa, men', chorus: false },
    { start: 14.3, end: 18.8, artist: 'Intro · Romeroflacko', text: 'Con estilo poeta y el G-Funk sonando de fondo', chorus: false },
    { start: 18.8, end: 22.8, artist: 'Intro · Romeroflacko', text: 'Ya te la sabes, men... jaja', chorus: false },

    // Verso 1 — Romeroflacko (comienza exactamente en 22.80s, 2.518s por compás)
    { start: 22.80, end: 25.32, artist: 'Romeroflacko', text: 'Tú derrochando estilo, yo tengo las frases', chorus: false },
    { start: 25.32, end: 27.84, artist: 'Romeroflacko', text: 'Tú vuela conmigo, veremos el desenlace', chorus: false },
    { start: 27.84, end: 30.35, artist: 'Romeroflacko', text: 'Me siento muy bien, pero podría ser mejor', chorus: false },
    { start: 30.35, end: 32.87, artist: 'Romeroflacko', text: 'Estoy en la playa, pero falta tu calor', chorus: false },
    { start: 32.87, end: 35.39, artist: 'Romeroflacko', text: 'El chico de ojos tristes, serio y no cuenta chistes', chorus: false },
    { start: 35.39, end: 37.91, artist: 'Romeroflacko', text: 'Caminaba solo por las calles de la ciudad', chorus: false },
    { start: 37.91, end: 40.43, artist: 'Romeroflacko', text: 'En ruta del desierto, con un futuro incierto', chorus: false },
    { start: 40.43, end: 42.94, artist: 'Romeroflacko', text: 'Pero me pongo fino pa’ poder darte un concierto', chorus: false },
    { start: 42.94, end: 45.46, artist: 'Romeroflacko', text: 'Estoy dando la vuelta en el centro del mall', chorus: false },
    { start: 45.46, end: 47.98, artist: 'Romeroflacko', text: 'Pero estoy calling, please pick up the phone', chorus: false },
    { start: 47.98, end: 50.50, artist: 'Romeroflacko', text: 'Rolling Stone cuando tomo este micro', chorus: false },
    { start: 50.50, end: 53.02, artist: 'Romeroflacko', text: 'Haciendo que cualquier escenario me quede chico', chorus: false },
    { start: 53.02, end: 55.53, artist: 'Romeroflacko', text: 'A mí no me gusta tener que aparentar', chorus: false },
    { start: 55.53, end: 58.05, artist: 'Romeroflacko', text: 'Perdóname la ropa y la personalidad', chorus: false },
    { start: 58.05, end: 60.57, artist: 'Romeroflacko', text: 'A veces muy tosco en mi manera de hablar', chorus: false },
    { start: 60.57, end: 63.09, artist: 'Romeroflacko', text: 'Pero tú eres tú, yo soy yo y nada más', chorus: false },

    // Puente poético 1
    { start: 63.09, end: 65.61, artist: 'Romeroflacko', text: 'Y de forma explícita, estás lindísima', chorus: true },
    { start: 65.61, end: 68.12, artist: 'Romeroflacko', text: 'Un poco exótica, como una gótica', chorus: false },
    { start: 68.12, end: 70.64, artist: 'Romeroflacko', text: 'Le gusta el rock y el rap, a veces cínica', chorus: false },
    { start: 70.64, end: 73.16, artist: 'Romeroflacko', text: 'Y es cosa típica dejarte afónica', chorus: false },
    { start: 73.16, end: 75.68, artist: 'Romeroflacko', text: 'Tengo una libreta, cuatro noches sin dormir', chorus: false },
    { start: 75.68, end: 78.20, artist: 'Romeroflacko', text: 'Una vida poeta que me da para escribir', chorus: true },
    { start: 78.20, end: 80.71, artist: 'Romeroflacko', text: 'Odiando la rutina, quiero escapar y salir', chorus: false },
    { start: 80.71, end: 83.23, artist: 'Romeroflacko', text: '¿Me quieres acompañar o te quedarás aquí?', chorus: true },
    { start: 83.23, end: 85.75, artist: 'Romeroflacko', text: 'Por favor di que sí, yo me siento rest in peace', chorus: false },
    { start: 85.75, end: 88.27, artist: 'Romeroflacko', text: 'Desde que no estás aquí, el mundo se nota más gris', chorus: false },
    { start: 88.27, end: 90.78, artist: 'Romeroflacko', text: 'Esta noche solo quiero tirar a perdernos', chorus: true },
    { start: 90.78, end: 93.30, artist: 'Romeroflacko', text: 'Yendo en la carretera escuchando «Querer Querernos»', chorus: true },

    // Coro 1 — The B Brothers (comienza en 93.30s, cada frase dura 2 compases = 5.025s)
    { start: 93.30, end: 98.33, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime qué es lo que ocupas esta noche', chorus: true },
    { start: 98.33, end: 103.35, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime que no te vas a ir todavía', chorus: true },
    { start: 103.35, end: 108.38, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime qué es lo que ocupas esta noche', chorus: true },
    { start: 108.38, end: 113.40, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime que no te vas a ir todavía', chorus: true },

    // Post-Coro / Hook 1 (113.40s a 133.50s)
    { start: 113.40, end: 115.91, artist: 'G-LOVE · Hook', text: 'Long life, living in Cabo San Lucas', chorus: false },
    { start: 115.91, end: 118.43, artist: 'G-LOVE · Hook', text: 'Flow de verano, mami, así como te gusta', chorus: false },
    { start: 118.43, end: 120.94, artist: 'G-LOVE · Hook', text: 'Es que esta noche yo tengo la receta', chorus: true },
    { start: 120.94, end: 123.45, artist: 'G-LOVE · Hook', text: 'Tú serás mis versos para mi estilo poeta', chorus: true },
    { start: 123.45, end: 125.96, artist: 'G-LOVE · Hook', text: 'Long life, living in Cabo San Lucas', chorus: false },
    { start: 125.96, end: 128.48, artist: 'G-LOVE · Hook', text: 'Flow de verano, mami, así como te gusta', chorus: false },
    { start: 128.48, end: 130.99, artist: 'G-LOVE · Hook', text: 'Es que esta noche yo tengo la receta', chorus: true },
    { start: 130.99, end: 133.50, artist: 'G-LOVE · Hook', text: 'Tú serás mis versos para mi estilo poeta', chorus: true },

    // Verso 2 — El Mesías (133.50s a 173.70s)
    { start: 133.50, end: 136.01, artist: 'El Mesías', text: 'Cuando te veo me pongo muy maniac', chorus: false },
    { start: 136.01, end: 138.53, artist: 'El Mesías', text: 'Flow fabuloso y no ando en un Cadillac', chorus: false },
    { start: 138.53, end: 141.04, artist: 'El Mesías', text: 'Quiero invitarte a tomar un Clericot', chorus: false },
    { start: 141.04, end: 143.55, artist: 'El Mesías', text: 'Mi mérito será enamorarte soltando rap', chorus: true },
    { start: 143.55, end: 146.06, artist: 'El Mesías', text: 'Cada paso me pesa y pasa que pienso en ti', chorus: true },
    { start: 146.06, end: 148.58, artist: 'El Mesías', text: 'Con palabras plasmadas en pistas llamado beat', chorus: false },
    { start: 148.58, end: 151.09, artist: 'El Mesías', text: 'Propongo pirarnos muy lejos de aquí', chorus: true },
    { start: 151.09, end: 153.60, artist: 'El Mesías', text: 'A planetas cercanos donde tú seas feliz', chorus: true },
    { start: 153.60, end: 156.11, artist: 'El Mesías', text: 'Quiero que progreses, que hagas las paces', chorus: false },
    { start: 156.11, end: 158.63, artist: 'El Mesías', text: 'Con tus papás si se hace un desfase', chorus: false },
    { start: 158.63, end: 161.14, artist: 'El Mesías', text: 'Te van a preguntar qué es lo que tú haces', chorus: false },
    { start: 161.14, end: 163.65, artist: 'El Mesías', text: 'Con ese vatillo que parece lavatrastes', chorus: false },
    { start: 163.65, end: 166.16, artist: 'El Mesías', text: 'Diles que no soy un delincuente', chorus: false },
    { start: 166.16, end: 168.68, artist: 'El Mesías', text: 'Diles que soy un artista independiente', chorus: false },
    { start: 168.68, end: 171.19, artist: 'El Mesías', text: 'Que para ti solo quiere lo mejor', chorus: true },
    { start: 171.19, end: 173.70, artist: 'El Mesías', text: 'Y se deja su alma escribiendo con pasión', chorus: true },

    // Coro 2 — The B Brothers (173.70s a 193.80s)
    { start: 173.70, end: 178.73, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime qué es lo que ocupas esta noche', chorus: true },
    { start: 178.73, end: 183.75, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime que no te vas a ir todavía', chorus: true },
    { start: 183.75, end: 188.78, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime qué es lo que ocupas esta noche', chorus: true },
    { start: 188.78, end: 193.80, artist: 'Coro · The B Brothers', text: 'Oye mujer, dime que no te vas a ir todavía', chorus: true },

    // Post-Coro / Hook 2 (193.80s a 213.90s)
    { start: 193.80, end: 196.31, artist: 'G-LOVE · Hook', text: 'Long life, living in Cabo San Lucas', chorus: false },
    { start: 196.31, end: 198.83, artist: 'G-LOVE · Hook', text: 'Flow de verano, mami, así como te gusta', chorus: false },
    { start: 198.83, end: 201.34, artist: 'G-LOVE · Hook', text: 'Es que esta noche yo tengo la receta', chorus: true },
    { start: 201.34, end: 203.85, artist: 'G-LOVE · Hook', text: 'Tú serás mis versos para mi estilo poeta', chorus: true },
    { start: 203.85, end: 206.36, artist: 'G-LOVE · Hook', text: 'Long life, living in Cabo San Lucas', chorus: false },
    { start: 206.36, end: 208.88, artist: 'G-LOVE · Hook', text: 'Flow de verano, mami, así como te gusta', chorus: false },
    { start: 208.88, end: 211.39, artist: 'G-LOVE · Hook', text: 'Es que esta noche yo tengo la receta', chorus: true },
    { start: 211.39, end: 214.10, artist: 'G-LOVE · Hook', text: 'Tú serás mis versos para mi estilo poeta', chorus: true },

    // Outro Romántico bajo la luz del día (214.10s a 264.40s)
    { start: 214.10, end: 219.20, artist: 'Dedicatoria · Sunshine', text: 'You’re my sunshine lady... mi mejor versión', chorus: true },
    { start: 219.20, end: 224.10, artist: 'Outro · Romeroflacko', text: 'Baja California, men... del sur de la península', chorus: false },
    { start: 224.10, end: 228.00, artist: 'Outro · Romeroflacko', text: 'Cabo San Lucas, men... Represent', chorus: false },
    { start: 228.00, end: 233.90, artist: 'Dedicatoria · Poeta', text: 'Esto es pa’ ti... Una vida poeta', chorus: true },
    { start: 233.90, end: 254.00, artist: 'Vocoder · G-Funk Outro', text: '✨ Long life, living in Cabo San Lucas... Tú serás mis versos para mi estilo poeta ✨', chorus: true },
    { start: 254.00, end: 266.00, artist: 'Jardín de Lirios', text: 'En cada lirio que florece bajo este sol vive un verso para ti ♥', chorus: true }
  ];

  /* ==========================================================================
     2. CONFIGURACIÓN DEL JARDÍN DE LIRIOS (FLORACIÓN LENTA Y ESCALONADA)
     ========================================================================== */
  const LILY_PALETTES = {
    pink: {
      outer: 'url(#petalPink)',
      inner: 'url(#petalPinkInner)',
      spotColor: '#7a113b',
      veinColor: '#ffb5d8'
    },
    moon: {
      outer: 'url(#petalMoon)',
      inner: 'url(#petalMoonInner)',
      spotColor: '#8e4578',
      veinColor: '#f7d4ec'
    },
    coral: {
      outer: 'url(#petalCoral)',
      inner: 'url(#petalCoralInner)',
      spotColor: '#801c3d',
      veinColor: '#ffc8bc'
    },
    amethyst: {
      outer: 'url(#petalAmethyst)',
      inner: 'url(#petalAmethystInner)',
      spotColor: '#4c1663',
      veinColor: '#e5b8fa'
    }
  };

  // Los delayOffset están distribuidos entre 0s y 38s para que los lirios tarden mucho más
  // en crecer y vayan abriendo sus flores progresivamente durante los primeros ~95 segundos.
  const LILY_GARDEN_SPECS = [
    { x: 145, baseY: 635, height: 255, curve: -24, scale: 0.72, tilt: -11, palette: 'amethyst', delayOffset: 30.0, hasSideBud: true, sideBudDir: -1 },
    { x: 285, baseY: 642, height: 320, curve: 18, scale: 0.88, tilt: -5, palette: 'pink', delayOffset: 14.0, hasSideBud: true, sideBudDir: 1 },
    { x: 430, baseY: 638, height: 280, curve: -15, scale: 0.78, tilt: 7, palette: 'moon', delayOffset: 24.0, hasSideBud: false, sideBudDir: 1 },
    { x: 575, baseY: 646, height: 380, curve: -22, scale: 1.04, tilt: -4, palette: 'pink', delayOffset: 5.0, hasSideBud: true, sideBudDir: -1 },
    { x: 720, baseY: 650, height: 425, curve: 14, scale: 1.16, tilt: 2, palette: 'moon', delayOffset: 0.0, hasSideBud: true, sideBudDir: 1 },
    { x: 865, baseY: 646, height: 370, curve: 25, scale: 1.02, tilt: 6, palette: 'coral', delayOffset: 9.0, hasSideBud: true, sideBudDir: 1 },
    { x: 1015, baseY: 638, height: 295, curve: -18, scale: 0.82, tilt: -6, palette: 'amethyst', delayOffset: 27.0, hasSideBud: false, sideBudDir: -1 },
    { x: 1155, baseY: 642, height: 335, curve: -20, scale: 0.9, tilt: 5, palette: 'pink', delayOffset: 19.0, hasSideBud: true, sideBudDir: -1 },
    { x: 1295, baseY: 635, height: 245, curve: 22, scale: 0.7, tilt: 12, palette: 'coral', delayOffset: 35.0, hasSideBud: true, sideBudDir: 1 }
  ];

  /* ==========================================================================
     3. ETAPAS DE COLOR PARA LA TRANSICIÓN PROGRESIVA DE NOCHE A DÍA
     ========================================================================== */
  const SKY_KEYFRAMES = [
    {
      // 0% (0:00) — Noche profunda estrellada
      p: 0.0,
      skyTop: [5, 3, 13],
      skyMid: [16, 8, 38],
      skyHorizon: [38, 18, 59],
      skyBottom: [28, 15, 43],
      hillFar: [13, 7, 28],
      hillMid: [9, 23, 25],
      hillFront: [5, 15, 16],
      dawnGlow: 0.0,
      nebulaAlpha: 0.45,
      starVisibility: 1.0,
      moonOpacity: 0.95,
      moonY: 0,
      sunOpacity: 0.0,
      sunY: 260
    },
    {
      // 28% (~1:14) — Pre-amanecer violeta e índigo
      p: 0.28,
      skyTop: [14, 10, 38],
      skyMid: [42, 22, 76],
      skyHorizon: [108, 42, 96],
      skyBottom: [64, 28, 68],
      hillFar: [24, 15, 44],
      hillMid: [15, 36, 36],
      hillFront: [9, 24, 22],
      dawnGlow: 0.35,
      nebulaAlpha: 0.32,
      starVisibility: 0.72,
      moonOpacity: 0.78,
      moonY: 35,
      sunOpacity: 0.12,
      sunY: 190
    },
    {
      // 52% (~2:17) — Alba rosada y dorada (primeros rayos de sol)
      p: 0.52,
      skyTop: [42, 68, 128],
      skyMid: [132, 92, 154],
      skyHorizon: [244, 138, 146],
      skyBottom: [252, 186, 138],
      hillFar: [42, 64, 68],
      hillMid: [26, 72, 56],
      hillFront: [16, 48, 36],
      dawnGlow: 0.85,
      nebulaAlpha: 0.12,
      starVisibility: 0.22,
      moonOpacity: 0.28,
      moonY: 110,
      sunOpacity: 0.72,
      sunY: 85
    },
    {
      // 76% (~3:20) — Mañana luminosa dorada
      p: 0.76,
      skyTop: [56, 132, 206],
      skyMid: [116, 182, 236],
      skyHorizon: [252, 216, 172],
      skyBottom: [255, 236, 192],
      hillFar: [48, 106, 86],
      hillMid: [34, 96, 68],
      hillFront: [20, 66, 46],
      dawnGlow: 0.65,
      nebulaAlpha: 0.0,
      starVisibility: 0.0,
      moonOpacity: 0.0,
      moonY: 180,
      sunOpacity: 0.96,
      sunY: 22
    },
    {
      // 100% (4:24) — Día radiante de verano ("You're my sunshine lady")
      p: 1.0,
      skyTop: [46, 146, 226],
      skyMid: [118, 196, 248],
      skyHorizon: [208, 238, 255],
      skyBottom: [255, 246, 216],
      hillFar: [56, 124, 96],
      hillMid: [38, 108, 76],
      hillFront: [22, 76, 52],
      dawnGlow: 0.45,
      nebulaAlpha: 0.0,
      starVisibility: 0.0,
      moonOpacity: 0.0,
      moonY: 210,
      sunOpacity: 1.0,
      sunY: 0
    }
  ];

  /* ==========================================================================
     4. REFERENCIAS DEL DOM Y ESTADO DE LA EXPERIENCIA
     ========================================================================== */
  const audioEl = document.getElementById('bg-music');
  const introOverlay = document.getElementById('intro-overlay');
  const btnStart = document.getElementById('btn-start');
  const audioFileInput = document.getElementById('audio-file-input');
  const introSongName = document.getElementById('intro-song-name');
  const songTitleDisplay = document.getElementById('song-title-display');

  const moonWrapper = document.getElementById('moon-wrapper');
  const sunWrapper = document.getElementById('sun-wrapper');

  const liliesLayer = document.getElementById('lilies-layer');
  const backFoliageLayer = document.getElementById('back-foliage-layer');
  const frontFoliageLayer = document.getElementById('front-foliage-layer');

  const lyricArtistEl = document.getElementById('lyric-artist');
  const lyricPrevEl = document.getElementById('lyric-prev');
  const lyricCurrentEl = document.getElementById('lyric-current');
  const lyricNextEl = document.getElementById('lyric-next');
  const bloomStageText = document.getElementById('bloom-stage-text');
  const skyPhaseIcon = document.getElementById('sky-phase-icon');

  const playerDock = document.getElementById('player-dock');
  const btnToggleDock = document.getElementById('btn-toggle-dock');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const timeCurrentEl = document.getElementById('time-current');
  const timeTotalEl = document.getElementById('time-total');
  const progressTrack = document.getElementById('progress-track');
  const progressFill = document.getElementById('progress-fill');
  const progressThumb = document.getElementById('progress-thumb');
  const btnSyncMinus = document.getElementById('btn-sync-minus');
  const btnSyncPlus = document.getElementById('btn-sync-plus');
  const btnRebloom = document.getElementById('btn-rebloom');

  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');

  const state = {
    started: false,
    activeLyricIndex: -1,
    lyricOffsetSec: 0,
    dayProgress: 0, // 0.0 = Noche, 1.0 = Pleno día
    starAlphaMultiplier: 1.0,
    pointerX: 0.5,
    pointerY: 0.5,
    windPhase: 0,
    extraLiliesCount: 0
  };

  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* ==========================================================================
     5. CONSTRUCCIÓN PROCEDIMENTAL DEL JARDÍN DE LIRIOS (CRECIMIENTO LENTO)
     ========================================================================== */

  function createSvgEl(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [key, val] of Object.entries(attrs)) {
      el.setAttribute(key, String(val));
    }
    return el;
  }

  function buildMeadowFoliage() {
    backFoliageLayer.innerHTML = '';
    frontFoliageLayer.innerHTML = '';

    for (let i = 0; i < 38; i++) {
      const x = (i / 37) * 1420 + 10 + (Math.sin(i * 7.3) * 15);
      const baseY = 640 + (Math.cos(i * 3.1) * 10);
      const h = 65 + (i % 5) * 22;
      const bend = (i % 2 === 0 ? 1 : -1) * (18 + (i % 4) * 9);
      const pathData = `M ${x.toFixed(1)} ${baseY.toFixed(1)} Q ${(x + bend * 0.5).toFixed(1)} ${(baseY - h * 0.55).toFixed(1)} ${(x + bend).toFixed(1)} ${(baseY - h).toFixed(1)}`;

      const blade = createSvgEl('path', {
        d: pathData,
        class: 'meadow-blade',
        stroke: i % 2 === 0 ? '#1b4d3a' : '#246048',
        'stroke-width': (2.2 + (i % 3) * 0.7).toFixed(1),
        opacity: '0.72',
        style: `--blade-delay: ${(0.8 + (i % 12) * 1.2).toFixed(2)}s`
      });
      backFoliageLayer.appendChild(blade);
    }

    for (let i = 0; i < 28; i++) {
      const x = (i / 27) * 1410 + 15 + (Math.cos(i * 5.1) * 18);
      const baseY = 655 + (Math.sin(i * 2.7) * 8);
      const h = 48 + (i % 4) * 18;
      const bend = (i % 2 === 0 ? -1 : 1) * (15 + (i % 3) * 10);
      const pathData = `M ${x.toFixed(1)} ${baseY.toFixed(1)} Q ${(x + bend * 0.4).toFixed(1)} ${(baseY - h * 0.6).toFixed(1)} ${(x + bend).toFixed(1)} ${(baseY - h).toFixed(1)}`;

      const blade = createSvgEl('path', {
        d: pathData,
        class: 'meadow-blade',
        stroke: '#12382b',
        'stroke-width': '3',
        opacity: '0.88',
        style: `--blade-delay: ${(1.2 + (i % 10) * 1.4).toFixed(2)}s`
      });
      frontFoliageLayer.appendChild(blade);
    }
  }

  /**
   * Construye un lirio con tiempos de crecimiento y floración lentos y progresivos.
   */
  function createLilyElement(spec, index, isFastInteractive = false) {
    const {
      x,
      baseY,
      height,
      curve,
      scale,
      tilt,
      palette: paletteKey,
      delayOffset,
      hasSideBud,
      sideBudDir
    } = spec;

    const pal = LILY_PALETTES[paletteKey] || LILY_PALETTES.pink;

    // Si es un lirio del jardín principal, crece lentamente durante la canción (~35 a ~95 seg).
    // Si es un lirio plantado por clic del usuario, florece en ~12 seg para dar respuesta visual.
    const sproutDelay = isFastInteractive ? 0.1 : 1.0 + delayOffset * 0.65;
    const stemDelay = isFastInteractive ? 0.4 : 2.5 + delayOffset * 0.85;
    const stemDuration = isFastInteractive ? 7.5 : 26.0 + (index % 4) * 4.5;
    const budDelay = stemDelay + stemDuration * 0.64;
    const bloomDelay = stemDelay + stemDuration * 0.82;
    const petalOpenDuration = isFastInteractive ? 6.5 : 18.0 + (index % 3) * 3.0;

    const tipX = x + curve;
    const tipY = baseY - height;
    const ctrlX = x - curve * 0.65;
    const ctrlY = baseY - height * 0.52;

    const plantGroup = createSvgEl('g', {
      class: 'lily-plant',
      'data-index': index
    });

    const swayDuration = (5.8 + (index % 4) * 0.85).toFixed(2);
    const swayDelay = (index * -0.7).toFixed(2);
    const swayAngle = (2.1 + (index % 3) * 0.65).toFixed(2);

    const swayGroup = createSvgEl('g', {
      class: 'lily-sway-group',
      style: `--sway-duration: ${swayDuration}s; --sway-delay: ${swayDelay}s; --sway-angle: ${swayAngle}deg;`
    });

    // 1. Brote inicial en la base del suelo
    const sproutGroup = createSvgEl('g', {
      class: 'lily-sprout',
      style: `--sprout-delay: ${sproutDelay.toFixed(2)}s;`
    });
    sproutGroup.appendChild(
      createSvgEl('ellipse', {
        cx: x,
        cy: baseY,
        rx: 14 * scale,
        ry: 5 * scale,
        fill: 'rgba(110, 210, 150, 0.35)'
      })
    );
    sproutGroup.appendChild(
      createSvgEl('path', {
        d: `M ${x} ${baseY} C ${x - 8 * scale} ${baseY - 12 * scale}, ${x - 4 * scale} ${baseY - 22 * scale}, ${x} ${baseY - 25 * scale} C ${x + 4 * scale} ${baseY - 22 * scale}, ${x + 8 * scale} ${baseY - 12 * scale}, ${x} ${baseY} Z`,
        fill: '#5db380'
      })
    );
    swayGroup.appendChild(sproutGroup);

    // 2. Tallo principal
    const stemLength = Math.round(height * 1.25);
    const stemPath = createSvgEl('path', {
      d: `M ${x} ${baseY} Q ${ctrlX} ${ctrlY} ${tipX} ${tipY}`,
      class: 'lily-stem',
      'stroke-width': (5.2 * scale).toFixed(2),
      style: `--stem-len: ${stemLength}; --stem-duration: ${stemDuration.toFixed(2)}s; --stem-delay: ${stemDelay.toFixed(2)}s;`
    });
    swayGroup.appendChild(stemPath);

    if (hasSideBud) {
      const branchStartT = 0.62;
      const bx = (1 - branchStartT) * (1 - branchStartT) * x + 2 * (1 - branchStartT) * branchStartT * ctrlX + branchStartT * branchStartT * tipX;
      const by = (1 - branchStartT) * (1 - branchStartT) * baseY + 2 * (1 - branchStartT) * branchStartT * ctrlY + branchStartT * branchStartT * tipY;
      const budTipX = bx + sideBudDir * 48 * scale;
      const budTipY = by - 68 * scale;

      const subStem = createSvgEl('path', {
        d: `M ${bx.toFixed(1)} ${by.toFixed(1)} Q ${(bx + sideBudDir * 18 * scale).toFixed(1)} ${(by - 38 * scale).toFixed(1)} ${budTipX.toFixed(1)} ${budTipY.toFixed(1)}`,
        class: 'lily-substem',
        'stroke-width': (3.1 * scale).toFixed(2),
        style: `--stem-len: 140; --stem-duration: ${(stemDuration * 0.45).toFixed(2)}s; --stem-delay: ${(stemDelay + stemDuration * 0.5).toFixed(2)}s;`
      });
      swayGroup.appendChild(subStem);

      const sideBudGroup = createSvgEl('g', {
        class: 'lily-bud-stage',
        style: `--bud-delay: ${(budDelay + 1.8).toFixed(2)}s;`
      });
      const sideBudInner = createSvgEl('g', {
        transform: `translate(${budTipX.toFixed(1)}, ${budTipY.toFixed(1)}) rotate(${sideBudDir * 24}) scale(${(scale * 0.65).toFixed(2)})`
      });
      sideBudInner.appendChild(
        createSvgEl('path', {
          d: 'M 0 0 C -14 -12, -16 -38, 0 -56 C 16 -38, 14 -12, 0 0 Z',
          fill: pal.outer
        })
      );
      sideBudInner.appendChild(
        createSvgEl('path', {
          d: 'M 0 2 C -11 -8, -8 -26, -3 -42 C -1 -24, 0 -10, 0 2 Z',
          fill: '#4e9a6f',
          opacity: '0.85'
        })
      );
      sideBudGroup.appendChild(sideBudInner);
      swayGroup.appendChild(sideBudGroup);
    }

    // 3. Hojas lanceoladas
    const leafPositions = [0.24, 0.42, 0.58, 0.74];
    leafPositions.forEach((t, leafIdx) => {
      const lx = (1 - t) * (1 - t) * x + 2 * (1 - t) * t * ctrlX + t * t * tipX;
      const ly = (1 - t) * (1 - t) * baseY + 2 * (1 - t) * t * ctrlY + t * t * tipY;
      const isLeft = (leafIdx + index) % 2 === 0;
      const dir = isLeft ? -1 : 1;
      const leafScale = scale * (1.05 - leafIdx * 0.12);
      const leafDelay = stemDelay + stemDuration * (t * 0.82);

      const leafPath = isLeft
        ? `M ${lx.toFixed(1)} ${ly.toFixed(1)} C ${(lx - 32 * leafScale).toFixed(1)} ${(ly - 18 * leafScale).toFixed(1)}, ${(lx - 68 * leafScale).toFixed(1)} ${(ly - 8 * leafScale).toFixed(1)}, ${(lx - 86 * leafScale).toFixed(1)} ${(ly + 14 * leafScale).toFixed(1)} C ${(lx - 58 * leafScale).toFixed(1)} ${(ly + 8 * leafScale).toFixed(1)}, ${(lx - 26 * leafScale).toFixed(1)} ${(ly + 10 * leafScale).toFixed(1)}, ${lx.toFixed(1)} ${(ly + 6 * leafScale).toFixed(1)} Z`
        : `M ${lx.toFixed(1)} ${ly.toFixed(1)} C ${(lx + 32 * leafScale).toFixed(1)} ${(ly - 18 * leafScale).toFixed(1)}, ${(lx + 68 * leafScale).toFixed(1)} ${(ly - 8 * leafScale).toFixed(1)}, ${(lx + 86 * leafScale).toFixed(1)} ${(ly + 14 * leafScale).toFixed(1)} C ${(lx + 58 * leafScale).toFixed(1)} ${(ly + 8 * leafScale).toFixed(1)}, ${(lx + 26 * leafScale).toFixed(1)} ${(ly + 10 * leafScale).toFixed(1)}, ${lx.toFixed(1)} ${(ly + 6 * leafScale).toFixed(1)} Z`;

      const leafEl = createSvgEl('path', {
        d: leafPath,
        fill: isLeft ? 'url(#leafGradLeft)' : 'url(#leafGradRight)',
        class: `lily-leaf ${isLeft ? 'leaf-left' : 'leaf-right'}`,
        style: `--leaf-delay: ${leafDelay.toFixed(2)}s; --leaf-start-rot: ${dir * 28}deg;`
      });
      swayGroup.appendChild(leafEl);
    });

    // 4 y 5. Capullo y Flor de Lirio (apertura lenta)
    const flowerAnchor = createSvgEl('g', {
      transform: `translate(${tipX.toFixed(1)}, ${tipY.toFixed(1)}) rotate(${tilt}) scale(${scale.toFixed(2)})`
    });

    const budStage = createSvgEl('g', {
      class: 'lily-bud-stage',
      style: `--bud-delay: ${budDelay.toFixed(2)}s;`
    });
    const budShell = createSvgEl('g', {
      class: 'lily-bud-shell',
      style: `--bloom-delay: ${bloomDelay.toFixed(2)}s;`
    });
    budShell.appendChild(
      createSvgEl('path', {
        d: 'M 0 6 C -18 -14, -20 -52, 0 -78 C 20 -52, 18 -14, 0 6 Z',
        fill: pal.outer
      })
    );
    budShell.appendChild(
      createSvgEl('path', {
        d: 'M 0 8 C -14 -8, -12 -36, 0 -58 C 12 -36, 14 -8, 0 8 Z',
        fill: '#4e9a6f',
        opacity: '0.72'
      })
    );
    budStage.appendChild(budShell);
    flowerAnchor.appendChild(budStage);

    const flowerHead = createSvgEl('g', {
      class: 'lily-flower-head',
      style: `--bloom-delay: ${bloomDelay.toFixed(2)}s;`
    });

    flowerHead.appendChild(
      createSvgEl('circle', {
        cx: '0',
        cy: '-28',
        r: '58',
        fill: 'url(#nectarGlow)',
        class: 'lily-core-glow',
        style: `--bloom-delay: ${bloomDelay.toFixed(2)}s;`
      })
    );

    const outerAngles = [
      { closed: -8, open: -64, stagger: 0.4 },
      { closed: 0, open: 0, stagger: 0.0 },
      { closed: 8, open: 64, stagger: 0.8 }
    ];

    outerAngles.forEach((cfg) => {
      const petalGroup = createSvgEl('g', {
        class: 'lily-petal petal-outer',
        style: `--closed-rot: ${cfg.closed}deg; --open-rot: ${cfg.open}deg; --bloom-delay: ${bloomDelay.toFixed(2)}s; --petal-stagger: ${cfg.stagger}s; --petal-open-duration: ${petalOpenDuration.toFixed(1)}s;`
      });

      petalGroup.appendChild(
        createSvgEl('path', {
          d: 'M 0 0 C -22 -18, -28 -58, -14 -86 C -6 -100, 0 -108, 0 -114 C 0 -108, 6 -100, 14 -86 C 28 -58, 22 -18, 0 0 Z',
          fill: pal.outer,
          stroke: '#ffffff',
          'stroke-width': '0.9',
          'stroke-opacity': '0.65'
        })
      );

      petalGroup.appendChild(
        createSvgEl('path', {
          d: 'M 0 -4 Q 0 -55 0 -102',
          fill: 'none',
          stroke: pal.veinColor,
          'stroke-width': '1.6',
          'stroke-linecap': 'round',
          opacity: '0.8'
        })
      );

      flowerHead.appendChild(petalGroup);
    });

    const innerAngles = [
      { closed: -5, open: -34, stagger: 2.2 },
      { closed: 5, open: 34, stagger: 2.8 },
      { closed: 0, open: 180, stagger: 3.4, isBottom: true }
    ];

    innerAngles.forEach((cfg) => {
      const petalGroup = createSvgEl('g', {
        class: 'lily-petal petal-inner',
        style: `--closed-rot: ${cfg.closed}deg; --open-rot: ${cfg.open}deg; --bloom-delay: ${bloomDelay.toFixed(2)}s; --petal-stagger: ${cfg.stagger}s; --petal-open-duration: ${petalOpenDuration.toFixed(1)}s;`
      });

      const dPath = cfg.isBottom
        ? 'M 0 0 C -24 -14, -28 -44, -12 -68 C -4 -78, 0 -84, 0 -88 C 0 -84, 4 -78, 12 -68 C 28 -44, 24 -14, 0 0 Z'
        : 'M 0 0 C -26 -20, -32 -60, -16 -90 C -7 -104, 0 -112, 0 -118 C 0 -112, 7 -104, 16 -90 C 32 -60, 26 -20, 0 0 Z';

      petalGroup.appendChild(
        createSvgEl('path', {
          d: dPath,
          fill: pal.inner,
          stroke: '#ffffff',
          'stroke-width': '1.1',
          'stroke-opacity': '0.82'
        })
      );

      petalGroup.appendChild(
        createSvgEl('path', {
          d: cfg.isBottom ? 'M 0 -4 Q 0 -42 0 -76' : 'M 0 -4 Q 0 -58 0 -104',
          fill: 'none',
          stroke: '#ffffff',
          'stroke-width': '1.8',
          'stroke-linecap': 'round',
          opacity: '0.85'
        })
      );

      const spots = [
        { cx: -6, cy: -26, r: 1.5 },
        { cx: 5, cy: -30, r: 1.4 },
        { cx: -8, cy: -40, r: 1.7 },
        { cx: 7, cy: -44, r: 1.5 },
        { cx: -4, cy: -52, r: 1.3 },
        { cx: 4, cy: -56, r: 1.2 }
      ];
      spots.forEach((sp) => {
        petalGroup.appendChild(
          createSvgEl('circle', {
            cx: sp.cx,
            cy: sp.cy,
            r: sp.r,
            fill: pal.spotColor,
            opacity: '0.65'
          })
        );
      });

      flowerHead.appendChild(petalGroup);
    });

    const stamenGroup = createSvgEl('g', {
      class: 'lily-stamen-group',
      style: `--bloom-delay: ${bloomDelay.toFixed(2)}s;`
    });

    const stamens = [
      { endX: -28, endY: -62, ctrlX: -12, ctrlY: -36, rot: -25 },
      { endX: -17, endY: -72, ctrlX: -8, ctrlY: -42, rot: -12 },
      { endX: -6, endY: -76, ctrlX: -3, ctrlY: -45, rot: -4 },
      { endX: 6, endY: -76, ctrlX: 3, ctrlY: -45, rot: 4 },
      { endX: 17, endY: -72, ctrlX: 8, ctrlY: -42, rot: 12 },
      { endX: 28, endY: -62, ctrlX: 12, ctrlY: -36, rot: 25 }
    ];

    stamens.forEach((st) => {
      stamenGroup.appendChild(
        createSvgEl('path', {
          d: `M 0 -4 Q ${st.ctrlX} ${st.ctrlY} ${st.endX} ${st.endY}`,
          fill: 'none',
          stroke: '#ffdff0',
          'stroke-width': '1.5',
          'stroke-linecap': 'round'
        })
      );
      stamenGroup.appendChild(
        createSvgEl('ellipse', {
          cx: st.endX,
          cy: st.endY,
          rx: '4.5',
          ry: '2.1',
          fill: 'url(#antherGold)',
          transform: `rotate(${st.rot} ${st.endX} ${st.endY})`
        })
      );
    });

    stamenGroup.appendChild(
      createSvgEl('path', {
        d: 'M 0 -2 Q 2 -48 0 -84',
        fill: 'none',
        stroke: '#e8ffb8',
        'stroke-width': '2.2',
        'stroke-linecap': 'round'
      })
    );
    stamenGroup.appendChild(
      createSvgEl('circle', {
        cx: '0',
        cy: '-85',
        r: '3.6',
        fill: '#fff6b3'
      })
    );

    flowerHead.appendChild(stamenGroup);
    flowerAnchor.appendChild(flowerHead);
    swayGroup.appendChild(flowerAnchor);
    plantGroup.appendChild(swayGroup);

    plantGroup.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const rect = canvas.getBoundingClientRect();
      const clientX = ev.clientX || rect.width / 2;
      const clientY = ev.clientY || rect.height * 0.65;
      spawnSparkleBurst(clientX, clientY, 26);
    });

    return plantGroup;
  }

  function buildGarden() {
    liliesLayer.innerHTML = '';
    buildMeadowFoliage();
    LILY_GARDEN_SPECS.forEach((spec, idx) => {
      const lilyEl = createLilyElement(spec, idx, false);
      liliesLayer.appendChild(lilyEl);
    });
  }

  function triggerGardenBloom() {
    document.body.classList.remove('garden-awakened');
    void liliesLayer.offsetWidth;
    setTimeout(() => {
      document.body.classList.add('garden-awakened');
    }, 60);
  }

  /* ==========================================================================
     6. CICLO PROGRESIVO DE NOCHE A DÍA SEGÚN EL AVANCE DE LA CANCIÓN
     ========================================================================== */

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function lerpColor(c1, c2, t) {
    const r = Math.round(lerp(c1[0], c2[0], t));
    const g = Math.round(lerp(c1[1], c2[1], t));
    const b = Math.round(lerp(c1[2], c2[2], t));
    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * Interpola suavemente los colores del cielo, colinas, luna, sol y estrellas
   * en función del progreso de la canción (0.0 = inicio en noche, 1.0 = final en pleno día).
   */
  function updateDaylightCycle(progress) {
    const p = Math.min(1, Math.max(0, progress));
    state.dayProgress = p;

    let k0 = SKY_KEYFRAMES[0];
    let k1 = SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1];

    for (let i = 0; i < SKY_KEYFRAMES.length - 1; i++) {
      if (p >= SKY_KEYFRAMES[i].p && p <= SKY_KEYFRAMES[i + 1].p) {
        k0 = SKY_KEYFRAMES[i];
        k1 = SKY_KEYFRAMES[i + 1];
        break;
      }
    }

    const span = Math.max(0.0001, k1.p - k0.p);
    const localT = Math.min(1, Math.max(0, (p - k0.p) / span));

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--sky-top', lerpColor(k0.skyTop, k1.skyTop, localT));
    rootStyle.setProperty('--sky-mid', lerpColor(k0.skyMid, k1.skyMid, localT));
    rootStyle.setProperty('--sky-horizon', lerpColor(k0.skyHorizon, k1.skyHorizon, localT));
    rootStyle.setProperty('--sky-bottom', lerpColor(k0.skyBottom, k1.skyBottom, localT));

    rootStyle.setProperty('--hill-far-color', lerpColor(k0.hillFar, k1.hillFar, localT));
    rootStyle.setProperty('--hill-mid-color', lerpColor(k0.hillMid, k1.hillMid, localT));
    rootStyle.setProperty('--hill-front-color', lerpColor(k0.hillFront, k1.hillFront, localT));

    const dawnAlpha = lerp(k0.dawnGlow, k1.dawnGlow, localT);
    const nebulaAlpha = lerp(k0.nebulaAlpha, k1.nebulaAlpha, localT);
    rootStyle.setProperty('--dawn-opacity', dawnAlpha.toFixed(3));
    rootStyle.setProperty('--nebula-opacity', nebulaAlpha.toFixed(3));

    state.starAlphaMultiplier = lerp(k0.starVisibility, k1.starVisibility, localT);

    // Posición y opacidad de la Luna (se oculta al amanecer)
    const moonAlpha = lerp(k0.moonOpacity, k1.moonOpacity, localT);
    const moonY = lerp(k0.moonY, k1.moonY, localT);
    moonWrapper.style.opacity = moonAlpha.toFixed(3);
    moonWrapper.style.transform = `translateY(${moonY.toFixed(1)}px) scale(${(0.85 + moonAlpha * 0.15).toFixed(3)})`;

    // Posición y opacidad del Sol (asciende desde el horizonte hasta iluminar el día)
    const sunAlpha = lerp(k0.sunOpacity, k1.sunOpacity, localT);
    const sunY = lerp(k0.sunY, k1.sunY, localT);
    sunWrapper.style.opacity = sunAlpha.toFixed(3);
    sunWrapper.style.transform = `translateY(${sunY.toFixed(1)}px) scale(${(0.75 + sunAlpha * 0.25).toFixed(3)})`;

    // Icono de fase celeste en la barra superior
    if (p < 0.32) {
      skyPhaseIcon.textContent = '☾';
    } else if (p < 0.65) {
      skyPhaseIcon.textContent = '✿';
    } else {
      skyPhaseIcon.textContent = '☀';
    }
  }

  /* ==========================================================================
     7. SISTEMA DE PARTÍCULAS ROMÁNTICAS EN CANVAS
     ========================================================================== */
  let width = window.innerWidth;
  let height = window.innerHeight;

  const stars = [];
  const fireflies = [];
  const floatingPetals = [];
  const sparkles = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initParticles() {
    stars.length = 0;
    fireflies.length = 0;
    floatingPetals.length = 0;

    const starCount = width < 768 ? 65 : 120;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.68),
        r: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.025 + 0.008,
        phase: Math.random() * Math.PI * 2
      });
    }

    const fireflyCount = width < 768 ? 28 : 48;
    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: height * 0.35 + Math.random() * (height * 0.65),
        vx: (Math.random() - 0.5) * 0.45,
        vy: -(Math.random() * 0.55 + 0.18),
        r: Math.random() * 2.4 + 1.1,
        hue: Math.random() > 0.35 ? 45 : 330,
        alpha: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    const petalCount = width < 768 ? 14 : 24;
    for (let i = 0; i < petalCount; i++) {
      floatingPetals.push(createFloatingPetal(true));
    }
  }

  function createFloatingPetal(randomY = false) {
    const colors = [
      'rgba(255, 192, 224, 0.82)',
      'rgba(244, 126, 184, 0.76)',
      'rgba(255, 232, 245, 0.86)',
      'rgba(232, 168, 248, 0.72)'
    ];
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -25,
      size: Math.random() * 7 + 5.5,
      vx: Math.random() * 0.7 + 0.25,
      vy: Math.random() * 0.65 + 0.35,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.024,
      swayPhase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  function spawnSparkleBurst(x, y, count = 20) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 2.8 + 0.7;
      sparkles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        r: Math.random() * 2.5 + 1.2,
        life: 1.0,
        decay: Math.random() * 0.018 + 0.012,
        color: i % 2 === 0 ? '#ffe9a6' : '#ff9ed2'
      });
    }
  }

  function renderAmbientCanvas() {
    ctx.clearRect(0, 0, width, height);
    state.windPhase += 0.012;
    const windForce = Math.sin(state.windPhase) * 0.35 + (state.pointerX - 0.5) * 0.45;

    // 1. Dibujar estrellas (se atenúan suavemente a medida que amanece)
    if (state.starAlphaMultiplier > 0.01) {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.phase += s.speed;
        const twinkle = (Math.sin(s.phase) + 1) * 0.5;
        const finalAlpha = s.alpha * (0.35 + twinkle * 0.65) * state.starAlphaMultiplier;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 252, ${finalAlpha.toFixed(3)})`;
        ctx.fill();
      }
    }

    // 2. Dibujar luciérnagas nocturnas / polen dorado diurno
    const intensityBoost = state.started ? 1 : 0.45;
    for (let i = 0; i < fireflies.length; i++) {
      const f = fireflies[i];
      f.phase += 0.035;
      f.x += f.vx + Math.sin(f.phase) * 0.25 + windForce * 0.4;
      f.y += f.vy * intensityBoost;

      if (f.y < -20) {
        f.y = height + 10;
        f.x = Math.random() * width;
      }
      if (f.x < -20) f.x = width + 20;
      if (f.x > width + 20) f.x = -20;

      const glowAlpha = (0.35 + (Math.sin(f.phase) + 1) * 0.32) * intensityBoost;
      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 4.2);
      if (f.hue === 45) {
        grad.addColorStop(0, `rgba(255, 248, 200, ${glowAlpha.toFixed(3)})`);
        grad.addColorStop(0.45, `rgba(245, 185, 66, ${(glowAlpha * 0.55).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(245, 185, 66, 0)');
      } else {
        grad.addColorStop(0, `rgba(255, 225, 242, ${glowAlpha.toFixed(3)})`);
        grad.addColorStop(0.45, `rgba(242, 108, 167, ${(glowAlpha * 0.55).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(242, 108, 167, 0)');
      }

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 4.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // 3. Dibujar pétalos de lirio flotando
    if (state.started) {
      for (let i = 0; i < floatingPetals.length; i++) {
        const p = floatingPetals[i];
        p.swayPhase += 0.022;
        p.x += p.vx + Math.sin(p.swayPhase) * 0.55 + windForce * 0.8;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        if (p.y > height + 30 || p.x > width + 40 || p.x < -40) {
          Object.assign(p, createFloatingPetal(false));
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.65, -p.size * 0.5, p.size * 0.55, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.55, p.size * 0.5, -p.size * 0.65, -p.size * 0.5, 0, -p.size);
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(255, 165, 215, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    // 4. Dibujar destellos interactivos
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const sp = sparkles[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.vy += 0.03;
      sp.life -= sp.decay;

      if (sp.life <= 0) {
        sparkles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, sp.life);
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.r, 0, Math.PI * 2);
      ctx.fillStyle = sp.color;
      ctx.shadowColor = sp.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderAmbientCanvas);
  }

  /* ==========================================================================
     8. SINCRONIZACIÓN DE LA CANCIÓN, LETRA Y ETAPAS DE FLORACIÓN
     ========================================================================== */

  function formatTime(sec) {
    if (!Number.isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateBloomStageIndicator(currentTime) {
    let text = 'Noche estrellada · Los brotes despiertan...';
    if (currentTime >= 12 && currentTime < 35) {
      text = 'Los tallos crecen lentamente hacia la luna...';
    } else if (currentTime >= 35 && currentTime < 70) {
      text = 'Capullos formándose y primeros lirios abriendo...';
    } else if (currentTime >= 70 && currentTime < 130) {
      text = 'Alba rosada · Los lirios abren sus pétalos...';
    } else if (currentTime >= 130 && currentTime < 195) {
      text = 'Amanecer dorado · Jardín en plena floración';
    } else if (currentTime >= 195) {
      text = 'Pleno día radiante · Jardín de lirios bajo el sol ☀';
    }
    if (bloomStageText.textContent !== text) {
      bloomStageText.textContent = text;
    }
  }

  function syncLyricsWithAudio() {
    const rawTime = audioEl.currentTime || 0;
    const duration = audioEl.duration || 264.4;

    const progressRatio = Math.min(1, Math.max(0, rawTime / duration));
    const pct = progressRatio * 100;
    progressFill.style.width = `${pct.toFixed(2)}%`;
    progressThumb.style.left = `${pct.toFixed(2)}%`;
    timeCurrentEl.textContent = formatTime(rawTime);
    if (Number.isFinite(audioEl.duration) && audioEl.duration > 0) {
      timeTotalEl.textContent = formatTime(audioEl.duration);
    }

    // Actualizar transición progresiva de Noche a Día y estado de floración
    updateDaylightCycle(progressRatio);
    updateBloomStageIndicator(rawTime);

    // Tiempo ajustado con el offset de sincronización
    const t = rawTime - state.lyricOffsetSec;

    let foundIdx = -1;
    for (let i = 0; i < SYNCHRONIZED_LYRICS.length; i++) {
      const item = SYNCHRONIZED_LYRICS[i];
      if (t >= item.start && t < item.end) {
        foundIdx = i;
        break;
      }
    }

    if (foundIdx !== -1 && foundIdx !== state.activeLyricIndex) {
      state.activeLyricIndex = foundIdx;
      const currentItem = SYNCHRONIZED_LYRICS[foundIdx];
      const prevItem = foundIdx > 0 ? SYNCHRONIZED_LYRICS[foundIdx - 1] : null;
      const nextItem = foundIdx < SYNCHRONIZED_LYRICS.length - 1 ? SYNCHRONIZED_LYRICS[foundIdx + 1] : null;

      lyricArtistEl.textContent = currentItem.artist || '';
      lyricPrevEl.textContent = prevItem ? prevItem.text : '';
      lyricNextEl.textContent = nextItem ? nextItem.text : '';

      lyricCurrentEl.classList.remove('lyric-enter');
      void lyricCurrentEl.offsetWidth;
      lyricCurrentEl.textContent = currentItem.text;
      lyricCurrentEl.classList.toggle('is-chorus', Boolean(currentItem.chorus));
      lyricCurrentEl.classList.add('lyric-enter');

      document.body.classList.toggle('chorus-active', Boolean(currentItem.chorus));

      if (currentItem.chorus) {
        spawnSparkleBurst(
          width * (0.25 + Math.random() * 0.5),
          height * (0.55 + Math.random() * 0.2),
          14
        );
      }
    }
  }

  /* ==========================================================================
     9. INTERACCIÓN Y CONTROLES DE LA EXPERIENCIA
     ========================================================================== */

  function startRomanticExperience() {
    if (state.started) return;
    state.started = true;

    introOverlay.classList.add('is-hidden');
    document.body.classList.add('experience-started');

    triggerGardenBloom();
    spawnSparkleBurst(width * 0.5, height * 0.5, 32);

    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playIcon.textContent = '❚❚';
        })
        .catch((err) => {
          console.warn('Reproducción esperando interacción directa:', err);
          playIcon.textContent = '▶';
        });
    }
  }

  function setupEventListeners() {
    btnStart.addEventListener('click', startRomanticExperience);

    // Botón icono en la esquina inferior izquierda para desplegar/ocultar la barra de música
    btnToggleDock.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const expanded = playerDock.classList.toggle('is-expanded');
      btnToggleDock.setAttribute('aria-expanded', String(expanded));
    });

    // Cerrar el panel desplegable si se toca fuera de él
    window.addEventListener('click', (ev) => {
      if (playerDock.classList.contains('is-expanded') && !playerDock.contains(ev.target)) {
        playerDock.classList.remove('is-expanded');
        btnToggleDock.setAttribute('aria-expanded', 'false');
      }
    });

    audioEl.addEventListener('timeupdate', syncLyricsWithAudio);

    audioEl.addEventListener('loadedmetadata', () => {
      if (Number.isFinite(audioEl.duration) && audioEl.duration > 0) {
        timeTotalEl.textContent = formatTime(audioEl.duration);
      }
    });

    audioEl.addEventListener('play', () => {
      playIcon.textContent = '❚❚';
    });

    audioEl.addEventListener('pause', () => {
      playIcon.textContent = '▶';
    });

    audioEl.addEventListener('ended', () => {
      playIcon.textContent = '▶';
      updateDaylightCycle(1.0);
      lyricArtistEl.textContent = 'Fin de la canción';
      lyricCurrentEl.textContent = 'Bajo la luz del nuevo día, estos lirios florecen para ti ♥';
      lyricNextEl.textContent = 'Toca el icono musical en la esquina inferior izquierda para repetir';
      spawnSparkleBurst(width * 0.5, height * 0.45, 40);
    });

    btnPlayPause.addEventListener('click', () => {
      if (audioEl.paused) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    });

    // Barra de progreso para adelantar/retroceder la canción
    progressTrack.addEventListener('click', (ev) => {
      const rect = progressTrack.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width));
      const duration = audioEl.duration || 264.4;
      audioEl.currentTime = ratio * duration;
      state.activeLyricIndex = -1;
      syncLyricsWithAudio();
    });

    btnSyncMinus.addEventListener('click', () => {
      state.lyricOffsetSec -= 0.3;
      state.activeLyricIndex = -1;
      syncLyricsWithAudio();
    });

    btnSyncPlus.addEventListener('click', () => {
      state.lyricOffsetSec += 0.3;
      state.activeLyricIndex = -1;
      syncLyricsWithAudio();
    });

    btnRebloom.addEventListener('click', () => {
      triggerGardenBloom();
      spawnSparkleBurst(width * 0.5, height * 0.72, 28);
    });

    audioFileInput.addEventListener('change', (ev) => {
      const file = ev.target.files && ev.target.files[0];
      if (!file) return;
      const fileUrl = URL.createObjectURL(file);
      audioEl.src = fileUrl;
      audioEl.load();
      const cleanName = file.name.replace(/\.[^/.]+$/, '');
      introSongName.textContent = cleanName;
      songTitleDisplay.textContent = cleanName;
    });

    window.addEventListener('pointermove', (ev) => {
      state.pointerX = ev.clientX / Math.max(1, width);
      state.pointerY = ev.clientY / Math.max(1, height);
    });

    window.addEventListener('click', (ev) => {
      if (!state.started) return;
      if (ev.target.closest('.player-dock') || ev.target.closest('.intro-overlay')) return;

      spawnSparkleBurst(ev.clientX, ev.clientY, 18);

      if (ev.clientY > height * 0.48 && state.extraLiliesCount < 5) {
        state.extraLiliesCount++;
        const svgX = (ev.clientX / width) * 1440;
        const palettes = ['pink', 'moon', 'coral', 'amethyst'];
        const newSpec = {
          x: Math.max(90, Math.min(1350, svgX)),
          baseY: 642 + (Math.random() * 10 - 5),
          height: 240 + Math.random() * 115,
          curve: (Math.random() - 0.5) * 36,
          scale: 0.68 + Math.random() * 0.25,
          tilt: (Math.random() - 0.5) * 16,
          palette: palettes[state.extraLiliesCount % palettes.length],
          delayOffset: 0,
          hasSideBud: Math.random() > 0.4,
          sideBudDir: Math.random() > 0.5 ? 1 : -1
        };
        const newLily = createLilyElement(newSpec, LILY_GARDEN_SPECS.length + state.extraLiliesCount, true);
        newLily.classList.add('pre-sprout');
        liliesLayer.appendChild(newLily);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            newLily.classList.remove('pre-sprout');
          });
        });
      }
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  /* ==========================================================================
     10. INICIALIZACIÓN
     ========================================================================== */
  function init() {
    resizeCanvas();
    initParticles();
    buildGarden();
    updateDaylightCycle(0);
    setupEventListeners();
    requestAnimationFrame(renderAmbientCanvas);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
