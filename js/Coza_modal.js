// Step1. 이벤트 줄 요소 선택하기
let imgs = document.querySelectorAll("#tab .imgbox img");
// #tab 안에 있는 .imgbox 안의 img 태그들을 모두 선택해서 imgs라는 변수에 저장.
let closeBtn = document.querySelector("#modal .close");
// 모달 창 안의 닫기 버튼(.close)을 선택해서 closeBtn에 저장.
let modal = document.querySelector("#modal");
// #modal : 전체 모달 영역 (배경 + 이미지 포함)
let modalImg = document.querySelector("#modalImg");
// #modalImg : 모달 안에서 큰 이미지가 보여질 img 요소

// Step2. 이벤트 등록하기
imgs.forEach(
  function(img){
    img.addEventListener("click", showModal); // 여러 이미지 각각에 대해 클릭 이벤트를 등록.
  }  //이미지를 클릭하면 showModal 함수가 실행됨.
);
closeBtn.addEventListener("click", closeModal); // 닫기 버튼을 클릭했을 때 closeModal() 함수 실행.

// Step3. 함수 선언하기
function showModal() {  // 모달 보여주는 함수.
  // Step4. 함수 구현하기  
  modalImg.src = this.src;  // this는 클릭한 이미지 그 자체를 가리킴.
  // 클릭한 이미지의 경로(src)를 모달 이미지에 넣어서 똑같은 이미지를 크게 보여줌.
  modal.style.display = "block";  // 모달을 보이게 설정
}

// Step3. 함수 선언하기
function closeModal() {  // 모달 닫기 버튼.
  // Step4. 함수 구현하기  
  modal.style.display = "none";  
}   // x버튼 클릭할 경우 모달창 display:none; 으로 바꿔서 안보이게 함.

window.addEventListener("click", function(event){  // 전체 화면(window)에서 클릭 이벤트 감지.
  if(event.target === modal){   
    modal.style.display = "none";
    console.log("event.target == modal인 경우 this: " , this);
    console.log("event.target == modal인 경우 event.target: ", event.target);
  } else{
    console.log("event.target != modal인 경우 this: " , this);
    console.log("event.target != modal인 경우 event.target: ", event.target);
  }//  만약 클릭한 대상(e.target)이 모달의 배경 영역(modal)이라면, 모달을 닫음.
})  //  이미지 내부 말고 배경 눌렀을 때만 닫힘힘


// 검은배경 모달과 컨텐츠를 구분해야함
// this나 modal의 display:none을 해버리면 어디를 선택하든 꺼짐
// e : event객체
// e.target : event가 실제 발생한 요소
// this : event 핸들러가 등록된 요소