// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    navText: ["<div class='arrow-left icon'></div>", "<div class='arrow-right icon'></div>"],
    nav: true,
    animateIn: 'flipInX',
    stagePadding: 100,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 1
        }
    }
})