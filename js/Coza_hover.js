
//Step1. 이벤트 줄 요소 선택
let imgBoxs = document.querySelectorAll("#tab .all .imgbox");  //  #tab 안에 있는 .all 안에 있는 .imgbox(사진이 들어있는 상자들)를 모두 찾아서 imgBoxs라는 이름으로 저장해. (여러 개니까 배열로 저장돼!)
let aNodes = document.querySelectorAll("#tab .imgbox button");  //  #tab 안에 있는 .imgbox 안에 있는 button(버튼)들을 모두 찾아서 aNodes라는 이름으로 저장해.

//Step2. 이벤트 등록록
imgBoxs.forEach(function(imgBox){  //  모든 이미지 상자(imgBox)에 두 가지 일을 하게 해:
  imgBox.addEventListener("mouseenter", showButton);  //  마우스를 올리면(mouseenter) showButton 함수를 실행해.
  imgBox.addEventListener("mouseleave", removeButton);  //  마우스를 빼면(mouseleave) removeButton 함수를 실행해.  
});       

//Step3. 함수 선언
function showButton(){  // 이 함수는 마우스를 올렸을 때 실행돼.

  //Step4. 함수 구현       (이렇게 하면 버튼이 보이게 돼!)
  this.querySelector(".sub_box").classList.add("show");  //  this는 마우스를 올린 그 이미지 상자를 말해.  그 안에서 .sub_box(숨겨진 버튼 상자)를 찾아서,  show라는 이름의 스타일을 붙여줘.
}  

//Step3. 함수 선언
function removeButton(){  //  이 함수는 마우스를 뺐을 때 실행돼.

  //Step4. 함수 구현하기  (이렇게 하면 버튼이 다시 안 보이게 돼!)
  this.querySelector(".sub_box").classList.remove("show");  //  마우스를 뺀 그 이미지 상자 안의 .sub_box에서  show라는 스타일을 빼줘.
}

  
// ★ 요약 ★
// 사진 위에 마우스를 올리면 버튼이 나타나고,
// 마우스를 빼면 버튼이 다시 사라져!
// 이걸 모든 사진 상자에 똑같이 적용해.



// ★★★★★ HTML ★★★★★

// <section id="tab">
//   <article class="container">
//     <h1>PRODUCT OVERVIEW</h1>

//     <div class="search">
//       <div class="tab_label">
//         <label for="t01" class="tab" id="all">All-Products</label>
//         <label for="t02" class="tab" id="women">Women</label>
//         <label for="t03" class="tab" id="men">Men</label>
//         <label for="t04" class="tab" id="bag">Bag</label>
//         <label for="t05" class="tab" id="shoes">Shoes</label>
//         <label for="t06" class="tab" id="watches">Watches</label>
//       </div>
//       <div class="search_btns">
//         <button><i class="fa-solid fa-wifi"></i> Filter</button>
//         <button><i class="fa-solid fa-magnifying-glass"></i> Search</button>
//       </div>
//     </div>

//     <ul class="tab_contents">

//       <li class="all women">
//         <div class="imgbox">
//           <img src="./img/product-01.jpg" alt="product01" />
//           <div class="sub_box">
//             <button>Quick View</button>
//           </div>
//         </div>
//         <div class="text_box">
//           <span>Esprit Rufflo Shirt</span>
//           <i class="fa-regular fa-heart"></i>
//         </div>
//         <p>$16.64</p>
//       </li>

//     </ul>

//     <button class="btn">LOAD MORE</button>
//   </article>
// </section>



// ★★★★★ CSS ★★★★★

// .tab_contents .imgbox .sub_box {
//   position: absolute;
//   bottom: -100px;
//   left: 50%;
//   transform: translateX(-50%);
//   transition: all .5s;  
//   text-align: center;  
// }
// .tab_contents .imgbox .sub_box.show {  
//   bottom: 30px;
// }
// .tab_contents .sub_box button {
//   display: inline-block;
//   padding: 10px 20px;
//   border-radius: 20px;
//   background-color: white;
//   color: #333333;
//   border: none;  
// }
// .tab_contents .sub_box button:hover {
//   background-color: black;
//   color: white;
//   cursor: pointer;
// }



// ★★★★★ SCRIPT ★★★★★

// let imgBoxs = document.querySelectorAll("#tab .all .imgbox");
// let aNodes = document.querySelectorAll("#tab .imgbox button");

// imgBoxs.forEach(function(imgBox){
//   imgBox.addEventListener("mouseenter", showButton);  
//   imgBox.addEventListener("mouseleave", removeButton);  
// });      

// function showButton(){    
//   this.querySelector(".sub_box").classList.add("show");
// } 

// function removeButton(){  
//   this.querySelector(".sub_box").classList.remove("show");
// } 
