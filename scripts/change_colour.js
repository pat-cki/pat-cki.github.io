const input = document.querySelector('.change_colour input');
const motto = document.querySelector('.motto');

function changeColour() {
    motto.style.setProperty("background", this.value);
}

input.addEventListener('change', changeColour);
input.addEventListener('mousemove', changeColour);