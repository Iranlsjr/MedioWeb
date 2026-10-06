//alterar   Tu nombre uma vez no código e atualizar o logo em todas as páginas
const SITE = {
  nombre: "Medio Web",
  etiqueta: "Web",
  ciudad: "ciudad"
};

document.querySelectorAll("[data-site]").forEach(el => {
  el.textContent = SITE[el.dataset.site];
});