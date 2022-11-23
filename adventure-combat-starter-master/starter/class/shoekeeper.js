const { Character } = require("./character")

class Shoekeeper extends Character {
    constructor(name, description, currentRoom){
        super
        this.name = name
        this.description = description

        this.items = []
    }

    // The shoe keeper should be at specific rooms only
    // The characters now can be able to buy things from him or her
}
module.exports =
{
    Shoekeeper,
}
