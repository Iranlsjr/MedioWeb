//alterar   Tu nombre uma vez no código e atualizar o logo em todas as páginas
const SITE = {
  nombre: "Medio Web",
  etiqueta: "Web",
  ciudad: "Madrid"
};

document.querySelectorAll("[data-site]").forEach(el => {
  el.textContent = SITE[el.dataset.site];
});



const ENLACES = {
  github: "https://github.com/Iranlsjr",
  linkedin: "https://www.linkedin.com/in/iran-asir/",
  privacidad: "privacidad.html"
};

function insertarEnlaces() {
  const html = `
    <a href="${ENLACES.github}" target="_blank" rel="noopener noreferrer">GitHub</a> ·
    <a href="${ENLACES.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
    <a href="${ENLACES.privacidad}">Privacidad</a>
  `;

  document.querySelectorAll("[data-enlaces]").forEach(el => {
    el.innerHTML = html;
  });
}

insertarEnlaces();
