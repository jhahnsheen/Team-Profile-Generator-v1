// import Employee class
const Employee = require('./Employee');

// create class Engineer that extends Employee (ie Engineer is an Employee with more specific attributes)
class Engineer extends Employee {
  // constructor to add the attributes office number and imports (super) other attributes from Employee
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // function to get office for template
  getGithub() {
    return this.github;
  }
  // function to get position for template
  getPosition() {
    return 'Engineer';
  }
}

// export Engineer class to be used elsewhere
module.exports = Engineer;