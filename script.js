
console.log("script connected");
const burger = document.querySelector(".burger");
const slide = document.querySelector(".slide");
const main_block = document.querySelector('.main_block');
const body = document.querySelector('.wrapper');
burger.addEventListener("click", function() {
    console.log(event);
    slide.classList.add('widget');
    body.classList.add('darker');
    event.stopPropagation();
});
body.addEventListener("click", function() {
    slide.classList.remove('widget');
    body.classList.remove('darker');
});