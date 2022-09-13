const DEFAULT_SIZE = 16;
const GRID_PIXEL_WIDTH = 480;
const DEFAULT_COLOR = 'rgb(0, 0, 0)';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const sizeSlider = document.getElementById('grid-slider');
const sizeLabel = document.querySelector('label[for=size]');
const cancelButton = document.getElementById('clear-grid');
let squares = [];
let drawingEnabled = false;

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
gridContainer.onclick = () => toggleDrawing();

function updateSize(newSize) {
  setCurrentSize(newSize);
  squares = [];
  clearGrid();
  redrawGrid();
}

function updateSizeLabel(newSize) {
  sizeLabel.innerHTML = `${newSize} x ${newSize}`;
}

function redrawGrid() {
  squares = [];
  clearGrid();
  drawGrid();
}

function clearGrid() {
  gridContainer.innerHTML = '';
}

function toggleDrawing() {
  if (!drawingEnabled) {
    squares.forEach (square => {
      square.addEventListener('mouseover', activateDrawing);
    })
    drawingEnabled = true;
  } else {
    squares.forEach (square => {
      square.removeEventListener('mouseover', activateDrawing);
    })
    drawingEnabled = false;
  }
}

function activateDrawing(e) {
  e.target.style = `background-color: ${currentColor};`;
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

      squares.push(gridSquare);
      gridContainer.appendChild(gridSquare);
    }
  }
}

drawGrid();
