// import Employee class
const Employee = require('./Employee');

// create class Intern that extends Employee (ie Intern is an Employee with more specific attributes)
class Intern extends Employee {
  // constructor to add the attributes office number and imports (super) other attributes from Employee
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // function to get office for template
  getSchool() {
    return this.school;
  }
  // function to get position for template
  getPosition() {
    return 'Intern';
  }
}

// export Intern class to be used elsewhere
module.exports = Intern;