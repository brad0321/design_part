// ★★★ 자바스크립트 fixed 시 CSS에 추가 ★★★
// #h_bottom {
//   width: 100%;
//   position: absolute;
//   //top: 100%;
//   z-index: 33;  
//   left: 0;  
// }
// #h_bottom.scrolled{
//   position: fixed;
//   top: 0;
//   background-color: white;
//   //background-color: transparent;
// }


//Step1. 이벤트 줄 요소 선택하기
let h_top = document.querySelector("#h_top"); //HTML에서 #h_top 찾아서 h_top 변수에 저장
let h_bottom = document.querySelector("#h_bottom"); //HTML에서 #h_bottom 찾아서 h_bottom 변수에 저장
let offset = h_top.offsetHeight; // h_top 요소의 높이를 offset 변수에 저장
console.log("offset : ", offset);

//Step2. 이벤트 할당하기 //Step3. 함수 선언하기 -> 무명함수로 대체
window.addEventListener("scroll", function () {  // window는 브라우저 창 전체 // 함수는 "scroll" 시 호출
  //Step4. 함수 구현하기
  if (window.scrollY > offset) {  // 만약 스크롤된 거리가 h_top의 높이보다 크면
    h_bottom.classList.add("scrolled");  // h_bottom 이 고정된 채 보여짐
    // h_bottom.style.top = "0px";
  } else {                        // 만약 스크롤된 거리가 h_top의 높이보다 작으면
    h_bottom.classList.remove("scrolled");   //  h_bottom 이 보이지 않음
    // h_bottom.style.top = offset + "px";
  }
});


// ★ 요약 ★
// 페이지가 스크롤될 때마다,
// window.scrollY 값을 확인해서
// h_top의 높이를 넘었는지 비교하고,
// 넘었으면 h_bottom에 "scrolled" 클래스를 추가해서 고정시키고,
// 안 넘었으면 그 클래스를 제거해서 원래대로 돌립니다.