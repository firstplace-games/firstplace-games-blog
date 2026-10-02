/* ═══════════════════════════════════════════════════════════════════════
   CATÁLOGO ÚNICO DE JUEGOS · FirstPlace.games
   ═══════════════════════════════════════════════════════════════════════
   Una sola lista para todo el sitio. El panel de juegos del mapa la lee al
   elegir un país; la sala (juegos.html) y las páginas de país pueden leer la
   misma. Un juego nuevo = una entrada acá. Nada más.

   tipo:
     'adaptado'  el mismo juego con una versión por país (Stack, La Cancha).
                 `urls` dice qué países la tienen y dónde está cada una.
     'tipico'    un juego tradicional de UN país (Ulama, Frontón…). `urls`
                 lleva ese único país.
     'mundo'     sirve para cualquier país. `url` o `abre` (juego interno).
   Orden en el panel: adaptado → tipico → mundo.

   Portadas: FP_PORTADAS busca primero "juego:PAÍS" (stack:AR) y después
   "juego" solo. Sin portada, el panel dibuja una animación de respaldo
   (`anim`). Las rutas son relativas a la raíz del sitio.
   ═══════════════════════════════════════════════════════════════════════ */
window.FP_JUEGOS = [
  { id:'stack', tipo:'adaptado', anim:'stack', c:'#F4A640', em:'🧱',
    nm:{es:'Stack', en:'Stack'}, conPais:true,
    urls:{ MX:'juegos/stack-mexico.html', US:'juegos/stack-usa.html', FR:'juegos/stack-france.html',
      IN:'juegos/stack-india.html', CN:'juegos/stack-china.html', BR:'juegos/stack-brasil.html',
      ID:'juegos/stack-indonesia.html', NG:'juegos/stack-nigeria.html', PK:'juegos/stack-pakistan.html',
      BD:'juegos/stack-bangladesh.html', RU:'juegos/stack-russia.html', ET:'juegos/stack-ethiopia.html',
      JP:'juegos/stack-japan.html', KR:'juegos/stack-korea.html', IT:'juegos/stack-italy.html',
      ES:'juegos/stack-spain.html', GB:'juegos/stack-uk.html', DE:'juegos/stack-germany.html',
      NL:'juegos/stack-netherlands.html', PT:'juegos/stack-portugal.html', AR:'juegos/stack-argentina.html',
      UY:'juegos/stack-uruguay.html', CL:'juegos/stack-chile.html', CO:'juegos/stack-colombia.html',
      CU:'juegos/stack-cuba.html' } },
  /* Maze: laberinto con monumento, deporte y rivales de cada país (01/10) */
  { id:'maze', tipo:'adaptado', anim:'emoji', c:'#2F5BD3', em:'🎭',
    nm:{es:'Maze', en:'Maze'}, conPais:true,
    urls:{ MX:'juegos/maze-mexico.html', US:'juegos/maze-usa.html', FR:'juegos/maze-france.html', IN:'juegos/maze-india.html', CN:'juegos/maze-china.html', BR:'juegos/maze-brasil.html', ID:'juegos/maze-indonesia.html', NG:'juegos/maze-nigeria.html', PK:'juegos/maze-pakistan.html', BD:'juegos/maze-bangladesh.html', RU:'juegos/maze-russia.html', ET:'juegos/maze-ethiopia.html', JP:'juegos/maze-japan.html', KR:'juegos/maze-korea.html', IT:'juegos/maze-italy.html', ES:'juegos/maze-spain.html', GB:'juegos/maze-uk.html', DE:'juegos/maze-germany.html', NL:'juegos/maze-netherlands.html', PT:'juegos/maze-portugal.html', AR:'juegos/maze-argentina.html', UY:'juegos/maze-uruguay.html', CL:'juegos/maze-chile.html', CO:'juegos/maze-colombia.html', CU:'juegos/maze-cuba.html' } },
  /* Cinco: palabra de cinco letras del deporte del pais, una por dia (30/09) */
  { id:'cinco', tipo:'adaptado', anim:'emoji', c:'#3E9B6B', em:'🔤',
    nm:{es:'Cinco', en:'Cinco'}, conPais:true, tag:{es:'Del día', en:'Daily'},
    urls:{ MX:'juegos/cinco-mexico.html', US:'juegos/cinco-usa.html', FR:'juegos/cinco-france.html',
      IN:'juegos/cinco-india.html', CN:'juegos/cinco-china.html', BR:'juegos/cinco-brasil.html',
      ID:'juegos/cinco-indonesia.html', NG:'juegos/cinco-nigeria.html', PK:'juegos/cinco-pakistan.html',
      BD:'juegos/cinco-bangladesh.html', RU:'juegos/cinco-russia.html', ET:'juegos/cinco-ethiopia.html',
      JP:'juegos/cinco-japan.html', KR:'juegos/cinco-korea.html', IT:'juegos/cinco-italy.html',
      ES:'juegos/cinco-spain.html', GB:'juegos/cinco-uk.html', DE:'juegos/cinco-germany.html',
      NL:'juegos/cinco-netherlands.html', PT:'juegos/cinco-portugal.html', AR:'juegos/cinco-argentina.html',
      UY:'juegos/cinco-uruguay.html', CL:'juegos/cinco-chile.html', CO:'juegos/cinco-colombia.html',
      CU:'juegos/cinco-cuba.html' } },
  /* La Villa: prototipo de cuatro paises, el pais se elige adentro (02/10) */
  { id:'villa', tipo:'adaptado', anim:'emoji', c:'#B5581F', em:'🏘️',
    nm:{es:'La Villa', en:'The Village'}, conPais:true,
    tag:{es:'Prototipo · 4 países', en:'Prototype · 4 countries'},
    urls:{ MX:'juegos/villa.html', IT:'juegos/villa.html', ES:'juegos/villa.html', JP:'juegos/villa.html' } },
  { id:'cancha', tipo:'adaptado', anim:'cancha', c:'#D6167A', em:'🟩',
    nm:{es:'La Cancha', en:'The Court'}, urls:{ MX:'juegos/cancha.html' } },

  { id:'ulama', tipo:'tipico', anim:'ulama', c:'#C98A16', em:'⚫', estrella:['MX'], tag:{es:'Nuevo · 3D', en:'New · 3D'},
    nm:{es:'Ulama 3D', en:'Ulama 3D'}, urls:{ MX:'juegos/ulama.html' } },
  { id:'fronton', tipo:'tipico', anim:'emoji', c:'#2B7A9E', em:'🥎',
    nm:{es:'Frontón', en:'Frontón'}, urls:{ ES:'juegos/fronton.html' } },
  { id:'ruzzola', tipo:'tipico', anim:'emoji', c:'#C98A16', em:'🧀',
    nm:{es:'Ruzzola', en:'Ruzzola'}, urls:{ IT:'juegos/ruzzola.html' } },
  { id:'queso', tipo:'tipico', anim:'emoji', c:'#4F7A46', em:'🧀',
    nm:{es:'El Queso', en:'Cheese Rolling'}, urls:{ GB:'juegos/queso.html' } },
  { id:'fierljeppen', tipo:'tipico', anim:'emoji', c:'#1B6E93', em:'🤸',
    nm:{es:'Fierljeppen', en:'Fierljeppen'}, urls:{ NL:'juegos/fierljeppen.html' } },
  { id:'petanca', tipo:'tipico', anim:'emoji', c:'#566C8C', em:'🎯',
    nm:{es:'Pétanque', en:'Pétanque'}, urls:{ FR:'juegos/petanca.html' } },

  { id:'primero', tipo:'mundo', anim:'emoji', c:'#E0A32B', em:'🥇',
    tag:{es:'Del día', en:'Daily'},
    nm:{es:'Primero', en:'Primero'}, url:'juegos/primero.html' },
  { id:'pool', tipo:'mundo', anim:'emoji', c:'#0E7A45', em:'🎱', tag:{es:'Nuevo · 3D', en:'New · 3D'},
    nm:{es:'Pool 3D', en:'Pool 3D'}, url:'juegos/pool.html' },
  { id:'puzzle', tipo:'mundo', anim:'jigsaw', c:'#7B5BE6', em:'🧩',
    nm:{es:'Rompecabezas', en:'Jigsaw'}, abre:'puzzle' },
  { id:'vr', tipo:'mundo', anim:'kart', c:'#F4551D', em:'🏎️',
    nm:{es:'Vuelta Rápida', en:'Fast Lap'}, url:'juegos/vuelta-rapida.html' }
];

window.FP_PORTADAS = {
  'stack:AR':  'juegos/portadas/stack-argentina.jpg',
  'stack:IN':  'juegos/portadas/stack-india.jpg',
  'stack:CN':  'juegos/portadas/stack-china.jpg',
  'stack:BR':  'juegos/portadas/stack-brasil.jpg',
  'stack:JP':  'juegos/portadas/stack-japan.jpg',
  'stack:IT':  'juegos/portadas/stack-italy.jpg',
  'cancha:MX': 'juegos/portadas/cancha-mexico.jpg',
  'ulama':     'juegos/portadas/ulama-3d.jpg',
  'fronton':   'juegos/portadas/fronton.jpg',
  'ruzzola':   'juegos/portadas/ruzzola.jpg',
  'queso':     'juegos/portadas/queso.jpg',
  'fierljeppen':'juegos/portadas/fierljeppen.jpg',
  'petanca':   'juegos/portadas/petanca.jpg',
  'pool':      'juegos/portadas/pool-3d.jpg',
  'puzzle':    'juegos/portadas/rompecabezas.jpg',
  'primero':   'juegos/portadas/primero.jpg',
  'villa':     'juegos/portadas/villa.jpg',
  'vr:MX':     'juegos/portadas/vuelta-rapida-mexico.jpg',
  'vr':        'juegos/portadas/vuelta-rapida.jpg'
};
