
const slides = document.querySelectorAll(".image"),
      steps = document.querySelectorAll(".step"),
      prevButton = document.querySelector(".prev_button"),
      nextButton = document.querySelector(".next_button"),
      playButton = document. querySelector(".play_button"),
      pauseButton = document.querySelector(".pause_button");
      progress = document.querySelector(".progress");

let counter = 0,
    slidesInterval,
    playing = true;

// UPDATE SLIDE
function updateSlide(slide) {
    document.querySelector(".display").classList.remove("display");
    slides[slide].classList.add("display");
    document.querySelector(".active").classList.remove("active");
    steps[slide].classList.add("active");
}

// SHOW NEXT SLIDE
function showNext() {
    counter == slides.length - 1 ? counter = 0 :  counter++;
    updateSlide(counter);
}

// SHOW PREVIOUS SLIDE
function showPrev(){
    counter == 0 ? counter = slides.length -1 : counter--;
    updateSlide(counter);
}

// PLAY AND PAUSE
function playSlides() {
    if(!playing) {
        playing = true;
    }
    slidesInterval = setInterval(showNext, 2500);
    playButton.style.opacity = 0.1;
    playButton.disabled = true;
    pauseButton.disabled = false;
    pauseButton.style.opacity = 1;
}

function pauseSlides() {
    if(playing) {
        playing = false;
    }
    clearInterval(slidesInterval);
    playButton.style.opacity = 1;
    pauseButton.disabled = true;
    playButton.disabled = false;
    pauseButton.style.opacity = 0.1;
}


// CLICK STEPS TO UPDATE SLIDE
for (var i = 0, len = progress.children.length; i < len; i++)
{
    (function(index){
        progress.children[i].onclick = function(){
            pauseSlides();
            updateSlide(index);  
        }    
    })(i);
}

// ARROWS (UI) FUNCTIONALITY
function nextSlide() {
    pauseSlides();
    showNext();
}

function prevSlide() {
    pauseSlides();
    showPrev();
}

// KEYBOARD ARROWS AND SPACEBAR NAVIGATION
// ARROWS
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 39) {
        nextSlide();      
    }
    else if (e.keyCode == 37) {
        prevSlide();
    }      
});

// SPACEBAR
document.addEventListener('keydown', function (e) {
    if ( ( e.keycode || e.which ) == 32 && playing == true) {
        e.preventDefault();
        pauseSlides();
    } else if ( ( e.keycode || e.which ) == 32 && playing == false) {
        e.preventDefault();
        playSlides();
    }
}, false);


// EVENT LISTENERS
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
playButton.addEventListener("click", playSlides);
pauseButton.addEventListener("click", pauseSlides);


// START SLIDER WHEN PAGE IS LOADED
window.onload = playSlides;
