function moveCarousel(carouselId, direction) {
  const carouselWrapper = document.getElementById(`${carouselId}-carousel`);
  const card = carouselWrapper.querySelector(".carousel-card");
  const cardWidth = card.offsetWidth + 32;
  carouselWrapper.scrollBy({
    left: cardWidth * direction,
    behavior: "smooth",
  });
}

function autoRotateCarousel(carouselId) {
  const carouselWrapper = document.getElementById(`${carouselId}-carousel`);
  const cards = carouselWrapper.querySelectorAll(".carousel-card");
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    const cardWidth = cards[0].offsetWidth + 32;
    carouselWrapper.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth",
    });
  }, 3500);
}

window.onload = function () {
  autoRotateCarousel("servicos");
};
