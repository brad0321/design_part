let left = document.querySelector("#main .left"); 
let right = document.querySelector("#main .right"); 
let slides = document.querySelectorAll(".slide"); 
let slideUl = document.querySelector(".slides");

left.addEventListener("click", leftsliding); 
right.addEventListener("click", rightsliding); 

let firstContent = slides[0].cloneNode(true);
let lastContent = slides[slides.length - 1].cloneNode(true);
slideUl.appendChild(firstContent);
slideUl.insertBefore(lastContent, slides[0]);

slides = document.querySelectorAll(".slide");

let index = 1; 
sliding(false); 

function leftsliding() {

  index--; 
  if (index <= 0) {
    sliding(true);          
    index = slides.length - 2;     
    
    setTimeout(function () {
      sliding(false);   
    }, 300);
  } else {
    sliding(true);
  }
} 

function rightsliding() {
  
  index++;
  if (index >= slides.length - 1) {
    sliding(true);
    index = 1;        
    
    setTimeout(function () {
      sliding(false);
    }, 300);
  } else {
    console.log(sliding(true));
  }
}

function sliding(state) {
  if (state) {
    slides.forEach(function (slide) {
      slide.style.transition = `all .3s`;
    });  
  } else {
    slides.forEach(function (slide) {
      slide.style.transition = `none`;
    });  
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(${index * -100}%)`;
  }); 

  return "transition : " + slides[0].style.transition;
}