//declare buttons to vars
const screenBtn = document.getElementById("screenBtn");
const randomBtn = document.getElementById("randomBtn")
const colorPicker = document.getElementById("colorPicker")
const clrOpt = document.getElementById("clrOpt")
const newBtn = document.getElementById("newBtn")

//variable declarations
let color = "black";
let isRandom = false;


//event listeners 
screenBtn.addEventListener("click", () => {
    document.getElementById("scrnOpt").classList.toggle("fadeIn")
    document.getElementById("scrnOpt").classList.toggle("fadeOut")
})

newBtn.addEventListener("click", () => {
    clear()
    let size = document.getElementById("size").value;
    makeScreen(size)
})

randomBtn.addEventListener("click", () => {
    isRandom = !isRandom;
    if (isRandom){
        randomBtn.value = "RAINBOWS ON!!!"
    }
    else{
        randomBtn.value = "RAINBOWS!!!"
    }
})

colorPicker.addEventListener("change", (e) => {
    color = e.target.value;
}, false)

colorOptions.addEventListener("click", () =>{
    document.getElementById("clrOpt").classList.toggle("fadeIn")
    document.getElementById("clrOpt").classList.toggle("fadeOut")
})

document.addEventListener('DOMContentLoaded', function() {
    makeScreen(size)
 });

// function to make the blank screen
function makeScreen(gridsize){ 
    var screen = document.getElementById("drawScreen"); 
    screen.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;

    for (let i = 0; i < gridsize * gridsize; i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", (e) => { 
            mouseOver(e);
        })
        cell.className = ("cell")
        screen.appendChild(cell);
    }

}



//color cell funciton
function mouseOver(event) {
    if (isRandom) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = randomColor; 
    }
    else{
        event.target.style.backgroundColor = color; 
    }
} 

//clears the grid to start over
function clear(){
    cells = document.getElementsByClassName("cell")
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "gray"
    }
}