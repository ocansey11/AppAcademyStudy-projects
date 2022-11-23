const Calculator = require("./02-calculator");

// Your code here
class FancyCalculator extends Calculator{
	constructor(){
		super()
		this.total = 0
		console.log(this.total)
	}

	setTotal = (newTotal)=>{
		return this.total = newTotal

	}

	modulo = (num)=>{
		let newTotal = this.total % num
		return this.setTotal(newTotal)
	}

	squared = ()=>{
		let newTotal = this.total ** 2
		return this.setTotal(newTotal)
	}
}

// Testing with Node.js
let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
