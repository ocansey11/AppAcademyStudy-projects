// Your code here
const Dragon = require('./dragon')

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend ){
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend
    }
    hasLifeGoals(){
        let lifeGoals = this.lifeGoals
        for(let i = 0; i < lifeGoals.length; i++){
            let goal = lifeGoals[i]
          console.log( `${this.name} likes to ${goal}`)
        }
    }

    helpsPeople(){
        return(`${this.name} helps their friend ${this.friend}`)
    }
}


module.exports =  FriendlyDragon
