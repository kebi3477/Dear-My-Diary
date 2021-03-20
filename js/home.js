const canvas = document.querySelector("canvas");
initCanvas(canvas);
const items = [false, false, false, false];
const checkBoxs = document.querySelectorAll(".check_box");
canvas.addEventListener("touchmove", function(e) {
    checkBoxs.forEach((box, index) => {
        !items[index] && checkByDom(box) ? items[index] = true : "";
    })
})
canvas.addEventListener("touchend", function() {
    if(items.filter(data => data).length === items.length) {
        alert("장보기 완료");
    }
})