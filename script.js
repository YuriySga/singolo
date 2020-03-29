const MENU = document.getElementById('menu');
const IPHONES =  document.getElementById('iphones');
const WRAPPERSLIDER = document.getElementById('wrapper_slider');
const MENU_PORTFOLIO = document.getElementById('portfolio_link');
const IMAGE_PORTFOLIO = document.getElementById('image_art');
const SUBMIT_BTN = document.getElementById('submit');
const FORM = document.getElementById('form');
const BLOCKS = document.querySelectorAll('section, footer');
const BURGER = document.querySelector('.burger_menu');

////Header

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  BLOCKS.forEach(el => {
    if (event.target.dataset.ref === el.getAttribute('id')) {
      window.scroll({top: el.offsetTop - header.offsetHeight});
    }    
  }); 
  if (BURGER.style.display === 'block') {
    burger_btn ();
  }
}); 

document.addEventListener('scroll', onscroll);

function onscroll () { 
  const curPos = window.scrollY;
  BLOCKS.forEach(el => {
    el.getAttribute('id');
    if (el.offsetTop - header.offsetHeight <= curPos && el.offsetTop + el.offsetHeight - header.offsetHeight > curPos) {
      MENU.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.dataset.ref) {
          a.classList.add('active');
        }        
      });
    }   
  });  
}

function burger_btn (){
  let logo = document.querySelector('.logo');
  let wrapper_header = document.querySelector('.wrapper_header');
  let burger_button = document.querySelector('.burger_btn');
  let nav = document.querySelector('nav');

    if (burger_button.classList.contains("burger_btn_rotate_right")) { 
      logo.style.left = '';     
      BURGER.style.display = 'none';
      burger_button.classList.remove('burger_btn_rotate_right');
      burger_button.classList.add('burger_btn_rotate_left');
      nav.style.display = '';
      //wrapper_header.style.justifyContent = 'center';
      return;
    }

  BURGER.style.display = 'block';
  burger_button.classList.remove('burger_btn_rotate_left');
  burger_button.classList.add('burger_btn_rotate_right');
  nav.style.display = 'block';
  //wrapper_header.style.justifyContent = 'left';
  logo.style.left = '75px';
  
}

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
  
arrow_left.addEventListener('click',  left);
arrow_right.addEventListener('click', right);

function left() { 
  arrow_left.removeEventListener('click',  left);
  let arr2 = [];
  let offset2 = -1; 
  let slideArr2 = document.querySelectorAll('.slide');
  for (let i=0; i < slideArr2.length; i++){
    slideArr2[i].style.left = offset2*1020 - 1020 + 'px';
    offset2++;  
  }  
  setColorSlider();
  setTimeout(function() {      
    arr2.push(slideArr2[1]);
    arr2.push(slideArr2[2]);
    arr2.push(slideArr2[1].cloneNode(true)); 
    draw(arr2); 
    arrow_left.addEventListener('click',  left);     
  },700);
  }

function right() {  
  arrow_right.removeEventListener('click',  right); 
  let arr2 = [];
  let offset2 = -1; 
  let slideArr2 = document.querySelectorAll('.slide');
  for (let i=0; i < slideArr2.length; i++){
    slideArr2[i].style.left = offset2*1020 + 1020 + 'px';
    offset2++;  
    } 
  setColorSlider();
  setTimeout(function() {
    arr2.push(slideArr2[1]);
    arr2.push(slideArr2[2]);
    arr2.push(slideArr2[1].cloneNode(true)); 
    draw(arr2); 
    arrow_right.addEventListener('click', right);      
  },700);
}

function setColorSlider () {
  if (WRAPPERSLIDER.style.backgroundColor == 'rgb(100, 139, 240)') {
    WRAPPERSLIDER.style.backgroundColor = 'rgb(240, 108, 100)';
  }
  else WRAPPERSLIDER.style.backgroundColor = 'rgb(100, 139, 240)';  

  if (WRAPPERSLIDER.style.borderBottomColor == 'rgb(68, 116, 239)') {
    WRAPPERSLIDER.style.borderBottomColor = 'rgb(234, 103, 107)';
  }
  else WRAPPERSLIDER.style.borderBottomColor = 'rgb(68, 116, 239)';  
}

function vertical_display(){
  let VDISPLAY = document.getElementById('vertical_display_image');
  if (VDISPLAY.style.opacity == '0') {
    VDISPLAY.style.opacity = '1';
  } else VDISPLAY.style.opacity = '0';
}

function horizontal_display(){
  let HDISPLAY = document.getElementById('horizontal_display_image');
  if (HDISPLAY.style.opacity == '0') {
    HDISPLAY.style.opacity = '1';
  } else HDISPLAY.style.opacity = '0';
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
  let formSubject =  document.querySelector('.input_subject');
  let formDetail =  document.querySelector('.textarea_detail');

  let pop_up_subject_area = document.querySelector('.pop_up_subject');
  let pop_up_text_area = document.querySelector('.pop_up_text');

  if (formSubject.value == '') {
    pop_up_subject_area.innerHTML = 'Без темы';
  } else {
    pop_up_subject_area.innerHTML ='Тема: ' + formSubject.value;
  }

  if (formDetail.value == '') {
    pop_up_text_area.innerHTML = 'Без описания';
  } else {
    pop_up_text_area.innerHTML = 'Описание: ' + formDetail.value;
  }
  document.querySelector('.pop_up_msg').style.display = 'block';
}); 

function pop_up_ok_btn() {
  document.getElementById('form').reset();
  document.querySelector('.pop_up_msg').style.display = 'none';
}






