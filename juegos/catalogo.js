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
  { id:'cancha', tipo:'adaptado', anim:'cancha', c:'#D6167A', em:'🟩',
    nm:{es:'La Cancha', en:'La Cancha'}, urls:{ MX:'juegos/cancha.html' } },

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

  { id:'pool', tipo:'mundo', anim:'emoji', c:'#0E7A45', em:'🎱', tag:{es:'Nuevo · 3D', en:'New · 3D'},
    nm:{es:'Pool 3D', en:'Pool 3D'}, url:'juegos/pool.html' },
  { id:'puzzle', tipo:'mundo', anim:'jigsaw', c:'#7B5BE6', em:'🧩',
    nm:{es:'Rompecabezas', en:'Jigsaw'}, abre:'puzzle' },
  { id:'vr', tipo:'mundo', anim:'kart', c:'#F4551D', em:'🏎️',
    nm:{es:'Vuelta Rápida', en:'Vuelta Rápida'}, url:'juegos/vuelta-rapida.html' }
];

window.FP_PORTADAS = {
  'stack:AR':  'juegos/portadas/stack-argentina.jpg',
  'cancha:MX': 'juegos/portadas/cancha-mexico.jpg',
  'ulama':     'juegos/portadas/ulama-3d.jpg',
  'pool':      'juegos/portadas/pool-3d.jpg',
  'puzzle':    'juegos/portadas/rompecabezas.jpg',
  'vr':        'juegos/portadas/vuelta-rapida.jpg'
};
