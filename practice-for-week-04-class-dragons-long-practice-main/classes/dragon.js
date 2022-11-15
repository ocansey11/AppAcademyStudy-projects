// Your code here
class Dragon {
  constructor(name,color){
    this.name = name
    this.color = color
  }

breathesFire(){
  var name = this.name
 return `${name} breathes fire everywhere! BURN!!!!`
 }


static getDragons(...arr){
  let newArr = []
    for(let i = 0; i < arr.length; i++ ){
      let dragon = arr[i]
      if(dragon instanceof Dragon){
        newArr.push(dragon.name)
      }
    }
    return newArr
  }
}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
