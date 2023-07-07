const hamburger = document.getElementById('hamburger');
const menuIcon = document.getElementById('menu');
const btnCross = document.getElementById('cross');

hamburger.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

btnCross.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});
