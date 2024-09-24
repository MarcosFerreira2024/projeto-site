// hover \\
const textos = document.querySelectorAll(".texto");

function mudar_link() {
  this.classList.add("texto-click");
}

function add_hover() {
  this.classList.add("texto-hover");
}

function remove_hover() {
  this.classList.remove("texto-hover");
}

textos.forEach((element) => {
  element.addEventListener("click", mudar_link);
  element.addEventListener("mouseover", add_hover);
  element.addEventListener("mouseout", remove_hover);
});

// galeria \\

const galeria = document.querySelectorAll("#galeria img");
const principal = document.querySelector("#imagem-principal");
const botaoNavegar = document.querySelector("#botao-galeria");

function selecionar_item(event) {
  const src = event.currentTarget.src;
  const alt = event.currentTarget.alt;
  const url = event.currentTarget.dataset.url;

  if (principal.src !== src) {
    principal.classList.add("fade-out");

    setTimeout(() => {
      principal.src = src;
      principal.alt = alt;
      botaoNavegar.href = url;
      principal.classList.remove("fade-out");
      principal.classList.add("fade-in");
    }, 300);

    setTimeout(() => {
      principal.classList.remove("fade-in");
    }, 600);
  }
}

galeria.forEach((img) => {
  img.addEventListener("click", selecionar_item);
});
