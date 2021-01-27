var ballDrop = document.getElementById('ball');
var bgDrop = document.getElementById("background");
var shDrop = document.getElementById("shadow");
var navGation = document.getElementById("nav");



var ballProp = window.getComputedStyle(ballDrop);
var bgProp = window.getComputedStyle(bgDrop);
var navg = window.getComputedStyle(navGation);

console.log(navg)

setTimeout(function show(){
    navGation.style.display="block";
    // navGation.style.backgroundColor = "#3d706b" ;
    //document.getElementById("main").style.animation = "bgtransition  1000ms linear 1  forwards";  
    //document.getElementById("background").style.backgroundColor = "#dceeec" ;

    
}
,4000)



setTimeout(() => {
    document.getElementById("nav").style.animation = "navtransition  1250ms linear 1  forwards";
document.getElementById("body").style.animation = "bgtransition  1250ms linear 1  forwards";  
document.getElementById("background").style.animation = "bgtransition  1250ms linear 1  forwards";
document.getElementById("main").style.animation = "bgtransition  1000ms linear 1  forwards";
    
}, 4000);
setTimeout(() => {document.getElementById("profile-pic").style.visibility = "visible"; }, 4020);
setTimeout(() => {document.getElementById("contact").style.visibility = "visible";}, 4130);
setTimeout(() => {document.getElementById("home").style.visibility = "visible";}, 4500);
setTimeout(() => {document.getElementById("menu-item1").style.visibility = "visible";
                    document.getElementById("ball").style.visibility = "hidden"}, 4900);




// document.getElementById("contact").style.animation = "mynewmove 4s 2";
// document.getElementById("home").style.animation = "mynewmove 4s 2";
// document.getElementById("home").style.animation = "mynewmove 4s 2";


// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }