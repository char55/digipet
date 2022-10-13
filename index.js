import { getPattern, setForm, getForm, makeDigiPet } from './src/drawDigipet.js'
import { DIGI_FORM, DELAY_IN_SECONDS } from './const.js'
var index = 0
var eggLove = 4
var babyFilth = 3

const buttonPet = document.querySelector('.button-pet')
const buttonFeed = document.querySelector('.button-feed')
const buttonClean = document.querySelector('.button-clean')

const disableButtons = bool => {
  buttonClean.disabled = bool
  buttonFeed.disabled = bool
  buttonPet.disabled = bool
}

buttonPet.onclick = () => {
  console.log('petDigipet')
  disableButtons(true)
  if (getForm() !== DIGI_FORM.DIRTY_BABY) {
    setForm(DIGI_FORM.HAPPY_BABY)

    setTimeout(() => {
      setForm(DIGI_FORM.BABY)
      disableButtons(false)
    }, 5 * 1000)
  }
  disableButtons(false)
}

buttonClean.onclick = () => {
  console.log('clean')
  disableButtons(true)
  if (getForm() === DIGI_FORM.DIRTY_BABY) {
    setForm(DIGI_FORM.HAPPY_BABY)

    setTimeout(() => {
      setForm(DIGI_FORM.BABY)
      disableButtons(false)
    }, 5 * 1000)
  }
}

buttonFeed.onclick = () => {
  console.log('feed')
  disableButtons(true)
  babyFilth++
  setForm(DIGI_FORM.FED_BABY)

  if (babyFilth > 3) {
    setTimeout(() => {
      setForm(DIGI_FORM.DIRTY_BABY)
      disableButtons(false)
    }, 5 * 1000)
  } else {
    setTimeout(() => {
      setForm(DIGI_FORM.HAPPY_BABY)
      setTimeout(() => {
        setForm(DIGI_FORM.BABY)
        disableButtons(false)
      }, 5 * 1000)
    }, 5 * 1000)
  }
}

document.body.onclick = function () {
  var form = getForm()
  if (form === DIGI_FORM.EGG && eggLove < 5) {
    eggLove++
    disableButtons(true)
  } else if (form === DIGI_FORM.EGG && eggLove >= 5) {
    // hatch!
    setForm(DIGI_FORM.BABY)
    disableButtons(false)
  }
  // add heart motif
}

setInterval(() => {
  const digiPattern = getPattern()
  makeDigiPet(digiPattern[index])
  index++
  // index = index === totalPatterns ? 0 : index+1
  if (index >= digiPattern.length) {
    index = 0
  }
}, DELAY_IN_SECONDS * 60)
