let home = document.querySelector("#menuList_gear");
let subList = document.querySelector("#subList");
let overlay = document.querySelector("#overlay");

home.addEventListener("click", showSubList);

let clickCount = 0;

function showSubList() {
  clickCount++;
  if (clickCount % 2 == 1) {
    subList.classList.add("display_block");
    overlay.style.display = "block";
  } else {
    subList.classList.remove("display_block");
    overlay.style.display = "none";
  }
}

overlay.addEventListener("click", function () {
  subList.classList.remove("display_block");
  overlay.style.display = "none";
  clickCount = 0;
});


