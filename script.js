const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseenter", () => div.style.backgroundColor = "wheat")
    container.appendChild(div);
}