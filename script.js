const gridContainer = document.querySelector('#gridContainer');
const btnContainer = document.querySelector('#titleBtn');

function createGrid(squaresPerSide) {
    let allTheSquares = document.createDocumentFragment();
    gridContainer.style.setProperty("--squares-per-side", squaresPerSide);
    for(let i = 0; i < (squaresPerSide ** 2); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'gridCell');
        gridCell.addEventListener('mouseover', () => {
            gridCell.setAttribute('class', 'gridCellBackground');
        });
        allTheSquares.appendChild(gridCell);
    };
    gridContainer.appendChild(allTheSquares);
};

createGrid(16);

const resetButton = document.createElement('button');
resetButton.setAttribute('class', 'button');
resetButton.textContent = "Start over!";

resetButton.addEventListener('click', () => {
    let userGrid = prompt("How many squares would you like per side?");
    if(userGrid == null) {
        alert("Well then keep enjoying yourself!")
    } else if (isNaN(parseInt(userGrid)) || parseInt(userGrid) <= 0 || parseInt(userGrid) > 100) {
        alert("Come on and give us something we can work with");
    } else {
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        };
        createGrid(userGrid);
    }
});
btnContainer.appendChild(resetButton);


