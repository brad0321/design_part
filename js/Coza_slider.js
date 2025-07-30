
//Step1. 이벤트 줄 요소 선택
let left = document.querySelector("#slider .left");  //  #slider라는 큰 상자 안에 있는 .left(왼쪽 화살표 버튼)을 찾아서 left라는 이름으로 저장해.
let right = document.querySelector("#slider .right");  //  #slider라는 큰 상자 안에 있는 .right(오른쪽 화살표 버튼)을 찾아서 right라는 이름으로 저장해.
let slides = document.querySelectorAll("#slider .slide"); //  #slider 안에 있는 모든 .slide(사진이나 그림 하나하나)를 전부 찾아서 slides라는 이름으로 저장해. (여러 개니까 배열로 저장돼!)

//Step2. 이벤트 등록
left.addEventListener("click", leftsliding);  //  왼쪽 버튼을 누르면 leftsliding이라는 함수가 실행되고,
right.addEventListener("click", rightsliding);  //  오른쪽 버튼을 누르면 rightsliding이라는 함수가 실행돼!

let index = 0; //  지금 몇 번째 슬라이드를 보여줄지 알려주는 숫자야.
               //  처음엔 0번(맨 처음 슬라이드)을 보여줘.

//Step3. 함수 선언
function leftsliding() { // 왼쪽 버튼을 눌렀을 때 실행되는 함수야.

  //Step4. 함수 구현
  index = index -1;  // 지금 슬라이드 번호를 하나 줄여(왼쪽으로 이동).

  if(index < 0) {  // 만약 0보다 작아지면(맨 처음에서 더 왼쪽으로 가면), 
    index = slides.length - 1 ;   // 마지막 슬라이드로 돌아가!
  }

  sliding();  // 슬라이드를 실제로 움직여주는 함수를 실행해.
}

function rightsliding() {  // 오른쪽 버튼을 눌렀을 때 실행되는 함수야.
  index++;    // 지금 슬라이드 번호를 하나 늘려(오른쪽으로 이동).

  if(index >= slides.length) {  // 만약 마지막 슬라이드보다 더 오른쪽으로 가면,
    index = 0;                  // 다시 맨 처음 슬라이드로 돌아가!
  }

  sliding();  // 슬라이드를 실제로 움직여주는 함수를 실행해.
}

// 실제로 슬라이드를 움직이는 함수
function sliding() {   //  슬라이드들을 움직여주는 함수야.
  slides.forEach(function(slide) {   //  모든 슬라이드(사진, 그림)를 하나씩 꺼내서,
         slide.style.transform = `translateX(${index*(-100)}%)`; // 예를 들어, index가 1이면 -100%, 2면 -200%로 움직여서 다음 슬라이드가 보이게 해줘!
  }); // 슬라이드의 위치를 바꿔줘.
}


// ★ 요약 ★
// 왼쪽, 오른쪽 버튼을 누르면 사진(슬라이드)이 옆으로 움직여.
// 맨 끝에서 더 누르면 다시 처음이나 마지막으로 돌아가.
// 슬라이드가 줄 맞춰서 움직이게 해주는 코드야!

  


// ★★★★★ HTML ★★★★★

// <section id="main">

//   <div class="slidebox">
//     <ul class="slides">

//       <li class="slide">
//         <div class="text_box">
//           <h1>Women Collection 2018</h1>
//           <h2>NEW SEASON</h2>
//           <a href="#">SHOP NOW</a>
//         </div>
//         <img src="./img/slide-01.jpg" alt="slide01" />
//       </li>

//       <li class="slide">
//         <div class="text_box">
//           <h1>Women Collection 2018</h1>
//           <h2>NEW SEASON</h2>
//           <a href="#">SHOP NOW</a>
//         </div>
//         <img src="./img/slide-02.jpg" alt="slide02" />
//       </li>

//       <li class="slide">
//         <div class="text_box">
//           <h1>Women Collection 2018</h1>
//           <h2>NEW SEASON</h2>
//           <a href="#">SHOP NOW</a>
//         </div>
//         <img src="./img/slide-03.jpg" alt="slide03" />
//       </li>

//     </ul>
//   </div>

//   <i class="fa-solid fa-caret-left left"></i>
//   <i class="fa-solid fa-caret-right right"></i>
// </section>




// ★★★★★ SCRIPT ★★★★★

// let left = document.querySelector("#slider .left");  
// let right = document.querySelector("#slider .right"); 
// let slides = document.querySelectorAll("#slider .slide");

// left.addEventListener("click", leftsliding); 
// right.addEventListener("click", rightsliding); 

// let index = 0; 

// function leftsliding() {   
//   index = index -1;

//   if(index < 0) { 
//     index = slides.length - 1 ; 
//   }

//   sliding();
// }

// function rightsliding() { 
//   index++; 

//   if(index >= slides.length) { 
//     index = 0; 
//   }

//   sliding();  
// }

// function sliding() {
//   slides.forEach(function(slide) { 
//     slide.style.transform = `translateX(${index*(-100)}%)`; 
//   });
// }