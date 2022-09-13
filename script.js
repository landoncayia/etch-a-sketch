const DEFAULT_SIZE = 16;
const GRID_PIXEL_WIDTH = 480;
const DEFAULT_COLOR = 'black';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const sizeSlider = document.getElementById('grid-slider');
const sizeLabel = document.querySelector('label[for=size]');
const cancelButton = document.getElementById('clear-grid');

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

sizeSlider.onchange = (e) => updateSize(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeLabel(e.target.value);
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
cancelButton.onclick = () => redrawGrid();

function updateSize(newSize) {
  setCurrentSize(newSize);
  clearGrid();
  redrawGrid();
}

function updateSizeLabel(newSize) {
  sizeLabel.innerHTML = `${newSize} x ${newSize}`;
}

function redrawGrid() {
  clearGrid();
  drawGrid();
}

function clearGrid() {
  gridContainer.innerHTML = '';
}

function drawGrid() {
  // Override number of grid columns if above constant is changed
  gridContainer.style =
    'grid-template-columns: ' +
    'repeat(' + currentSize.toString() + ', 1fr);' +
    'grid-template-rows: ' +
    'repeat(' + currentSize.toString() + ', 1fr);';

  for (let i = 0; i < currentSize; i++) {
    for (let j = 0; j < currentSize; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.id = 'grid-square';
      console.log(GRID_PIXEL_WIDTH / currentSize);

      if (i == currentSize-1) {
        gridSquare.classList.add('border-bottom');
      }
      if (j == currentSize-1) {
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

drawGrid();
