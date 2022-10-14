import { getPattern, setForm, getForm, makeDigiPet } from './src/drawDigipet.js'
import { DIGI_FORM, DELAY_IN_SECONDS } from './const.js'
import { DIGI_PATTERN } from './src/patterns.js'
var index = 0
var eggLove = 0
var babyFilth = 1

const buttonPet = document.querySelector('.button-pet')
const buttonFeed = document.querySelector('.button-feed')
const buttonClean = document.querySelector('.button-clean')

const disableButtons = bool => {
  if (getForm() === DIGI_FORM.EGG) {
    buttonClean.disabled = true
    buttonFeed.disabled = true
    buttonPet.disabled = bool
  } else {
    buttonClean.disabled = bool
    buttonFeed.disabled = bool
    buttonPet.disabled = bool
  }
}

buttonPet.onclick = () => {
  console.log('petDigipet')
  disableButtons(true)

  if (getForm() === DIGI_FORM.EGG) {
    setForm(DIGI_FORM.HAPPY_EGG)
    eggLove++

    if (eggLove >= 3) {
      setTimeout(() => {
        setForm(DIGI_FORM.BABY)
        disableButtons(false)
      }, 5 * 1000)
    } else {
      setTimeout(() => {
        setForm(DIGI_FORM.EGG)
        disableButtons(false)
      }, 5 * 1000)
    }
  } else if (getForm() !== DIGI_FORM.DIRTY_BABY) {
    setForm(DIGI_FORM.HAPPY_BABY)

    setTimeout(() => {
      setForm(DIGI_FORM.BABY)
      disableButtons(false)
    }, 5 * 1000)
  } else {
    disableButtons(false)
  }
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
  } else {
    disableButtons(false)
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

setInterval(() => {
  var digiPattern = getPattern(getForm())
  if (!digiPattern) {
    digiPattern = eggLove >= 3 ? DIGI_PATTERN.BABY : DIGI_PATTERN.EGG
  }

  makeDigiPet(digiPattern[index])
  index++
  // index = index === totalPatterns ? 0 : index+1
  if (index >= digiPattern.length) {
    index = 0
  }
}, DELAY_IN_SECONDS * 60)

export { disableButtons }
