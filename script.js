// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal animations
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
  const photos = [
  "assets/profile.jpg",
  "assets/portfolio-01.jpg",
  "assets/portfolio-02.jpg",
  "assets/portfolio-03.jpg",
  "assets/portfolio-04.jpg"
];

let currentPhoto = 0;

const image = document.getElementById("portfolioImage");

function showPhoto() {
  image.src = photos[currentPhoto];
}

function changePhoto(direction) {

  currentPhoto += direction;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  showPhoto();
}


// Mobile swipe

let startX = 0;

image.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});


image.addEventListener("touchend", (e) => {

  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    changePhoto(1); // swipe left = next photo
  }

  if (endX - startX > 50) {
    changePhoto(-1); // swipe right = previous photo
  }

});
);

revealItems.forEach((item) => revealObserver.observe(item));
