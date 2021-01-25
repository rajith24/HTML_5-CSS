var ballDrop = document.getElementById('ball');
var bgDrop = document.getElementById("background");
var shDrop = document.getElementById("shadow");


var ballProp = window.getComputedStyle(ballDrop);
var bgProp = window.getComputedStyle(bgDrop);

bgHeight = parseInt((bgProp.height).split(-2));



// console.log($window.height)

setInterval(function bgdrop () {
    console.log(ballProp.transform.split(',')[1]);
    var ballYaxis = ballProp.transform.split(',')[1] ;
    if (bgHeight <  300){
        bgHeight += 150;
        bgDrop.style.height = bgHeight+"px";
        bgHeight = parseInt((bgProp.height).split(-2));
        shDrop.style.visibility = "hidden";
    }
    else if (bgHeight =  300){
        bgHeight += 451;
        bgDrop.style.height = bgHeight+"px";
        bgHeight = parseInt((bgProp.height).split(-2));
    }
},1000)


function balldrop1 () {
    ballDrop.style.transform = "translate(-10px,125px)" ;
    ballDrop.style.width = 30+"px"; 
}

function balldrop2 () {
    ballDrop.style.transform = "translate(-10px,62px)" ;
    ballDrop.style.width = 25+"px"; 
    shDrop.style.visibility = "visible";
    shDrop.style.transform = "translate(-10px,115px)" ;
    }

function balldrop3 () {
    ballDrop.style.transform = "translate(-10px,275px)" ;
    ballDrop.style.width = 30+"px"; 
    }

function balldrop4 () {
    ballDrop.style.transform = "translate(-10px,125px)" ;
    ballDrop.style.width = 25+"px"; 
    shDrop.style.visibility = "visible";
    shDrop  .style.transform = "translate(-10px,265px)" ;
    }
function balldrop5 () {
    ballDrop.style.transform = "translate(-10px,726px)" ;
    shDrop.style.visibility = "hidden";
    ballDrop.style.width = 35+"px"; 
    var ballPos = parseInt(ballProp.transform.split({[',']:[')']})[0].substring(23,27));
    console.log(ballPos)
    }

function balldrop6 () {
    ballDrop.style.transform = "translate(-10px,375px)" ;
    ballDrop.style.width = 25+"px"; 
    }
setTimeout(() => {balldrop1()}, 1000); 
setTimeout(() => {balldrop2()}, 1500); 
setTimeout(() => {balldrop3()}, 2000); 
setTimeout(() => {balldrop4()}, 2500); 
setTimeout(() => {balldrop5()}, 3000); 
setTimeout(() => {balldrop6()}, 3250); 



// setInterval(function balldrop () {
//     var ballTop = parseInt((ballProp.top).split(-2));
//     console.log(ballProp.top);
//     if (ballTop <  125  ){
//         ballTop += 125;
//         var ballTopset=  ballTop+"px";
//         console.log(ballTopset)
//         ballDrop.style.transform = "translateY(125px)" ;
//         ballDrop.style.top = ballTopset;
//         console.log(ballProp.top);
//     }
//     else if(ballTop == 150){
//         ballDrop.style.transform = "translateY(50px)" ;
//         var ballTopset=  "translateY(50px)".substring(12,15);   
//         ballDrop.style.top = ballTopset;
//     }
// },1000)



// setInterval(function balldrop () {
//     var ballTop = parseInt((ballProp.top).split(-2));
//     console.log(ballProp.top);
//     if (ballTop <  150){
//         ballTop += 150;
//         var ballTopset=  ballTop+"px";
//         console.log(ballTopset)
//         ballDrop.style.transform = "translateY(150px)" ;
//         ballDrop.style.top = ballTopset;
//         ballDrop.style.transform = "translateY(150px)" ;
//         console.log(ballProp.top);
//     }
//     else if(ballTop == 150){
//         ballDrop.style.transform = "translateY(50px)" ;
//         var ballTopset=  "translateY(50px)".substring(12,15);   
//         ballDrop.style.top = ballTopset;
//     }
// },1000)





// function balldrop(ballHeight) {
//     console.log("hi");
//     if (ballHeight <= "300px") {
//         console.log(window.getComputedStyle(ballDrop).height);
//         ballHeight = parseInt(ballHeight.split(-2));
//         console.log(ballHeight);
//         ballHeight+= 100;
//         ballDrop.style.height = ballHeight + 'px';
//         console.log(ballHeight);

//     }
// }

// setInterval(balldrop(ballHeight), 100); 
