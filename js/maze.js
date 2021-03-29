const canvas = document.querySelector(".maze--canvas");
const checkBoxs = document.querySelectorAll(".check_box");
const afterButton = document.querySelector(".after_button");
const popupSecond = document.querySelector(".popup_second")
const checklist = document.querySelector(".checklist");

let items = [false, false];

initCanvas(canvas);
canvas.addEventListener("touchstart", function(e) {
    checkByDom(checkBoxs[0]) ? items[0] = true : "";    
})
canvas.addEventListener("touchend", function(e) {
    checkByDom(checkBoxs[1]) ? items[1] = true : "";    
    console.log(checkBoxs[1].offsetLeft, checkBoxs[1].offsetTop, mousePos);
    console.log(checkBoxs[1].offsetLeft+checkBoxs[1].offsetWidth, checkBoxs[1].offsetTop+checkBoxs[1].offsetHeight, mousePos);
    console.log(items);
    if(items[0] && items[1]) {
        // alert("미로 성공!");
        afterButton.classList.add("after_button_active");
        afterButton.onclick = () => location.href = 'mart.html';
    } else {
        items = [false, false];
    }
})
checklist.addEventListener("click", function() {
    popupSecond.style.animation = 'fadeIn 2s forwards';
    setTimeout(() => {
        popupSecond.style.animation = 'fadeOut 2s forwards';
    }, 2000)
})