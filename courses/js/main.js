document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.btn-menu');
    const navigation = document.querySelector('.navigation');
    
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});

const observer = new IntersectionObserver(
  ([entry]) => {
    document.querySelector('.header')
      .classList.toggle('scrolled', !entry.isIntersecting);
  },
  { threshold: 0.1 } // Сработает, когда 10% элемента не видно
);

// Наблюдаем за элементом в начале страницы
observer.observe(document.querySelector('.hero')); 