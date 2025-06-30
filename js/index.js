function mostrarToast() {
    const toastEl = document.getElementById('toastCarrinho');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
    // Função para trocar a imagem principal
    function trocarImagem(el) {
      const mainImg = document.getElementById('main-image');
      mainImg.src = el.src;
      document.querySelectorAll('.thumb-img').forEach(img => {
        img.classList.remove('active');
      });
      el.classList.add('active');
    }

  // Função para aumentar e diminuir a quantidade
   document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.quantity-control').forEach(control => {
    const increaseBtn = control.querySelector('.btn-increase');
    const decreaseBtn = control.querySelector('.btn-decrease');
    const quantityInput = control.querySelector('.input-quantity');

    const getQuantity = () => parseInt(quantityInput.value) || 1;

    increaseBtn.addEventListener('click', () => {
      quantityInput.value = getQuantity() + 1;
    });

    decreaseBtn.addEventListener('click', () => {
      const current = getQuantity();
      if (current > 1) {
        quantityInput.value = current - 1;
      }
    });

    quantityInput.addEventListener('input', () => {
      if (getQuantity() < 1) {
        quantityInput.value = 1;
      }
    });
  });
});

//Função para alternar entre tema claro e esuro
  document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const themeIcon = document.querySelector('.theme-icon');
  const body = document.body;
  const depoimento = document.getElementById('carouselDepoimentos');
  const TituloDepoimento = document.getElementById('depoimento-titulo');
  const DepoimentoBorda = document.getElementById('depoimento');

  // Alternância de tema
  toggleThemeBtn.addEventListener('click', () => {
    const isLight = body.getAttribute('data-bs-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';

    // Aplica novo tema
    body.setAttribute('data-bs-theme', newTheme);

       // Muda o depoimento
    depoimento.classList.toggle('bg-dark');
    TituloDepoimento.classList.toggle('text-light');
    DepoimentoBorda.classList.toggle('depoimento-fundo-dark');
    DepoimentoBorda.classList.toggle('bg-light');

    // Atualiza imagem dos ícones para que se adequem ao modo escuro
    document.querySelectorAll(".theme-icon").forEach(img => {
  const novoTema = body.getAttribute("data-bs-theme");
  const novoSrc = novoTema === "dark" ? img.getAttribute("data-dark") : img.getAttribute("data-light");
  if (novoSrc) img.setAttribute("src", novoSrc);
});
  });
});

