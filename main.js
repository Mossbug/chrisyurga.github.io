//Loader

const loader = document.getElementById("preLoader")
window.addEventListener("load", function () {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            loader.style.display = 'none';
        }
        loader.style.opacity = op;
        loader.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);

})

//Sticky navbar

window.onscroll = function () { myFunction() }
const navbar = document.getElementById("navnav")
const navTrack = document.getElementById("navTrack")
const sticky = navTrack.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//Little me Popup

var hands = document.getElementById("hands");
var lilMe = document.getElementById("lilMe");
var aboutMe = document.getElementById("aboutMe");
let timeout = null;
var ready;
var link = document.getElementsByClassName("link");

hands.addEventListener("mouseover", function () {
    console.log("1");
    /* hands.style.transform = "translateY(" + (-35) + "px)";*/
    timeout = setTimeout(function () {
        hands.style.opacity = "1";
    }, 200);

})

hands.addEventListener("mouseout", function () {
    console.log("0");
    clearTimeout(timeout);

    hands.style.opacity = "0";
    hands.style.transform = "translateY(" + 5 + "px)";
})


hands.addEventListener("mouseover", function () {
    ready = 0;
    setTimeout(function () {
        lilMe.style.transform = "translateY(" + (-35) + "px)";
        lilMe.style.opacity = "1";
        ready = 1;
    }, 500);
})


hands.addEventListener("mouseout", function () {
    lilMe.style.transform = "translateY(" + 8 + "px)";
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            lilMe.style.opacity = "0";
        }
        lilMe.style.opacity = op;
        lilMe.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 1;
    }, 100);

})


//read more section

const moreLessBtn = document.getElementById("moreLessBtn");
const moreLessTxt = document.getElementById("moreLess");



let more = 0;
moreLessBtn.addEventListener("click", function () {

    if (more == 1) {
        moreLessTxt.style.display = "none";
        more = 0;
        moreLessBtn.innerHTML = "See More...";

    } else {
        moreLessTxt.style.display = "inline";
        more = 1;
        moreLessBtn.innerHTML = "See Less...";

    }

})

