var ballDrop = document.getElementById('ball');
var bgDrop = document.getElementById("background");
var shDrop = document.getElementById("shadow");
var navGation = document.getElementById("nav");

console.clear();


var ballProp = window.getComputedStyle(ballDrop);
var bgProp = window.getComputedStyle(bgDrop);
var navg = window.getComputedStyle(navGation);

console.log(navg)

setTimeout(function show(){
    navGation.style.display="block";}
,4000)



setTimeout(() => {
document.getElementById("nav").style.animation = "navtransition  1250ms linear 1  forwards";
document.getElementById("body").style.animation = "bgtransition  1250ms linear 1  forwards";  
document.getElementById("background").style.animation = "bgtransition  1250ms linear 1  forwards";
document.getElementById("main").style.animation = "bgtransition  1000ms linear 1  forwards";
}, 4000);


setTimeout(() => {document.getElementById("profile-pic").style.visibility = "visible"; }, 4020);
setTimeout(() => {document.getElementById("chart").style.visibility = "visible";}, 4130);
setTimeout(() => {document.getElementById("pj").style.visibility = "visible";}, 4500);
setTimeout(() => {document.getElementById("home").style.visibility = "visible";}, 4600);
setTimeout(() => {document.getElementById("menu-item1").style.visibility = "visible";
                    document.getElementById("ball").style.visibility = "hidden"}, 4900);

setTimeout(() => {document.getElementById("nav").classList.add("sticky")}, 4900);

var prjt = document.getElementById("projects");

// var prjctprop = window.getComputedStyle(prjt);
//########################

// function prjctVisible(){
//   console.log("prjctVisible")
//   // prjt.style.visibility = "visible";
//   document.querySelectorAll("projects").forEach(x => x.style.visibility = "visible");
// }

// function homeVisible(){
//   prjt.style.visibility = "hidden";

//   // document.querySelectorAll("projects").forEach(x => x.style.display = "none");
// }

function prjctVisible(){
    console.log("prjctVisible")
  var elements = document.getElementsByClassName("projects");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.display = "inline-block";
}
  console.log(elements[0]);
  document.getElementById("frontpage").style.visibility = "hidden";


}

function homeVisible(){
  console.log("prjctVisible")
  var elements = document.getElementsByClassName("projects");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.display = "none";
  } 
console.log(elements[0]);
document.getElementById("frontpage").style.visibility = "visible";


}






// document.getElementById("contact").style.animation = "mynewmove 4s 2";
// document.getElementById("home").style.animation = "mynewmove 4s 2";
// document.getElementById("home").style.animation = "mynewmove 4s 2";


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

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

// var opn = window.open("https://drive.google.com/uc?export=view&id=1RNi53ga4ZRSVpN7BXd8prToUqizNgccA");
// window.moveTo("https://drive.google.com/uc?export=view&id=1RNi53ga4ZRSVpN7BXd8prToUqizNgccA");
var htp = window.location.href;


var getUrl = document.getElementById("link");
var lidar = document.getElementById("lidar");

var propUrl = window.getComputedStyle(getUrl);

function clk() {
  $.get('https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest', function(){
    if(this.readyState === 4){
      if(this.status === 200){
          console.log(JSON.parse(this.responseText));
      }
      else  {
        console.log('ERROR');
      }
    }
  })
}

clk()



window.onload = setTimeout(() => {var button = document.getElementById("link").click();
console.log(window.getComputedStyle(getUrl).href);
// console.log(propUrl);
}, 3000);

window.onload = setTimeout(() => {var button = document.getElementById("link1").click();
console.log(window.getComputedStyle(getUrl).href);
// console.log(propUrl);
}, 3000);

window.onload = setTimeout(() => {var button = document.getElementById("link2").click();
console.log(window.getComputedStyle(getUrl).href);
// console.log(propUrl);
}, 3000);

window.onload = setTimeout(() => {var button = document.getElementById("link3").click();
console.log(window.getComputedStyle(getUrl).href);
// console.log(propUrl);
}, 3000);

window.onload = setTimeout(() => {var button = document.getElementById("link4").click();
console.log(window.getComputedStyle(getUrl).href);
// console.log(propUrl);
}, 3000);

setTimeout(() => {
  console.log("prjctVisible")
  var elements = document.getElementsByClassName("projects");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.display = "none";
  } 
console.log(elements[0]);
document.getElementById("frontpage").style.display = "inline-block";
document.getElementById("home").click();


}, 4900);



getUrl.addEventListener("click", myFunction);

function myFunction(e) {
  console.log(e.target.href);
}

function showDrop() {
  document.getElementById("app-dropdown").style.visibility = "visible";
}
