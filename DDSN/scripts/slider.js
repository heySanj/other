
let slideIndex = 0;
let delay = 8000
let timer = setTimeout(slideNext, delay); // Change image every 8 seconds
slideNext();



function plusSlides(n) {

    clearTimeout(timer)

    const slides = toggleSlides()

    slideIndex += n;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "flex";

    timer = setTimeout(slideNext, delay); // Change image every 8 seconds
}

function slideNext(){
    clearTimeout(timer)

    const slides = toggleSlides()

    slideIndex++;

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "flex";

    timer = setTimeout(slideNext, delay); // Change image every 8 seconds
}

function toggleSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    return slides
}