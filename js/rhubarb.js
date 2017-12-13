function doneLoading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}


// When the page is fully loaded, it calls the load() function, which hides the loading icon and shows the rest of the content
document.onreadystatechange = function () {
    if (document.readyState == 'complete') { doneLoading(); }
}

// This calls the page transitions
$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'zoom-in-sm',
        outClass: 'zoom-out-sm',
        inDuration: 200,
        outDuration: 200,
        linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        loading: false,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: true,
        timeoutCountdown: 10,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) { window.location.href = url; }
    });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
} 