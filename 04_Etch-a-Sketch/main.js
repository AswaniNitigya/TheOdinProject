let currentColor="black"
console.log("working");

createBoard();

function createBoard(size = 16) {
    let mainBoard = document.querySelector(".mainBoard");
    mainBoard.innerHTML = "";  // Clear old grid first!

    for (let i = 1; i <= (size * size); i++) {
        const div = document.createElement("div");
        
        // Attach hover event to each div here!
        div.addEventListener("mouseover", colorDiv);

        mainBoard.appendChild(div);
    }

    mainBoard.style.display = "grid";
    mainBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
} 

function setColor(ColorChoice = "black") {
    currentColor = ColorChoice;
}

function colorDiv(event) {
    if (currentColor === "random") {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        event.target.style.backgroundColor = currentColor;
    }
}