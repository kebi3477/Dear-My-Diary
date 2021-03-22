const canvas = document.querySelector(".mart--canvas");
initCanvas(canvas)
const items = [false, false, false, false];
const checkBoxs = document.querySelectorAll(".check_box");
const button = document.querySelector(".after_button");

canvas.addEventListener("touchmove", function(e) {
    checkBoxs.forEach((box, index) => {
        !items[index] && checkByDom(box) ? items[index] = true : "";
    })
})
canvas.addEventListener("touchend", function() {
    if(items.filter(data => data).length === items.length) {
        //alert("장보기 완료");
        button.classList.add("after_button_active");
        button.onclick = () => location.href = 'pay.html';
    }
})