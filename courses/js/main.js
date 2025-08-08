document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.btn-menu');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', function() {
  navigation.classList.toggle('active');
  
  if (navigation.classList.contains('active')) {
    // Блокировка
    document.body.style.top = `-${window.scrollY}px`;
    document.body.classList.add('no-scroll');
  } else {
    // Разблокировка
    const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
    document.body.classList.remove('no-scroll');
    window.scrollTo(0, scrollY);
    document.body.style.top = '';
  }
});
});