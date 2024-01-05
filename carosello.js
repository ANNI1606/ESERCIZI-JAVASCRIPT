var currentIndex = 0;
var totalSlides = document.querySelectorAll(".carousel-image").length;

function showSlides() {
  var imageContainer = document.getElementById("image-container");
  imageContainer.style.transform = "translateX(" + -currentIndex * 100 + "%)";
}

function nextSlides() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlides();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlides();
}
document.addEventListener("DOMContentLoaded", showSlides);
document.getElementById("prevButton").addEventListener("click", prevSlide);
document.getElementById("nextButton").addEventListener("click", nextSlides);
