// import Employee class
const Employee = require('./Employee');

// create class Manager that extends Employee (ie Manager is an Employee with more specific attributes)
class Manager extends Employee {
  // constructor to add the attributes office number and imports (super) other attributes from Employee
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  // function to get office for template
  getOffice() {
    return this.office;
  }
  // function to get position for template
  getPosition() {
    return 'Manager';
  }
}

// export Manager class to be used elsewhere
module.exports = Manager;