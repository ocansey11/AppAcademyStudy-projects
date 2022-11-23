const { Item } = require("./item");

class Armour extends Item{
    constructor(name, description){
        super(name, description)

        this.price = 10

        //  later we can create different type of armours that extend the armour parent class
    }
}
module.exports = {
Armour,
}
