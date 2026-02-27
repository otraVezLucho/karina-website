const navbar = document.querySelector('.navbar');

const body = document.querySelector('body');
let scroll_position = window.pageYOffset;
navbar.addEventListener('scroll',function() {
console.log(typeof(scroll_position));

});
