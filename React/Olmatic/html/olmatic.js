var d = document.getElementById("add");
d.style.display = "none";
// Make the DIV element draggable:
window.onload = poSave();
function poSave() {
    return [x_Save(), y_Save()];
}
var pos_init =poSave();
var x_init = pos_init[0];
var y_init = pos_init[1]


function x_Save() {
    var x = $("#mydiv").position();
    // console.log(x.top);
    return x.left;
}
function y_Save() {
    var y = $("#mydiv").position();
    // console.log(x.top);
    return y.top;
}


var minus = document.getElementById("close")
minus.onclick = (function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
   
    
  });

document.getElementById("move").addEventListener("click", moveChart);

function moveChart(){
        dragElement(document.getElementById("mydiv"));
        // dragElementN(document.getElementById("mydivN"));
}

document.getElementById("resize").addEventListener("click", resizeChart);

function resizeChart(){
    var resize = document.getElementById("mydiv");
    if (resize.classList.contains("resizeC")){
        resize.classList.remove("resizeC");
        resize.style.width = "500"+'px';
        resize.style.height = "500"+'px';
    }
    else{
        // resize.classList.remove("originalC");
        resize.classList.add("resizeC");
        
        console.log('hi');
    }
}


document.getElementById("redo").addEventListener("click", redoChart);

function redoChart(){
    var d = document.getElementById("mydiv");
    d.style.position = "absolute";
    d.style.left = x_init+'px';
    d.style.top = y_init+'px';  
}

document.getElementById("delete").addEventListener("click", deleteChart);

function deleteChart(){
    var d = document.getElementById("mydiv");
    console.log('hi');
    d.style.display = "none";
    var d = document.getElementById("delete");
    d.style.display = "none";
    var d = document.getElementById("add");
    d.style.display = "inline";
}
var i;
document.getElementById("add").addEventListener("click", addChart);

function addChart(){
    console.log('hi');
    var d = document.getElementById("mydiv");
    d.style.display = "block";
    var d = document.getElementById("add");
    // d.style.display = "none";
    var d = document.getElementById("delete");
    d.style.display = "inline";
}

  
function dragElement(elmnt) {
  console.log(elmnt)
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // if (document.getElementById(elmnt.id + "header")) {
    //   console.log(document.getElementById(elmnt.id + "header"))

    //   // if present, the header is where you move the DIV from:
    //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    // } else {
    //   // otherwise, move the DIV from anywhere inside the DIV:
    //   elmnt.onmousedown = dragMouseDown;
    // }
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}






// declare handler
// function clickHandler(e) {
//   if (e.target.matches('.list__item')) {
//     console.log(e.target);
//     var el = e.target;
//     // e.target.innerHTML ="changed";
//     var cln = el.cloneNode(true);
//     // document.getElementById('clone').appendChild(cln);
//     document.getElementsByClassName('list')[0].appendChild(cln);
//   }
// }

// // reference to a list
// const list = document.querySelector('.list');
// const list1 = document.querySelector('.list');
// // add a single listener on list item
// list.addEventListener('click', clickHandler);
// list1.addEventListener('click', c);

// function c(e){
//   if (e.target.matches('.f')) {
//     console.log(e.target);
//     var el = e.target;
//     e.target.innerHTML ="changed";
    
//   }
// }



// document.getElementsByClassName('f')[0].addEventListener('click', c);
// function c() {
//   document.getElementsByClassName('f')[0].innerHTML = "changed";
// }












// var i = 0;
// var original = document.getElementById('duplicater');

// function duplicate() {
//     var clone = original.cloneNode(true); // "deep" clone
//     clone.id = "duplicater" + ++i;
//     // or clone.id = ""; if the divs don't need an ID
//     original.parentNode.appendChild(clone);
// }

// function duplicate_chart() {
//   var elmnt = document.getElementById('container');
//   var cln = elmnt.cloneNode(true);
//   document.getElementById('clone').appendChild(cln);
// }


// function dup(){
//   $('.dup_s').clone(true).appendTo('.dup_d');
// }
