let currentIndex = 0;

function changeSlide(direction) {
    const carousel = document.getElementById('product-carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const translateXValue = -currentIndex * itemWidth;

    carousel.style.transform = `translateX(${translateXValue}px)`;
}

// Automatic rotation every 5 seconds (adjust as needed)
setInterval(() => {
    changeSlide(1);
}, 5000);