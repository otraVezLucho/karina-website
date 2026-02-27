
const menu_button = document.querySelector('.bx-menu');

const close_button = document.querySelector('.close-menu');

close_button.addEventListener('click', () => {
    const ul_navbar = document.querySelector('.list-ul');
    ul_navbar.classList.toggle('list-ul')
});

menu_button.addEventListener('click', () => {
    const ul_navbar = document.querySelector('.list-ul-none');
    ul_navbar.classList.toggle('list-ul');
});





const navbar = document.querySelector('.navbar');

const body = document.querySelector('body');
let scroll_position = window.pageYOffset;
navbar.addEventListener('scroll',function() {
console.log(typeof(scroll_position));

});
