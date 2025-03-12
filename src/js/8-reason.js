document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".reason-slider-nav-item");
    const slides = document.querySelectorAll(".reasonert-navfor-slider-inr-item");
    const accordions = document.querySelectorAll(".reasons-accrdn-card");
    const navWrapper = document.querySelector(".reason-slider-nav-wrapper");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let visibleThumbnails = 3; // Number of thumbnails visible at a time
    let currentIndex = 0;

    // Function to update active classes
    function updateActive(index) {
        // Remove 'active' class from all thumbnails, slides & accordions
        thumbnails.forEach(item => item.classList.remove("active"));
        slides.forEach(item => item.classList.remove("active"));
        accordions.forEach(item => item.classList.remove("active"));

        // Add 'active' class to selected thumbnail, slide & accordion
        document.querySelector(`.reason-slider-nav-item[data-index='${index}']`).classList.add("active");
        document.querySelector(`.reasonert-navfor-slider-inr-item[data-index='${index}']`).classList.add("active");
        document.querySelector(`.reasons-accrdn-card[data-index='${index}']`).classList.add("active");

        // Scroll the thumbnails
        scrollThumbnails(index);
    }

    // Scroll the thumbnails to show only 3 at a time
    function scrollThumbnails(index) {
        let totalItems = thumbnails.length;
        if (totalItems <= visibleThumbnails) return; // No scrolling needed

        let scrollAmount = (index - 1) * thumbnails[0].offsetWidth; // Calculate scroll amount
        navWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }

    // Click event for thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            updateActive(index);
        });
    });

    // Navigation button functionality
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateActive(currentIndex + 1);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < thumbnails.length - visibleThumbnails) {
            currentIndex++;
            updateActive(currentIndex + 1);
        }
    });
});