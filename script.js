function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        // pixel position at the bottom of screen - half of each image height
        // half way through image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // pixel position at the bottom of each image
        // bottom of image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        // conditional statements
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        // add class active if conditions are met
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));