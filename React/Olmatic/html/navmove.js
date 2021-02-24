// ########################### Nav Bar
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

var cls=document.querySelector('.clear');

cls.addEventListener('click', cls1);
function cls1(){
  var clr = document.querySelectorAll('.copy');
  var c = $(clr);
  console.log($(c).hasClass("org"));
  var i;
  for (i = 0; i < c.length; i++) {
    c[i].style.display="none";
    // console.log($(c[i]).hasClass("org"));
    // if($(c[i]).hasClass("org")){
    //   continue;
    // }
    // else{
    //   c[i].style.display="none";
    // }
    
  }
  var d = document.getElementsByClassName("rtc2")[0];
  d.style.display = "inline";
  var d = document.getElementsByClassName("rtc1")[0];
  d.style.display = "inline";
}


var gui=document.querySelector('.gui');

gui.addEventListener('click', guii);
function guii(){
  var ty = document.querySelector('.state');
  $(ty).find('.org')
  console.log($(ty).find('.org'));
  var d = document.getElementsByClassName("org")[0];
  var c = document.querySelectorAll('.org');
  var i;
  // for (i = 0; i < c.length; i++) {
  //   c[i].style.display="block";}
  if(d.style.display == 'none'){
    d.style.display = 'block';
    // el=d;
  }
  // var d = $(ty).find('.org');
  el = d[0];
  var cln = el.cloneNode(true);
  document.getElementsByClassName('dupli')[0].appendChild(cln);
  var d = document.getElementsByClassName("rtc2")[0];
  d.style.display = "inline";
  var d = document.getElementsByClassName("rtc1")[0];
  d.style.display = "inline";
}

// ###################

var d = document.getElementsByClassName("mainadd")[1];
d.style.display = "none";

var b = document.getElementsByClassName("bcancel")[1];
b.style.display = "none";

var b = document.getElementsByClassName("bredo")[1];
b.style.display = "none";

// ##########################

var d = document.getElementsByClassName("mainadd")[0];
d.style.display = "none";

var b = document.getElementsByClassName("bcancel")[0];
b.style.display = "none";

var b = document.getElementsByClassName("bredo")[0];
b.style.display = "none";


// Make the DIV element draggable:
window.onload = poSave();
function poSave() {
    return [x_Save(), y_Save()];
}
var pos_init =poSave();
var x_init = pos_init[0];
var y_init = pos_init[1]



function x_Save() {
    var x = $(".mydiv").position();
    // console.log(x.top);
    return x.left;
}
function y_Save() {
    var y = $(".mydiv").position();
    // console.log(x.top);
    return y.top;
}

var startclone;
var originalgui;
// window.onload = function() {
//   var st = document.querySelector('.copy');
//   // console.log($(st));
//   // var g = $(st).find('.copy')
//   // g[0].click();
//   // console.log(g)
//   st.onclick = function(e) {
//   originalgui = $(e.target);
//   console.log(originalgui);
//   var el =originalgui[0];
//   var cln = el.cloneNode(true);
//   var org = document.getElementsByClassName('state')[0].appendChild(cln);
//   console.log(org);
//   }
  
// }

var j;
var cth;

var cpy = document.querySelector('.copy');
cpy.addEventListener('click', copy);

var nw = document.querySelector('.dupli');
nw.addEventListener('click', neww);

// declare handler
function copy(e) {
  var btn = $(e.target);
  j=$(btn).closest('.copy');
  startclone=j;
  // var star = startclone.find('.bredo');
  // star[0].style.display = 'none';
  if (e.target.matches('.clone')) {
   var ty = document.querySelector('.state');
   $(ty).find('.copy')
    console.log($(ty).find('.copy'));
    var d = $(ty).find('.copy');
    el = d[0];
    var cln = el.cloneNode(true);
    document.getElementsByClassName('dupli')[0].appendChild(cln);
  }

  // if (e.target.matches('.clone')) {
  //   var btn = $(e.target);
  //   j=$(btn).closest('.copy');
  //   var el =j[0];
  //   console.log(el)

  //   var cln = el.cloneNode(true);
  //   document.getElementsByClassName('dupli')[0].appendChild(cln);
  // }
  else if (e.target.matches('.cls')) {
    var btn = $(e.target);
    var div = $(btn).next().filter('.dem');
    $(div).toggleClass('in');
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
    d.classList.add("resizeC");
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
    d.classList.remove("resizeC");
    d.style.width = "500"+'px';
    d.style.height = "500"+'px';
    

  }

  else if (e.target.matches('.trash')) {
    var btn = $(e.target);
    console.log('hi')
    j=$(btn).closest('.copy');
    j.toggleClass('navdisp');
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
  }
    
  }
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

}

function neww(e) {
  var btn = $(e.target);
  j=$(btn).closest('.copy');
  startclone=j;
  if (e.target.matches('.clone')) {
    var ty = document.querySelector('.state');
    $(ty).find('.copy')
     console.log($(ty).find('.copy'));
     var d = $(ty).find('.copy');
     el = d[0];
     var cln = el.cloneNode(true);
     document.getElementsByClassName('dupli')[0].appendChild(cln);
   }
  // if (e.target.matches('.clone')) {
  //   var btn = $(e.target);
  //   j=$(btn).closest('.copy');
  //   var el =j[0];
  //   var cln = el.cloneNode(true);
  //   document.getElementsByClassName('dupli')[0].appendChild(cln);
  // }
  else if (e.target.matches('.cls')) {
    var btn = $(e.target);
    var div = $(btn).next().filter('.dem');
    $(div).toggleClass('in');
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
    d.classList.add("resizeC");
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
    d.classList.remove("resizeC");
    d.style.width = "500"+'px';
    d.style.height = "500"+'px';
    

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




