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

// hover \\



