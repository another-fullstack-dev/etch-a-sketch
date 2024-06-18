const container = document.querySelector(".container");
const buttonGrid = document.querySelector(".btn-grid");
const buttonRGB = document.querySelector(".btn-rainbow");
const borderRange = document.querySelector("#border-radius-range");
const CONTAINER_SIDE = 384;
let rgb = false;
container.style.borderRadius = borderRange.value + "%";

for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.minWidth = "24px";
    div.style.minHeight = "24px";
    div.addEventListener("mouseenter", () => div.style.backgroundColor = "black");
    container.appendChild(div);
}

function newGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    container.textContent = "";
    container.style.backgroundColor = "white";

    let amount = parseInt(prompt("How many squares per side? Maximum value is 100."));

    if (amount > 100){
        container.textContent = ":("
        container.style.backgroundColor = "cornflowerblue"
        return alert("Error. Value cant be higher than 100!");
    } else if (amount <= 0){
        container.textContent = ":("
        container.style.backgroundColor = "cornflowerblue"
        return alert("Error. 0 or negative values aren't accepted.");
    } else if (isNaN(amount)){ 
        container.textContent = ":(";
        container.style.backgroundColor = "cornflowerblue";
        return alert("Error. Enter a valid number.");
    }

    if (this.textContent == "Rainbow grid") {
        rgb = true;
    } else {
        rgb = false;
    }

    let sides = CONTAINER_SIDE / amount;
    sides = sides.toString() + "px";

    for (let i = 0; i < amount * amount; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.minWidth = sides;
        div.style.minHeight = sides;

        if (rgb) {
            div.addEventListener("mouseenter", () => div.style.backgroundColor = randomRGB(0, 255));
        } else {
            div.addEventListener("mouseenter", () => div.style.backgroundColor = "black");
        }

        container.appendChild(div);
    }
}

function randomRGB(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    let g = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    return "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")"; 
}

function rainbowMode(){

}

function borderRadius(){
    container.style.borderRadius = this.value + "%";
}

buttonGrid.addEventListener("click", newGrid);
buttonRGB.addEventListener("click", newGrid);
borderRange.addEventListener("change", borderRadius);