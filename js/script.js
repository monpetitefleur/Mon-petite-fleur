document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();

  year.forEach((element) => {
    element.textContent = currentYear;
  });

  const cards = document.querySelectorAll('.card, .gallery-item');
  cards.forEach((card, index) => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.08)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.04)';
    });

    card.style.animationDelay = `${index * 0.08}s`;
  });
});
