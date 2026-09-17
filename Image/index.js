const slideshowContainers = document.querySelectorAll('.slideshow-container');

slideshowContainers.forEach((container) => {
  const slides = container.querySelectorAll('.slide');
  if (!slides.length) return;
  container.dataset.index = '1';
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
});

function plusSlides(step, groupIndex) {
  const container = slideshowContainers[groupIndex];
  if (!container) return;

  const slides = container.querySelectorAll('.slide');
  if (!slides.length) return;

  let currentIndex = Number(container.dataset.index || 1);
  let nextIndex = currentIndex + step;

  if (nextIndex > slides.length) nextIndex = 1;
  if (nextIndex < 1) nextIndex = slides.length;

  slides.forEach((slide, index) => {
    slide.style.display = index === nextIndex - 1 ? 'block' : 'none';
  });

  container.dataset.index = String(nextIndex);
}