class Pet {
  constructor() {
    this.age = 0;
    this.happy = 0;
    this.hunger = 2;
    this.training = 0;
    this.health = 0;
    this.toilet = 1;
  }

  gotAttention() {
    this.happy++;
  }
  getFed() {
    this.happy++;
    this.hunger++;
    this.toilet++;
  }
  isHungry() {
    return this.hunger < 5;
  }
}

// new egg has hatched
// main game play would take in user input
// idle for some time but also reacting without prompt
