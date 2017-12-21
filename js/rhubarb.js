function doneLoading() {
    setupContent()
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



function setupContent() {
    var fileName = location.pathname.split("/").slice(-1)
    console.log(fileName[0]);
    grabContent(fileName[0])
}

var items;
function grabContent(pg) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var data = JSON.parse(this.responseText);
            if (pg == "poetry.html") {
                items = data.poetry
            }
            if (pg == "fiction.html") {
                items = data.fiction
            }
            if (pg == "visualart.html"){
                items = data.visualart
            }
            console.log(data);
            for (bigdata in items) {
                if (items[bigdata].image == "None") {
                    items[bigdata].image = "assets/news.svg"
                }
                document.getElementById('dataplace').innerHTML += ("<div class=\"col-md-4\">" +
                    " <div id=\"card\" style=\"opacity: 0\" class=\"card\">" +
                    "     <div class=\"card-image waves-effect waves-block waves-rhubarb\">" +
                    "         <img class=\"activator\" src=\""+items[bigdata].image+"\">" +
                    "  </div>" +
                    "         <div class=\"card-content\"> " +
                    "             <span class=\"card-title activator grey-text text-darken-4\">"+items[bigdata].title+"<i class=\"fa float-right fa-ellipsis-v\"></i></span> " +
                    "             <em>by "+items[bigdata].author+"</em> " +
                    "         </div>" +
                    "         <div class=\"card-reveal\">" +
                    "             <span class=\"card-title grey-text text-darken-4\">"+items[bigdata].title+"<i class=\"material-icons right\">close</i></span>" +
                    "             <p>" + items[bigdata].content +"</p>" +
                    "         </div>" +
                    "     </div>" +
                    "</div>")
            }

            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
            Materialize.showStaggeredList('#content'); // hehe i like that

        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.send();
}