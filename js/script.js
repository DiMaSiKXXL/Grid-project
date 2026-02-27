burger = document.querySelector(".header__burger");
header = document.querySelector(".header");

burger.addEventListener('click', function() {
    burger.classList.toggle("_active");
    header.classList.toggle("_active");
})