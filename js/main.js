const main = document.querySelector(".main");
try {
    const name = localStorage.getItem("nickName");
    setNickname(name);
} catch(err) {
    localStorage.setItem("nickName", "");
    setNickname();
}

function setNickname(name="guest") {
    const label = document.createElement("label");
    label.innerText = `${name} 님`;
    label.classList.add("nickname");
    main.append(label);
}