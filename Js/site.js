//alterar   Tu nombre uma vez no código e atualizar o logo em todas as páginas
const SITE = {
  nombre: "Medido WEb",
  etiqueta: ""
};

document.querySelectorAll("[data-site]").forEach(el => {
  el.textContent = SITE[el.dataset.site];
});