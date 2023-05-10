//menu em hamburger
const menuBotao = document.querySelector('[data-menu="button"]');
const menuLista = document.querySelector('[data-menu="lista"]');
console.log(menuBotao, menuLista);

function openButton(event) {
  menuBotao.classList.toggle("active");
  menuLista.classList.toggle("active");
}

menuBotao.addEventListener("click", openButton);

// arrow que faz o scroll para o menu
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");

  // operador condicional ternario ( se condicao 1 for verdadeira tera o valor caso contrario tera o 2 valor da 2 condicao = ? :  )
};
window.addEventListener("scroll", scrollUp);
