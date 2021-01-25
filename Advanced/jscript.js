console.clear()
console.log('Script Loaded')

var count = document.getElementById('countdown');

console.log(count)

var initial = count.innerHTML;  

var bgImage= document.getElementById('background')

// setInterval(function(){
//     /*count.innerHTML = initial-1;*/
    
//     initial = initial > 0 ? initial-1: 0;
//     count.innerHTML = initial;
//     bgImage.src = initial % 2 === 0 ? "https://i.pinimg.com/originals/5a/c1/29/5ac1296b709f4427d4c7785a322d78a2.png": "https://i.stack.imgur.com/jGlzr.png" ;

//     /*initial=initial-1;*/

// },100)

// var reduce_size = setInterval(function(){
//     initial = initial > 0 ? initial-1: 0;
//     count.innerHTML = initial;
//     count.style.fontSize = initial*100+'px';
//     /*count.style.marginRight = initial*100+'px';*/
//     bgImage.style.width = initial* 10 + '%';

// },100);

var btn = document.getElementById("btn");

var bgc = document.getElementById("background")
console.log(bgc)

function onbtnclick(){
    //alert("Button Clicked");
    btn.style.backgroundColor = "lightblue"
    bgc.style.backgroundImage = "https://i.stack.imgur.com/jGlzr.png"


}

// btn.onclick= onbtnclick;

btn.addEventListener("click", onbtnclick)