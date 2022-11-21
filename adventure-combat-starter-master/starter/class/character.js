class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name
    this.description = description
    this.currentRoom = currentRoom

    this.items = []
    this.health = 100
    this.strength = 10
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount

    if(this.health <= 0){
      this.die()
    }
  }

  die() {
    // Fill this in
    let items = this.items
    let roomItems = this.currentRoom.items

    for(let i = 0; i< items.length; i++){
      let item = items[i]
      roomItems.push(item)
    }
    this.currentRoom = null
  }
}

module.exports = {
  Character,
};
