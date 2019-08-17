// SCROLLING BETWEEN SECTIONS 

function smoothScroll(target, time){
    var target = document.querySelector(target),
        targetPos = target.getBoundingClientRect().top,
        startPos = window.pageYOffset,
        distance = targetPos - startPos,
        startTime = null;


    function scrollAnimation(currentTime){ 
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPos, distance, time);
        window.scrollTo(0, run);
        if(timeElapsed < time) requestAnimationFrame(scrollAnimation);
    }

    //EASING FUNCTION 
    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
      }

    requestAnimationFrame(scrollAnimation);

}

// SECTIONS VARIABLES

const nav_aboutme = document.querySelector('.nav_aboutme'),
      nav_journey = document.querySelector('.nav_journey'),
      nav_fc = document.querySelector('.nav_fc'),
      nav_contact = document.querySelector('.nav_contact');


// EVENT LISTENERS
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
