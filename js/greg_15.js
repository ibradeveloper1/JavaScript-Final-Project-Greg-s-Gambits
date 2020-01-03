//declare and initialize variables
var cells;
var swapped;


// create function to load array and call placeNumbers()
function setup() {

    cells = new Array([document.getElementById("cell00"),
    document.getElementById("cell01"),
    document.getElementById("cell02"),
    document.getElementById("cell03")],
        [document.getElementById("cell10"),
        document.getElementById("cell11"),
        document.getElementById("cell12"),
        document.getElementById("cell13")],
        [document.getElementById("cell20"),
        document.getElementById("cell21"),
        document.getElementById("cell22"),
        document.getElementById("cell23")],
        [document.getElementById("cell30"),
        document.getElementById("cell31"),
        document.getElementById("cell32"),
        document.getElementById("cell33")]);
    placeNumbers();

}

// create function to place random numbers in the cells
function placeNumbers() {
    var numbers = new Array();
    for (var i = 0; i <= 16; i++)
        numbers[i] = i;
    var randomLoc;
    var temp;
    for (i = 0; i < 16; i++) {
        randomLoc = Math.floor(Math.random() * 15 + 1);
        temp = numbers[i];
        numbers[i] = numbers[randomLoc];
        numbers[randomLoc] = temp;
    }
    i = 0;
    for (var rows = 0; rows < 4; rows++) {
        for (var cols = 0; cols < 4; cols++) {
            if (numbers[i] != 0)
                cells[rows][cols].innerHTML = numbers[i];

            else
                cells[rows][cols].innerHTML = "";
            ++i;
        }
    }

}

// create the function that will check, each time a cell is clicked, if
// the move is legal and will, if it is not legal, display an alert
// if the move is legal, the function should call the swap() function
// it should also check to see if this move is a winner, i.e., call checkWinner()
function doClick(row, col) {

    var top = row - 1;
    var bottom = row + 1;
    var left = col - 1;
    var right = col + 1;
    swapped = false;
    if (top != -1 && cells[top][col].innerHTML == "")
        swap(cells[row][col], cells[top][col]);
    else if (right != 4 && cells[row][right].innerHTML == "")
        swap(cells[row][col], cells[row][right]);
    else if (bottom != 4 && cells[bottom][col].innerHTML == "")
        swap(cells[row][col], cells[bottom][col]);
    else if (left != -1 && cells[row][left].innerHTML == "")
        swap(cells[row][col], cells[row][left]);
    else
        alert("Illegal move.");
    checkWinner();

}

// create function to swap values
function swap(firstCell, secondCell) {
    swapped = true;
    secondCell.innerHTML = firstCell.innerHTML;
    firstCell.innerHTML = "";

}

// create function to check if the last move made makes this a win
// display winning message if it is a winner
function checkWinner() {
    var win = true;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (!(cells[i][j].innerHTML == i * 4 + j + 1))
                if (!(i == 3 && j == 3))
                    win = false;
        }
    }
    if (win) {
        alert("Congratulations! You won!");
        if (window.prompt("Play again?", "yes"))
            placeNumbers();
    }

}