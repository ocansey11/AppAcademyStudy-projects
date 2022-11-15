// Your code here
const Dragon = require('./dragon')

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis){
        super(name, color)
        this.evilDoings = evilDoings
        this.nemesis = nemesis
    }

    dontInviteThemOverForDinner(){
        let evilDoings = this.evilDoings
        for(let i = 0; i < evilDoings.length; i++){
            let evil = evilDoings[i]
            console.log( `${this.name} will ${evil}`)
        }
    }


    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}




module.exports = EvilDragon
