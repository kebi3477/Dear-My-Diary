const backgroundsWrap = document.querySelector(".backgrounds-wrap");
const startBtn = document.querySelector(".start");
const setBtn = document.querySelector(".setsave");

startBtn.onclick = () => backgroundsWrap.classList.add("slide");
setBtn.onclick = () => {
    const name = document.querySelector(".name");
    localStorage.setItem("nickName", name.value);
    location.href = "main.html";
}