document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".reason-slider-nav-item");
    const slides = document.querySelectorAll(".reasonert-navfor-slider-inr-item");
    const accordions = document.querySelectorAll(".reasons-accrdn-card");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            let index = this.getAttribute("data-index");

            // Remove 'active' class from all thumbnails & slides
            thumbnails.forEach(item => item.classList.remove("active"));
            slides.forEach(item => item.classList.remove("active"));
            accordions.forEach(item => item.classList.remove("active"));

            // Add 'active' class to selected thumbnail, slide & accordion
            this.classList.add("active");
            document.querySelector(`.reasonert-navfor-slider-inr-item[data-index='${index}']`).classList.add("active");
            document.querySelector(`.reasons-accrdn-card[data-index='${index}']`).classList.add("active");
        });
    });
});
