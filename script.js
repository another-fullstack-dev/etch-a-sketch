const container = document.querySelector(".container");
const button = document.querySelector(".btn-grid");
const CONTAINER_SIDE = 384;
let firstRunSides = 384 / 16;
    firstRunSides = firstRunSides.toString() + "px";

for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.minWidth = firstRunSides;
    div.style.minHeight = firstRunSides;
    div.addEventListener("mouseenter", () => div.style.backgroundColor = randomRGB(0, 255));
    container.appendChild(div);
}

function newGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    let amount = prompt("How many squares per side? Maximum value is 100.");

    if (amount > 100){
        return alert("Error. Value cant be higher than 100!");
    } else if (amount <= 0){
        return alert("Error. 0 or negative values aren't accepted.");
    }

    let sides = 384 / amount;
    sides = sides.toString() + "px";

    for (let i = 0; i < amount * amount; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.minWidth = sides;
        div.style.minHeight = sides;
        div.addEventListener("mouseenter", () => div.style.backgroundColor = randomRGB(0, 255));
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

button.addEventListener("click", newGrid);