const Employee  = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title,  manager) {
        super(name,salary, title, manager)
        this.employees = []

    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    calculateBonus(num){
        return ( this.salary + this._totalSubSalary()) * num
    }

    _totalSubSalary() {
        let sum = 0;
        for (const emp of this.employees) {
          if (emp instanceof Manager) {

            sum += emp._totalSubSalary() + emp.salary;
          } else if(emp instanceof Employee) {
            sum += emp.salary;
          }
        }
        return sum;
      }
}

module.exports  =  Manager
