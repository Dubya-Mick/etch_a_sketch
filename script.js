const gridContainer = document.querySelector('#gridContainer');
const btnContainer = document.querySelector('#titleBtn');

//random number in a range to be used as rgb values
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//generates a random color
function randomRGBColor() { 
    return 'rgb(' + randomNumber(0, 255) + ', ' + randomNumber(0, 255) + ', ' + randomNumber(0, 255) + ')';
}

//function that dynmically creates the grid
function createGrid(squaresPerSide) {
    let allTheSquares = document.createDocumentFragment(); //creating docfragment to add all the new cell divs to
    gridContainer.style.setProperty("--squares-per-side", squaresPerSide); //have to set the variable as a property in the style of the element in order to call it
    for(let i = 0; i < (squaresPerSide ** 2); i++) { //number of chosen squares is squared to create the grid
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'gridCell');
        gridCell.addEventListener('mouseover', () => { //mousouver changes the cell's background to a random rgb color
            const newBackGroundColor = randomRGBColor();
            gridCell.style.setProperty('background-color', newBackGroundColor);
        });
        allTheSquares.appendChild(gridCell);
    };
    gridContainer.appendChild(allTheSquares); //adding the docfragment in one fel swoop to the container of the grid
};

createGrid(16); //intitally creates a 16x16 grid on load

const resetButton = document.createElement('button');
resetButton.setAttribute('class', 'button');
resetButton.textContent = "Start over!";

resetButton.addEventListener('click', () => {
    let userGrid = prompt("How many squares would you like per side?");
    if(userGrid == null) { // if the user cancels the prompt
        alert("Well then keep enjoying yourself!"); 
    } else if (isNaN(parseInt(userGrid)) || parseInt(userGrid) <= 0 || parseInt(userGrid) > 100) { //if user gives something thats NaN or too big or less than zero
        alert("Come on and give us something we can work with");
    } else {
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild); //while loop deletes all children of parent container
        };
        createGrid(userGrid);
    }
});
btnContainer.appendChild(resetButton);


