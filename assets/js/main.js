/* =============================================================================
   Transparencia Deporte — Scripts principales
   Funcionalidad mínima: menú móvil + tablas responsivas
   ============================================================================= */

(function() {
  'use strict';

  // --- Menú móvil ---
  var botonMenu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-principal');

  if (botonMenu && nav) {
    botonMenu.addEventListener('click', function() {
      var estaAbierto = nav.classList.toggle('abierto');
      botonMenu.setAttribute('aria-expanded', estaAbierto);
      botonMenu.setAttribute('aria-label', estaAbierto ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
      if (!botonMenu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Tablas responsivas ---
  // Envuelve todas las tablas del artículo en un div con scroll horizontal
  var tablas = document.querySelectorAll('.articulo-cuerpo table');
  tablas.forEach(function(tabla) {
    if (!tabla.parentElement.classList.contains('tabla-wrapper')) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('tabla-wrapper');
      wrapper.setAttribute('role', 'region');
      wrapper.setAttribute('aria-label', 'Tabla con scroll horizontal');
      wrapper.setAttribute('tabindex', '0');
      tabla.parentNode.insertBefore(wrapper, tabla);
      wrapper.appendChild(tabla);
    }
  });

})();
