document.addEventListener('DOMContentLoaded', function () {
  var products = document.querySelectorAll('.product-card');
  products.forEach(function (card) {
    var img = card.querySelector('.product-image');
    if (!img) {
      card.classList.add('missing');
      return;
    }
    img.addEventListener('error', function () {
      card.classList.add('missing');
    });
  });

  var yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  var whatsappButton = document.querySelector('.whatsapp-fixed');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function () {
      window.open('https://wa.me/9779812345678', '_blank', 'noopener');
    });
  }
});
