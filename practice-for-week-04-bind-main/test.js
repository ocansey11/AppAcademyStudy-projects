// Your code here
const Employee = require('./employee')

let employee =  new Employee('John Wick', 'Dog Lover')


// setTimeout(employee.sayName, 2000)
//  I expect this code to return undefined says hello, because setTimeout is a global function and hence the 'this.name' keyword in employee.sayName() will be taken out of context lol

let sayNameFunc =  employee.sayName.bind(employee)
setTimeout(sayNameFunc, 2000)

// setTimeout(employee.sayOccuation, 3000)

// I expect the same thing that happened to the code on line 7 to happen here. since setTimeout is a global function 'this.name' and 'this.occupation' will be out of context. Hence 'undefined is a undefined' will be logged out

let sayOccupationFunc =  employee.sayOccupation.bind(employee)
setTimeout(sayOccupationFunc, 3000)
