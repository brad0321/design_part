
//Step1. 이벤트 줄 요소 선택
let home = document.querySelector("#menuList_home"); // 웹페이지에서 id가 menuList_home인 것을 찾아서 home이라는 이름으로 저장해.  (이건 메뉴 버튼이야!)
let subList = document.querySelector("#subList");  // 웹페이지에서 id가 subList인 것을 찾아서 subList라는 이름으로 저장해.  (이건 숨겨진 메뉴 목록이야!)

//Step2. 이벤트 등록록
home.addEventListener("click", showSubList); 
// home을 클릭하면 showSubList라는 함수를 실행해!  (즉, 메뉴 버튼을 누르면 아래 메뉴가 나타나거나 사라지게 할 거야.)

let clickCount = 0; // 클릭한 횟수를 세는 숫자야. 처음엔 0이야.

//Step3. 함수 선언
function showSubList() {  // 이건 함수야. 메뉴를 클릭할 때마다 실행돼.
  
  //Step4. 함수 구현
  clickCount++; // 클릭할 때마다 숫자를 1씩 더해.
  if (clickCount % 2 == 1) { // 클릭한 횟수가 홀수(1, 3, 5...)라면,
    // if(clickCount % 2 == 0) -> 클릭횟수가 짝수(2, 4, 6...)라면

    // CSS에 아래 style이 있으므로
    // .display_block {
    //   display: block;
    // }

    subList.classList.add("display_block");  // 숨겨진 메뉴를 보여줘!  (display_block이라는 이름의 스타일을 붙여서 보여지게 해)
  } else {   //  클릭한 횟수가 짝수(2, 4, 6...)라면,
    subList.classList.remove("display_block");  // 숨겨진 메뉴를 다시 숨겨!
  }
}


// ★ 요약 ★
// 메뉴 버튼을 누르면 아래 메뉴가 나타나고,
// 한 번 더 누르면 다시 사라져!
// 이걸 계속 반복할 수 있어.




// ★★★★★ HTML ★★★★★

// <nav id="main_menu">
//   <ul id="menuList">
//     <li id="menuList_home">
//       <span>Home</span>
//       <ul id="subList">
//         <li>COZAstore 1</li>
//         <li>COZAstore 2</li>
//         <li>COZAstore 3</li>
//       </ul>
//     </li>
//     <li><a href="#">Shop</a></li>
//     <li><a href="#">Features</a></li>
//     <li><a href="#">Blog</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Contact</a></li>
//   </ul>
// </nav>


// ★★★★★ CSS ★★★★★

// #menuList_home {
//   position: relative;
// }
// #subList {
//   position: absolute;
//   display : none;
// }
// .display_block {
//   display: block;
// }


// ★★★★★ SCRIPT ★★★★★

// let home = document.querySelector("#menuList_home");   // li
// let subList = document.querySelector("#subList");      // li > ul

// home.addEventListener("click", showSubList); 

// let clickCount = 0;

// function showSubList() {   
//   clickCount++; 
//   if (clickCount % 2 == 1) { 
//     subList.classList.add("display_block"); 
//   } else {
//     subList.classList.remove("display_block"); 
//   }
// }