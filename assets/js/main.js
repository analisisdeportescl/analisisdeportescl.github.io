/* Transparencia Deporte — Scripts */
(function() {
  'use strict';

  // --- Menu movil ---
  var boton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-links');

  if (boton && nav) {
    boton.addEventListener('click', function() {
      var abierto = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto);
      boton.setAttribute('aria-label', abierto ? 'Cerrar menu' : 'Abrir menu');
    });

    document.addEventListener('click', function(e) {
      if (!boton.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Tablas responsivas ---
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
