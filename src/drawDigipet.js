import { DIGI_PATTERN } from './patterns.js'
import { DIGI_FORM } from '../const.js'

const pixelCanvas = document.querySelector('.pixel-canvas')
// var form = DIGI_FORM.EGG // make into const
var form = DIGI_FORM.EGG
function makeDigiPet(digiPattern) {
  let gridHeight = 15
  let gridWidth = 20
  // If grid already present, clears any cells that have been filled in
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild)
  }
  // Creates rows and cells
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr')
    pixelCanvas.appendChild(gridRow)
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td')
      if (digiPattern[i] && digiPattern[i].find(x => x == j)) {
        gridCell.style.backgroundColor = 'black'
      }
      gridRow.appendChild(gridCell)
    }
  }
}

const setForm = newForm => {
  form = newForm
  return
}
const getForm = () => form || DIGI_FORM.BABY

const getPattern = form => {
  if (form == DIGI_FORM.EGG) {
    return DIGI_PATTERN.EGG
  }
  if (form == DIGI_FORM.HAPPY_EGG) {
    return DIGI_PATTERN.HAPPY_EGG
  }
  if (form === DIGI_FORM.BABY) {
    return DIGI_PATTERN.BABY
  }

  if (form == DIGI_FORM.DIRTY_BABY) {
    return DIGI_PATTERN.DIRTY_BABY
  }
  if (form === DIGI_FORM.FED_BABY) {
    return DIGI_PATTERN.FED_BABY
  }
  if (form == DIGI_FORM.HAPPY_BABY) {
    return DIGI_PATTERN.HAPPY_BABY
  }
}

export { getPattern, setForm, getForm, makeDigiPet }
