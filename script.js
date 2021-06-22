//instead of the colors changing from one to another have it go to a completely random RGB value
//after that, change the colour by adding 10% black after each pass

// bugs to fix: 
// -- grid container size increases with the number of units in the grid

// load the dom
const gridContainer = document.querySelector('.container');
let gridunits = 16;

// when the page loads the default grid is made
window.onload = function () {
    makeGrid(gridunits);
};

//make the grid
function makeGrid(gridunits) {
    // change the css grid style accorsing to gridunits
    gridContainer.style.gridTemplateColumns = `repeat(${gridunits}, 1fr)`;
    //start a loop that makes a unit each time the loop iterates
    for (let i = 0; i < gridunits * gridunits; i++) {
        const unit = document.createElement('div');
        unit.className = 'unit';
        unit.id = i;
        gridContainer.appendChild(unit);
        //add an event listener to each unit
        unit.addEventListener('mouseover', changeColor)
    }
}

// add a class to the div
function changeColor(e) {
    e.target.classList.add('active')
}

//newGrid creates a new grid according to user input
function newGrid() {
    // limit the size of the grid --> crashes around 70
    const MAXUNITS = 70
    let newunits = prompt('What size would you like the new grid?')
    if (newunits > MAXUNITS) {
        newunits = prompt('Please enter a number lower than ' + MAXUNITS);
        if (!newunits) {
            return;
        }
    }
    else if (!newunits) {
        return;
    }
    gridunits = newunits
    resetGrid();
    deleteGrid();
    makeGrid(gridunits);
}

//resetGrid removes 'active' class
function resetGrid() {
    // get all the units that are using the active class
    const units = document.querySelectorAll('.active');
    // foreach item in the nodeList remove the active class
    units.forEach(item => item.classList.remove('active'))
}

// removes the grid
function deleteGrid() {
    //get the original number of units
    let origunits = gridContainer.childNodes.length - 1
    // remove them from the gridContainer
    for (let i = 0; i < origunits; i++) {
        let unit = document.getElementById(i);
        gridContainer.removeChild(unit);
    }
}