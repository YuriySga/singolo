const MENU = document.getElementById("menu");
const IPHONES =  document.getElementById("iphones");
const WRAPPERSLIDER = document.getElementById("wrapper_slider");
const VDISPLAY = document.getElementById("vertical_display_image");
const HDISPLAY = document.getElementById("horizontal_display_image");

////Header
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
}); 

////Slider
let slides = document.querySelectorAll('.slide');
let slideArr =[];
slideArr.push(slides[1].cloneNode(true));
slideArr.push(slides[0]);
slideArr.push(slides[1]);
draw(slideArr);

function draw(arr) {
  IPHONES.innerHTML = '';
  let offset  = -1;
  for (i=0; i < arr.length; i++) {
    arr[i].style.left = offset*1020 + 'px';    
    offset++;
    document.querySelector('#iphones').appendChild(arr[i]);
  }
}
  
function left() { 
  setColorSlider();
  let arr2 = [];
  let offset2 = -1; 
  let slideArr2 = document.querySelectorAll('.slide');
  for (let i=0; i < slideArr2.length; i++){
    slideArr2[i].style.left = offset2*1020 - 1020 + 'px';
    offset2++;  
  }   
  setTimeout(function() {
    console.log(slideArr2);
    arr2.push(slideArr2[1]);
    arr2.push(slideArr2[2]);
    arr2.push(slideArr2[1].cloneNode(true)); 
    draw(arr2);
  },500);  
  }

function right() {   
  setColorSlider();
   let arr2 = [];
   let offset2 = -1; 
   let slideArr2 = document.querySelectorAll('.slide');
   for (let i=0; i < slideArr2.length; i++){
    slideArr2[i].style.left = offset2*1020 + 1020 + 'px';
    offset2++;  
    } 
    setTimeout(function() {
    console.log(slideArr2);
    arr2.push(slideArr2[1]);
    arr2.push(slideArr2[2]);
    arr2.push(slideArr2[1].cloneNode(true)); 
    draw(arr2);      
  },500);  
}

function setColorSlider () {
  console.log('setColorSlider');
  if (WRAPPERSLIDER.style.backgroundColor == 'rgb(100, 139, 240)') {
    WRAPPERSLIDER.style.backgroundColor = 'rgb(240, 108, 100)';
  }
  else WRAPPERSLIDER.style.backgroundColor = 'rgb(100, 139, 240)';  
}

function vertical_display(){
  let VDISPLAY = document.getElementById("vertical_display_image");
  if (VDISPLAY.style.opacity == '0') {
    VDISPLAY.style.opacity = "1";
  } else VDISPLAY.style.opacity = "0";
}

function horizontal_display(){
  let HDISPLAY = document.getElementById("horizontal_display_image");
  if (HDISPLAY.style.opacity == '0') {
    HDISPLAY.style.opacity = "1";
  } else HDISPLAY.style.opacity = "0";
}

//




