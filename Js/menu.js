(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (!toggle || !menu) return;

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('aberto', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra al tocar un enlace del menú
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  // Cierra al tocar fuera del header
  document.addEventListener('click', function (e) {
    if (!e.target.closest('header')) setMenu(false);
  });

  // Cierra con Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
      toggle.focus();
    }
  });

  // Si se pasa a pantalla grande (girar el móvil, redimensionar), cierra el menú
  if (window.matchMedia) {
    var desktop = window.matchMedia('(min-width: 821px)');
    var onChange = function (e) { if (e.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else if (desktop.addListener) desktop.addListener(onChange);
  }
})();
