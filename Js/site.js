//alterar   Tu nombre uma vez no código e atualizar o logo em todas as páginas
const SITE = {
  nombre: "Medio Web",
  etiqueta: "Web",
  ciudad: "Madrid"
};

document.querySelectorAll("[data-site]").forEach(el => {
  el.textContent = SITE[el.dataset.site];
});

//menu
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return;

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('aberto', open);
  }

  toggle.addEventListener('click', () =>
    setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();