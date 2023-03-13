navContainer.classList.add("fadeOut");
exitBtn.classList.add("noDisplay");


//preloader-----------------------------------------------------
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none"
})

//mobile navbar buttons ----------------------------------------

let dropDownBtn = document.getElementById("dropDownBtn");

dropDownBtn.addEventListener("click", function () {
    dropDownBtn.classList.add("noDisplay");

    exitBtn.classList.remove("noDisplay");

    navContainer.classList.remove("fadeOut");
    navContainer.classList.add("fadeIn");
})

exitBtn.addEventListener("click", function () {
    dropDownBtn.classList.remove("noDisplay");

    exitBtn.classList.add("noDisplay");

    navContainer.classList.remove("fadeIn");
    navContainer.classList.add("fadeOut");

})

canDoContainer.addEventListener("click", function () {
    console.log("hello")
    dropDownBtn.classList.remove("noDisplay");

    exitBtn.classList.add("noDisplay");

    navContainer.classList.remove("fadeIn");
    navContainer.classList.add("fadeOut");

})

aboutMeContainer2.addEventListener("click", function () {
    console.log("hello")
    dropDownBtn.classList.remove("noDisplay");

    exitBtn.classList.add("noDisplay");

    navContainer.classList.remove("fadeIn");
    navContainer.classList.add("fadeOut");

})

projectHeaderContainer.addEventListener("click", function () {
    console.log("hello");
    dropDownBtn.classList.remove("noDisplay");

    exitBtn.classList.add("noDisplay");

    navContainer.classList.remove("fadeIn");
    navContainer.classList.add("fadeOut");

})

resumeContainer.addEventListener("click", function () {
    console.log("hello");
    dropDownBtn.classList.remove("noDisplay");

    exitBtn.classList.add("noDisplay");

    navContainer.classList.remove("fadeIn");
    navContainer.classList.add("fadeOut");

})

// SWIPER SCRIPT -----------------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Displaying project cards -----------------------------------
project1.classList.add("noDisplay");
backgroundDimmer.classList.add("noDisplay");
let projectCard1 = document.getElementById("projectCard1");

projectCard1.addEventListener("click", function () {

    project1.classList.remove("noDisplay");
    backgroundDimmer.classList.remove("noDisplay");

})

let closeProject1Btn = document.getElementById("closeProject1Btn");

closeProject1Btn.addEventListener("click", function () {

    project1.classList.add("noDisplay");
    backgroundDimmer.classList.add("noDisplay");

})