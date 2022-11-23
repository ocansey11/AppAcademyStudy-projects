function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // undefined eats food?


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // i expected this to throw an error. i was a bit stunned when i actually run it, but i now understand now. The code declares a new method (eat) in the nemo object with 'nemo.eat' which is eaqual to the global eat function


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // undefined eats fished food, because eat() is a stand alone function


/********************************* Scenario 4 *********************************/
// nemo.swim(); // Nemo swimming in the Water.


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // an error will be thrown because we instantiated the swim method into const swim. however when we invoke the new function the this keyword being called is now out of context
