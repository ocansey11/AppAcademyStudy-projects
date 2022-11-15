// const { Manager } = require("./manager")

class Employee{

constructor(name, title, salary, manager ){
    this.name =  name
    this.title = title
    this.salary =  salary
    this.manager = manager

    // if(manager){
    //   this.addToEmployee()
    // }
}

// addToEmployee(){
//     var name = this.name
//     this.manager.addToEmployeeList(name)
// }
}
module.exports = {Employee}
