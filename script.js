const gridContainer = document.querySelector('#gridContainer');
const btnContainer = document.querySelector('#titleBtn');
const dropDownContainer = document.querySelector('#dropDownContainer');


//random number in a range to be used as rgb values for cell colors
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//generates a random color for cell background
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

//function that clears the grid of all cells
function clearGrid() {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild); //while loop deletes all children of parent container
        };
}

//function that toggles the dropdown box
const dropDownContent = document.createElement('div');
dropDownContent.setAttribute('class', 'dropDownContent');
function dropDownToggle() {
    dropDownContent.classList.toggle('showDropDown');
}

//creating the dropdown box
const dropDownDisplay = document.createElement('button');
dropDownDisplay.setAttribute('class', 'dropDisplayBtn');
dropDownDisplay.textContent = "How many pixels per side?";
dropDownDisplay.addEventListener('click', dropDownToggle);
dropDownContainer.appendChild(dropDownDisplay);

//for loop creates the buttons inside the drop down box and adds functionality: 
//each button clears the grid, then creates a new grid with the chosen number 
//of squares per side
const allTheOptions = document.createDocumentFragment();
for(let i = 10; i <= 100; i += 10) {
    let numberOfSquares = document.createElement('button');
    numberOfSquares.setAttribute('class', 'dropDownChoice');
    numberOfSquares.value = i;
    numberOfSquares.textContent = `${i}`;
    numberOfSquares.addEventListener('click', () => {
        clearGrid();
        createGrid(i);
    });
    allTheOptions.appendChild(numberOfSquares);
}

//adding the dropdown box to the DOM
dropDownContent.appendChild(allTheOptions);
dropDownContainer.appendChild(dropDownContent);


//intitally creates a 10x10 grid on load
createGrid(10); 




