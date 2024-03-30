const zoomImage = document.getElementById('zoom-image');
const magnifyingGlass = document.getElementById('magnifying-glass');

document.getElementById('image-container').addEventListener('mousemove', function(e) {
  const { left, top, width, height } = this.getBoundingClientRect();
  const mouseX = e.clientX - left;
  const mouseY = e.clientY - top;

  const scaleX = this.offsetWidth / zoomImage.naturalWidth;
  const scaleY = this.offsetHeight / zoomImage.naturalHeight;

  magnifyingGlass.style.backgroundImage = `url('${zoomImage.src}')`;
  magnifyingGlass.style.backgroundPosition = `-${mouseX / scaleX}px -${mouseY / scaleY}px`;
});

zoomImage.addEventListener('click', function() {
  this.classList.toggle('zoomed');
});

