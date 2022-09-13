const GRID_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;

const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');

function setCurrentColor(newColor) {
  currentColor = newColor;
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function drawGrid() {
  // Override number of grid columns if above constant is changed
  gridContainer.style = 'grid-template-columns: ' +
    'repeat(' + GRID_SIZE.toString() + ', 30px)';

  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.id = 'grid-square';

      if (i == GRID_SIZE-1) {
        gridSquare.classList.add('border-bottom');
      }
      if (j == GRID_SIZE-1) {
        gridSquare.classList.add('border-right');
      }

      // When mouse hovers over a square, fill it in with black
      gridSquare.onmouseover = function() {
        gridSquare.style.backgroundColor = currentColor;
      }

      gridContainer.appendChild(gridSquare);
    }
  }
}

// Color picker

drawGrid();
