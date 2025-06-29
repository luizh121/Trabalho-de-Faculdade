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
