var ballDrop = document.getElementById('ball');
var bgDrop = document.getElementById("background");
var shDrop = document.getElementById("shadow");
var navGation = document.getElementById("nav");

console.clear();


var ballProp = window.getComputedStyle(ballDrop);
var bgProp = window.getComputedStyle(bgDrop);
var navg = window.getComputedStyle(navGation);

// console.log(navg)

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
var chld= document.getElementsByClassName("child");
var prnt= document.getElementById("parnt");
var elements = document.getElementsByClassName("projects");
var pre = document.getElementById("prev");
var sectn = document.getElementById("section");
var nxtbtn = document.getElementById("nextbtn");


prnt.onmouseover = function(){
  pre.style.opacity = 0.4;
  nxtbtn.style.opacity = 0.4;
  // sectn.style.height = "500" + "px";
  // sectn.style.marginTop = "65px;"
}

prnt.onmouseout = function(){
  pre.style.opacity = 0.7;
  nxtbtn.style.opacity = 0.7;
  // sectn.style.height = "500" + "px";
  // sectn.style.marginTop = "100px;"
}

pre.onmouseover = function(){pre.style.backgroundColor = "grey";pre.style.color = "black";}
pre.onmouseout = function(){pre.style.backgroundColor = "black"; pre.style.color = "white";}
nxtbtn.onmouseover = function(){nxtbtn.style.backgroundColor = "grey";nxtbtn.style.color = "black";}
nxtbtn.onmouseout = function(){nxtbtn.style.backgroundColor = "black"; nxtbtn.style.color = "white";}

pre.onclick = function(){
  if(prnt.classList.contains("parent")){ prnt.classList.remove("parent");};
  if(prnt.classList.contains("parentreverse")){ prnt.classList.remove("parentreverse");};
  prnt.classList.add("parnt");
  prnt.style.transform = "translate3d(" + "0" +"px," + "200" + "px," + "0" + "px)";
  console.log('hi')
  setTimeout(() => {  prnt.classList.add("parent");
},100)
}

nxtbtn.onclick = function(){
  if(prnt.classList.contains("parent")){ prnt.classList.remove("parent");};
  if(prnt.classList.contains("parentreverse")){ prnt.classList.remove("parentreverse");};
  prnt.classList.add("parnt");
  prnt.style.transform = "translate3d(" + "-700" +"px," + "200" + "px," + "0" + "px)";
  console.log('hi')
  setTimeout(() => {  prnt.classList.add("parentreverse");
},100)
}


function prjctVisible(){
    console.log("prjctVisible")
  var elements = document.getElementsByClassName("projects");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.display = "inline-block";
  }
  console.log(elements[0]);
  document.getElementById("frontpage").style.visibility = "hidden";
  document.getElementById("prev").style.visibility = "visible";
  nxtbtn.style.visibility = "visible";
  pre.style.opacity = 0.7;
  // setInterval(() => {anime()},5000)
  console.log('prjctVisible');
}

function homeVisible(){
  console.log("prjctVisible")
  var elements = document.getElementsByClassName("projects");
  for(var i=0; i<elements.length; i++) {
    elements[i].style.display = "none";
  } 
  console.log(elements[0]);
  document.getElementById("prev").style.visibility = "hidden";
  nxtbtn.style.visibility = "hidden";
  document.getElementById("frontpage").style.visibility = "visible";
}


var vid = document.getElementById("video");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

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

var htp = window.location.href;


var getUrl = document.getElementById("link");
var lidar = document.getElementById("lidar");

var propUrl = window.getComputedStyle(getUrl);



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


