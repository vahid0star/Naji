

const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

searchContainer.addEventListener('click', () => {
  searchContainer.classList.add('active');
  searchInput.focus();
});

// وقتی کلیک خارج شد، بسته بشه اگر ورودی خالی بود
document.addEventListener('click', (e) => {
  if (!searchContainer.contains(e.target)) {
    if (!searchInput.value) {
      searchContainer.classList.remove('active');
    }
  }
});
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

// ============swiper=========
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




function scrollServices(direction) {
  const container = document.getElementById('services');
  const scrollAmount = 200;
  container.scrollLeft += direction * scrollAmount;
}
