const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom)

    this.cooldown = 3000;
    this.attackTarget = null
    this.strength = 10
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // Fill this in
    const exits = Object.values(this.currentRoom.exits);

    const randomKey = Math.floor(Math.random() * exits.length)
    const randomRoom = exits[randomKey];

    this.currentRoom = randomRoom;
    this.cooldown += 3000;

    console.log(`${this.name} is now in ${this.currentRoom.name}`);
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
      const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    if(this.attackTarget === null){
      this.rest()
    }
    else{
      this.cooldown = 0
      this.attackTarget.applyDamage(this.strength)
      this.cooldown += 3000
    }
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }
    // Fill this in
  }

  scratchNose() {
    this.cooldown += 1000;
    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy,
};
