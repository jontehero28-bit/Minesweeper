
boardState = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]


function createGrid(width, height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let board = document.querySelector(".board");
            let newButton = document.createElement("button");
          newButton.setAttribute("type", "button");
            newButton.classList.add("board-space");
            newButton.setAttribute("data-x", x);
            newButton.setAttribute("data-y", y);
            newButton.addEventListener("click", boardSpaceClick);
            if (boardState[y][x] == 1) {
                newButton.classList.add("bomb");
            } 
            board.append(newButton);
        }
    }
}

function boardSpaceClick(event) {
    let x = event.target.getAttribute("data-x");
    let y = event.target.getAttribute("data-y");
    if (boardState[y][x] == "1") {
        alert("You stepped on a mine!");
    }
    else if (boardState[y][x] == "0") {
        alert("There is no mine!")
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function generateBombs(gridSizeX, gridSizeY, numBombs) {
    let generatedBombs = 0;
    while (generatedBombs < numBombs) {
        let randomX = getRandomNumber(gridSizeX);
        let randomY = getRandomNumber(gridSizeY); 
        if (boardState[randomY][randomX] != 1) {
            boardState[randomY][randomX] = 1;
            generatedBombs ++;
        }
    }
}

generateBombs(8, 8, 10);
createGrid(8, 8);

