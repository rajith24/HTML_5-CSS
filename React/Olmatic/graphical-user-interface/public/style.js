// ########################### Nav Bar
// var d = document.getElementsByClassName("rai")[0];
// d.style.display = "none";
// import $ from 'jquery';

var mul=document.querySelector('.compare');
var sin=document.querySelector('.upload');
var d = document.getElementsByClassName("rtc2")[0];
d.style.display = "none";
mul.addEventListener('click', multiple);
function multiple(){
  $( ".multiple" ).click();
  
}

sin.addEventListener('click', single);
function single(){
  $( ".single").click();
  
}
var nul = 0;

var cls=document.querySelector('.clear');

cls.addEventListener('click', cls1);
function cls1(){
  var clr = document.querySelectorAll('.copy');
  var c = $(clr);
  console.log($(c).hasClass("org"));
  var i;
  for (i = 0; i < c.length; i++) {
    // c[i].style.visibility="hidden";
    c[i].style.display="none";
    
  }
  var d = document.getElementsByClassName("rtc2")[0];
  d.style.display = "inline";
  var d = document.getElementsByClassName("rtc1")[0];
  d.style.display = "none";
  nul = 0;
  console.log(nul);
}

window.onload = function() {
  var cpy = document.querySelector('.org');
  console.log($(cpy));
}

var gui=document.querySelector('.gui');

var el;
gui.addEventListener('click', guii);
function guii(){
  var ty = document.querySelector('.dupli');
  var d = document.getElementsByClassName("org")[0];
  d.style.display = "inline"
  console.log(nul);
  var d = document.getElementsByClassName("rtc2")[0];
  d.style.display = "none";
  var d = document.getElementsByClassName("rtc1")[0];
  d.style.display = "inline";
}


// ###################


// ###################

// var d = document.getElementsByClassName("mainadd")[1];
// d.style.display = "none";

// var b = document.getElementsByClassName("bcancel")[1];
// b.style.display = "none";

// var b = document.getElementsByClassName("bredo")[1];
// b.style.display = "none";

// // ##########################

// var d = document.getElementsByClassName("mainadd")[0];
// d.style.display = "none";

// var b = document.getElementsByClassName("bcancel")[0];
// b.style.display = "none";

// var b = document.getElementsByClassName("bredo")[0];
// b.style.display = "none";


var startclone;
var originalgui;

var j;
var cth;

// var cpy = document.querySelector('.copy');
// cpy.addEventListener('click', copy);

var nw = document.querySelector('.dupli');
nw.addEventListener('click', neww);

// declare handler
// function copy(e) {
//   var btn = $(e.target);
//   j=$(btn).closest('.copy');
//   startclone=j;
//   // var star = startclone.find('.bredo');
//   // star[0].style.display = 'none';
//   if (e.target.matches('.clone')) {
//    var ty = document.querySelector('.estate');
//    $(ty).find('.copy')
//     console.log($(ty).find('.copy'));
//     var d = $(ty).find('.copy');
//     var el = d[0];
//     var cln = el.cloneNode(true);
//     document.getElementsByClassName('dupli')[0].appendChild(cln);
//   }

//   // if (e.target.matches('.clone')) {
//   //   var btn = $(e.target);
//   //   j=$(btn).closest('.copy');
//   //   var el =j[0];
//   //   console.log(el)

//   //   var cln = el.cloneNode(true);
//   //   document.getElementsByClassName('dupli')[0].appendChild(cln);
//   // }
//   else if (e.target.matches('.cls')) {
//     var btn = $(e.target);
//     var div = $(btn).next().filter('.dem');
//     $(div).toggleClass('in');
//   }

//   else if (e.target.matches('.delete1')) {
//     var btn = $(e.target);
//     j=$(btn).closest('.maindel');
//     var d = j[0];
//     cth = d;
//     d.style.display = 'none';
//     j=$(j).next().filter('.mainadd');
//     var d = j[0];
//     d.style.display = 'inline';
//     j=$(btn).closest('.topbar');
//     var d = $(j).next().filter('.mydiv');
//     var d = d[0];
//     d.style.display = 'none';

    
//   }
//   else if (e.target.matches('.add1')) {
//     var btn = $(e.target);
//     j=$(btn).closest('.mainadd');
//     // console.log(j[0]);
//     var d = j[0];
//     d.style.display = 'none';
//     var d = cth;
//     d.style.display = 'inline';
//     j=$(btn).closest('.topbar');
//     var d = $(j).next().filter('.mydiv');
//     var d = d[0];
//     d.style.display = 'block';
    
//   }
  
//   else if (e.target.matches('.resize1')) {
//     console.log(e.target)
//     // e.target.style.background = 'white';
//     var btn = $(e.target);
//     var st = startclone.find('.resize');
//     var star = startclone.find('.bredo');
//     j=$(btn).closest('.topbar');
//     var d = $(j).next().filter('.mydiv');
//     console.log(d[0]);
//     var d = d[0];
//     d.classList.add("resizeC");
//     st[0].style.display = 'none';
//     star[0].style.display = 'inline';
    
//   }


//   else if (e.target.matches('.redo')) {
//     var btn = startclone.find('.bredo');
//     btn[0].style.display = 'none';
//     var st = startclone.find('.resize');
//     st[0].style.display = 'inline';
//     var d = startclone.find('.mydiv');
//     console.log(d[0]);
//     var d = d[0];
//     d.classList.remove("resizeC");
//     d.style.width = "500"+'px';
//     d.style.height = "500"+'px';
    

//   }

//   else if (e.target.matches('.trash')) {
//     var btn = $(e.target);
//     console.log('hi')
//     j=$(btn).closest('.copy');
//     j.toggleClass('navdisp');
//   }

//   else if (e.target.matches('.move')) {
//     var btn = $(e.target);
//     var bn = btn[0];
//     j=$(btn).closest('.mainmov');
//     var elmnt = j[0];
//     console.log(elmnt)
//     var d=$(btn).closest('.submove');
//     console.log(d[0])
//     var d = d[0];
//   if ($(d).hasClass("submove")) {
//     // if present, the header is where you move the DIV from:
//     $(d).draggable({ disabled: false });   
//     var d=$(bn).closest('.bmove');
//     console.log(d[0])
//     var d = d[0];
//    d.style.display ="none";

//    var d=$(d).next().filter('.bcancel');
//     console.log(d[0])
//     var d = d[0];
//    d.style.display ="inline";       
//     // $(d).onmousedown = dragMouseDown;
//   }
//    else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     $(elmnt).draggable({ disabled: false });         
//   }
    
//   }
//   else if (e.target.matches('.cancel')) {
//     var btn = $(e.target);
//     var cn = btn[0];
//     console.log(cn);
//     var d=$(cn).closest('.bcancel');
//     console.log(d[0])
//     var d = d[0];
//    d.style.display ="none"; 
//     var d=$(btn).closest('.submove');
//     console.log(d[0])
//     var d = d[0];
//   if ($(d).hasClass("submove")) {
//     // if present, the header is where you move the DIV from:
//     $(d).draggable({ disabled: true });

//       var p=$(cn).closest('.dem').find('.bmove');
//       console.log(p);
//       var d = p[0];
//     d.style.display ="inline";
//   }
//   }

// }

function neww(e) {
  var btn = $(e.target);
  j=$(btn).closest('.copy');
  startclone=j;
  if (e.target.matches('.clone')) {
    console.log('hi')
     }

  else if (e.target.matches('.cls')) {
    var btn = $(e.target);
    var div = $(btn).next().filter('.dem');
    $(div).toggleClass('in');
    var clr = document.querySelectorAll('.mainadd');
     var c = $(clr);
     var i;
     for (i = 0; i < c.length; i++) {
       c[i].style.display="none";
     }

     var clr = document.querySelectorAll('.bcancel');
     var c = $(clr);
     var i;
     for (i = 0; i < c.length; i++) {
       c[i].style.display="none";
     }

     var clr = document.querySelectorAll('.bredo');
     var c = $(clr);
     var i;
     for (i = 0; i < c.length; i++) {
       c[i].style.display="none";}
  }

  else if (e.target.matches('.delete1')) {
    var btn = $(e.target);
    j=$(btn).closest('.maindel');
    var d = j[0];
    cth = d;
    d.style.display = 'none';
    j=$(j).next().filter('.mainadd');
    var d = j[0];
    d.style.display = 'inline';
    j=$(btn).closest('.topbar');
    var d = $(j).next().filter('.mydiv');
    var d = d[0];
    d.style.display = 'none';
  }
  else if (e.target.matches('.add1')) {
    var btn = $(e.target);
    j=$(btn).closest('.mainadd');
    // console.log(j[0]);
    var d = j[0];
    d.style.display = 'none';
    var d = cth;
    d.style.display = 'inline';
    j=$(btn).closest('.topbar');
    var d = $(j).next().filter('.mydiv');
    var d = d[0];
    d.style.display = 'block';
    
  }
  
  else if (e.target.matches('.resize1')) {
    console.log(e.target)
    // e.target.style.background = 'white';
    var btn = $(e.target);
    var st = startclone.find('.resize');
    var star = startclone.find('.bredo');
    j=$(btn).closest('.topbar');
    var d = $(j).next().filter('.mydiv');
    console.log(d[0]);
    var d = d[0];
    d.classList.add("myresize");
    // var d = $(j).next().filter('.mydivheader');
    // console.log(d[0]);
    // var d = d[0];
    // d.classList.add("mydivresize");
    // var d = $(j).next().filter('.stock_size');
    // console.log(d[0]);
    // var d = d[0];
    // d.classList.add("stockprops");
    // if(d){
    //   d.classList.add("stockprops");
    // }
    // else{
    //   var d = $(j).next().filter('.multiprops1');
    //   console.log(d[0]);
    //   var d = d[0];
    //   d.classList.add("stockprops");
    // }
    
    st[0].style.display = 'none';
    star[0].style.display = 'inline';
    
  }


  else if (e.target.matches('.redo')) {
    var btn = startclone.find('.bredo');
    btn[0].style.display = 'none';
    var st = startclone.find('.resize');
    st[0].style.display = 'inline';
    var d = startclone.find('.mydiv');
    console.log(d[0]);
    var d = d[0];
    d.classList.remove("myresize");
    
    d.style.width = "500"+'px';
    d.style.height = "500"+'px';
    // var d = $(j).next().filter('.mydivheader');
    // console.log(d[0]);
    // var d = d[0];
    // d.classList.remove("mydivresize");

    // var d = $(j).next().filter('.stock_size');
    // console.log(d[0]);
    // var d = d[0];
    // d.classList.remove("stockprops");

    // var d = $(j).next().filter('.stockprops1');
    // console.log(d[0]);
    // var d = d[0];
    // if(d){
    //   d.classList.remove("stockprops");
    // }
    // else{
    //   var d = $(j).next().filter('.multiprops1');
    //   console.log(d[0]);
    //   var d = d[0];
    //   d.classList.remove("stockprops");
    // }
    

  }

    else if (e.target.matches('.move')) {
      var btn = $(e.target);
      var bn = btn[0];
      j=$(btn).closest('.mainmov');
      var elmnt = j[0];
      console.log(elmnt)
      var d=$(btn).closest('.submove');
      console.log(d[0])
      var d = d[0];
    if ($(d).hasClass("submove")) {
      // if present, the header is where you move the DIV from:
      $(d).draggable({ disabled: false });   
      var d=$(bn).closest('.bmove');
      console.log(d[0])
      var d = d[0];
     d.style.display ="none";
  
     var d=$(d).next().filter('.bcancel');
      console.log(d[0])
      var d = d[0];
     d.style.display ="inline";       
      // $(d).onmousedown = dragMouseDown;
    }
     else {
      // otherwise, move the DIV from anywhere inside the DIV:
      $(elmnt).draggable({ disabled: false });         
    }}

    else if (e.target.matches('.cancel')) {
      var btn = $(e.target);
      var cn = btn[0];
      console.log(cn);
      var d=$(cn).closest('.bcancel');
      console.log(d[0])
      var d = d[0];
     d.style.display ="none"; 
      var d=$(btn).closest('.submove');
      console.log(d[0])
      var d = d[0];
    if ($(d).hasClass("submove")) {
      // if present, the header is where you move the DIV from:
      $(d).draggable({ disabled: true });
  
        var p=$(cn).closest('.dem').find('.bmove');
        console.log(p);
        var d = p[0];
      d.style.display ="inline";     
    }
    }
    


  else if (e.target.matches('.trash')) {
    var btn = $(e.target);
    console.log('hi')
    j=$(btn).closest('.copy');
    j.toggleClass('navdisp');
  }
}




