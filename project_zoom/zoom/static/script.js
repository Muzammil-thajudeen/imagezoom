const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2) rotate(2deg)';
    image.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1) rotate(0deg)';
    image.style.boxShadow = '';
  });
});