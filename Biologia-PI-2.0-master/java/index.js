const btnMobilee = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav-index');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const btnBuscaa = document.getElementById('btn-busca');

function toggleBusca() {
  const nav = document.getElementById('nav-index');
  nav.classList.toggle('ativo');
}

btnBusca.addEventListener('click', toggleBusca)