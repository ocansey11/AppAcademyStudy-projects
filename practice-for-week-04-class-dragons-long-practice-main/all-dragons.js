// Your code here

const FriendlyDragon = require('./classes/friendly-dragon')
const EvilDragon = require('./classes/evil-dragon')
const { getDragons } = require('./classes/dragon')


const falkor = new FriendlyDragon
(
    'Falkor',
    'white',
    [
      "save Atreyu from the swamp",
      "save Atreyu from the Nothing",
      "scare the local bullies into a dumpster",
    ],
    'Bastian'
)

const smaug = new EvilDragon
(
    'Smaug',
    'black',
    ['take over your mountain kingdom','steal all your dwarven gold','burn down your floating village'],
    'Dwarf King'


)

var allDragons = getDragons(falkor, smaug)

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/


module.exports = { allDragons }
try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
