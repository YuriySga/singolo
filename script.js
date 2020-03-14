const MENU = document.getElementById("menu");
const IPHONES =  document.getElementById("iphones");
const WRAPPERSLIDER = document.getElementById("wrapper_slider");
const MENU_PORTFOLIO = document.getElementById("portfolio_link");
const IMAGE_PORTFOLIO = document.getElementById("image_art");
const SUBMIT_BTN = document.getElementById("submit");
const FORM = document.getElementById("form");


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

//Portfolio image art

MENU_PORTFOLIO.addEventListener('click', (event) => {
  MENU_PORTFOLIO.querySelectorAll('li').forEach(el => el.classList.remove('activePortfolio'));
  event.target.classList.add('activePortfolio');
}); 

function random() {
  let slidesPortfolio = document.querySelectorAll('.picture');
  slidesPortfolio.forEach((item, index) => {
    if (Math.random() > 0.5) { 
      image_art.append(slidesPortfolio[index]);
    }
  });
}

//Portfolio image border

IMAGE_PORTFOLIO.addEventListener('click', (event) => {
  IMAGE_PORTFOLIO.querySelectorAll('div').forEach(el => el.classList.remove('activePortfolioImage'));
  event.target.classList.add('activePortfolioImage');
}); 

//Get a quote

FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  let formSubject =  document.querySelector(".input_subject");
  let formDetail =  document.querySelector(".textarea_detail");

  let pop_up_subject_area = document.querySelector(".pop_up_subject");
  let pop_up_text_area = document.querySelector(".pop_up_text");

  if (formSubject.value == '') {
    pop_up_subject_area.innerHTML = 'Без темы';
  } else {
    pop_up_subject_area.innerHTML = formSubject.value;
  }

  if (formDetail.value == '') {
    pop_up_text_area.innerHTML = 'Без описания';
  } else {
    pop_up_text_area.innerHTML = formDetail.value;
  }
  document.querySelector(".pop_up_msg").style.display = "block";
}); 






