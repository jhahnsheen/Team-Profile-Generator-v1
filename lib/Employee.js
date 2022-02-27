// create the Employee class
class Employee {
  // build the constructor that holds the Class attributes
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //function to get name for template
  getName() {
    return this.name;
  }
  // function to get id for template
  getId() {
    return this.id;
  }
  // function to get email for template
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

// export Employee class to be used by other files
module.exports = Employee;