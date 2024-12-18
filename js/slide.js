let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex); // Show the first slide initially
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = document.querySelectorAll(".slide").length;

    // Wrap around slideIndex
    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    // Move the slides container
    const offset = (slideIndex - 1) * 100; // Calculate offset
    slides.style.transform = `translateX(-${offset}%)`;

    // Update dots' active class
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex - 1].classList.add("active");
}