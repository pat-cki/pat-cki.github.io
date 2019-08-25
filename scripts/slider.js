
const slides = document.querySelectorAll(".image"),
      steps = document.querySelectorAll(".step"),
      prevButton = document.querySelector(".prev_button"),
      nextButton = document.querySelector(".next_button"),
      playButton = document. querySelector(".play_button"),
      pauseButton = document.querySelector(".pause_button"),
      progress = document.querySelector(".progress"),
      rightArrowKey = 39,
      leftArrowKey = 37,
      spaceBarKey = 32;  

let counter = 0,
    slidesInterval,
    playing = true;

// UPDATE CURRENT SLIDE
function updateSlide(slide) {
    const displayed =  document.querySelector(".display"),
          active = document.querySelector(".active");

    displayed.classList.remove("display");
    slides[slide].classList.add("display");
    
    active.classList.remove("active");
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
    playing = !playing;
    slidesInterval = setInterval(showNext, 2500);
    playButton.style.opacity = 0.1;
    playButton.disabled = true;
    pauseButton.disabled = false;
    pauseButton.style.opacity = 1;
}

function pauseSlides() {
    playing = !playing;
    clearInterval(slidesInterval);
    playButton.style.opacity = 1;
    pauseButton.disabled = true;
    playButton.disabled = false;
    pauseButton.style.opacity = 0.1;
}


// CLICK STEPS TO UPDATE SLIDE (get index of the clicked element)
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
// ARROWS:
document.addEventListener("keydown", function(e) {
    if (e.keyCode == rightArrowKey) {
        nextSlide();      
    }
    else if (e.keyCode == leftArrowKey) {
        prevSlide();
    }      
});

// SPACEBAR:
document.addEventListener('keydown', function (e) {
    if ( ( e.keycode || e.which ) == spaceBarKey && playing == true) {
        e.preventDefault();
        pauseSlides();
    } else if ( ( e.keycode || e.which ) == spaceBarKey && playing == false) {
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
