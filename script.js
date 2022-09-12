const GRID_SIZE = 16;

function drawGrid() {
  const gridContainer = document.querySelector('.grid-container');

  // Override number of grid columns if above constant is changed
  gridContainer.style = 'grid-template-columns: ' +
    'repeat(' + GRID_SIZE.toString() + ', 30px)';

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.className = 'grid-square';

      if (i == GRID_SIZE-1) {
        gridSquare.classList.add('border-bottom');
      }
      if (j == GRID_SIZE-1) {
        gridSquare.classList.add('border-right');
      }

      gridContainer.appendChild(gridSquare);
    }
  }
}

drawGrid();
