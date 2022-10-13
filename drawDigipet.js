// import { EGG_PATTERN, BABY_PATTERN } from './patterns';
const baby = [
  [],
  [],
  [],
  [],
  [],
  [2, 10],
  [2, 3, 9, 10],
  [2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 3, 10, 11],
  [2, 6, 8, 11],
  [2, 6, 8, 11],
  [2, 4, 11],
  [2, 5, 6, 11],
  [2, 3, 10, 11],
  [3, 4, 5, 6, 7, 8, 9, 10],
];

const baby2 = [
  [],
  [],
  [],
  [],
  [],
  [4, 11],
  [3, 4, 10, 11],
  [3, 4, 5, 6, 7, 8, 9, 10, 11],
  [2, 3, 10, 11],
  [2, 5, 7, 11],
  [2, 5, 7, 11],
  [2, 11],
  [2, 5, 6, 11],
  [2, 3, 10, 11],
  [3, 4, 5, 6, 7, 8, 9, 10],
];

const egg = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [3, 4, 5, 6, 7],
  [2, 3, 7, 8],
  [2, 8, 5],
  [2, 8],
  [2, 8, 6],
  [2, 8],
  [2, 3, 7, 8],
  [3, 4, 5, 6, 7],
];

const eggSquish = [
  [],
  [],
  [],
  [],
  [],
  [9],
  [],
  [10],
  [3, 4, 5, 6, 7],
  [2, 3, 7, 8],
  [2, 8, 5],
  [2, 8, 6],
  [2, 8],
  [2, 3, 7, 8],
  [3, 4, 5, 6, 7],
];

const EGG_PATTERN = [egg, eggSquish];
const BABY_PATTERN = [baby, baby2];

const pixelCanvas = document.querySelector('.pixel-canvas');
var form = 'egg'; // make into const
var eggLove = 0;
var index = 0;
var delayInSeconds = 5;

function makeDigiPet(digiPattern) {
  let gridHeight = 15;
  let gridWidth = 20;
  // If grid already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      if (digiPattern[i] && digiPattern[i].find((x) => x == j)) {
        // console.log(i, j);
        gridCell.style.backgroundColor = 'black';
      }
      gridRow.appendChild(gridCell);
    }
  }
}

const getPattern = () => {
  if (form == 'egg') {
    return EGG_PATTERN;
  }
  if (form === 'baby') {
    return BABY_PATTERN;
  }
};

document.body.onclick = function () {
  if (form === 'egg' && eggLove < 5) {
    eggLove++;
  } else if (form === 'egg' && eggLove >= 5) {
    // hatch!
    form = 'baby';
  }
  // add heart motif
};

setInterval(() => {
  const digiPattern = getPattern();

  makeDigiPet(digiPattern[index]);
  index++;
  // index = index === totalPatterns ? 0 : index+1
  if (index >= digiPattern.length) {
    index = 0;
  }
}, delayInSeconds * 60);
