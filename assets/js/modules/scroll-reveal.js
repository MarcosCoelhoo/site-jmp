export default function initScrollReveal() {
  const cards = document.querySelectorAll(
    '.mensageiros-cards [data-anime="scroll"]'
  );

  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    cards.forEach((item) => {
      const cardTop = item.getBoundingClientRect().top;
      const cardVisible = cardTop - windowHalf < 200;

      if (cardVisible) {
        item.classList.add("ativo");
      }
    });
  }

  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
