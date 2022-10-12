var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

class Pet {
  constructor() {
    this.happy = 0;
    this.hunger = 2;

    this.livePet()
  }

  gotAttention() {
    this.happy++;
  }
  getFed() {
    this.happy++;
    this.hunger++;
  }
  isHungry() {
    return this.hunger < 5;
  }

  livePet( ) {

  }
}

const pet = new Pet()
// new egg has hatched
// main game play would take in user input
// idle for some time but also reacting without prompt
