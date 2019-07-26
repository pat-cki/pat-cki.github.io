// SCROLLING BETWEEN SECTIONS 

function smoothScroll(target, time){
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var distance = targetPos - startPos;
    var startTime = null;


    function scrollAnimation(currentTime){ 
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPos, distance, time);
        window.scrollTo(0, run);
        if(timeElapsed < time) requestAnimationFrame(scrollAnimation);
    }

    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
      }

    requestAnimationFrame(scrollAnimation);

}


var nav_aboutme = document.querySelector('.nav_aboutme');
var nav_journey = document.querySelector('.nav_journey');
var nav_fc = document.querySelector('.nav_fc');
var nav_contact = document.querySelector('.nav_contact');


nav_aboutme.addEventListener('click', function() {
    smoothScroll('.aboutme_section', 500);
});

nav_journey.addEventListener('click', function() {
    smoothScroll('.journey_section', 500);
});

nav_fc.addEventListener('click', function() {
    smoothScroll('.fac_section', 500);
});

nav_contact.addEventListener('click', function() {
    smoothScroll('.contact_section', 500);
});
