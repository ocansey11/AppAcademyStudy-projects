const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const { World } =  require('./world')

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = []
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let playerItems = this.items
    let roomItems = this.currentRoom.items

    for(let i = 0; i < roomItems.length; i++){
        let item = roomItems[i]
        if(item.name === itemName){
            playerItems.push(item);
            roomItems.splice(i,1);
        }
    }
}

dropItem(itemName) {

    let playerItems = this.items
    let roomItems = this.currentRoom.items


    for(let i = 0; i < playerItems.length; i++){
        let item = playerItems[i]
        if(item.name === itemName){
            playerItems.splice(i,1);
            roomItems.push(item)
        }
    }
}

eatItem(itemName) {
    let playerItems = this.items

    for(let i = 0; i < playerItems.length; i++){
        let item = playerItems[i]
        if(item instanceof Food){
            if (item.name === itemName){
                playerItems.splice(i,1);
                console.log(playerItems)
            }
        }
        else {
            return
        }
    }
}

getItemByName(name) {
    for(let i = 0; i < this.items.length; i++){
        let item = this.items[i]
        if(item.name === name){
            return item
        }
    }
}

  hit(name) {
    // Fill this in
    let enemy = this.currentRoom.getEnemyByName(name)
    console.log(enemy)
    enemy.setPlayer(this)

    enemy.attackTarget = this
    enemy.applyDamage(this.strength)
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
