// import required packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// import the Classes
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// import the HTML template
const template = require('../src/template.js');

// create the path to the dist folder to dump the new html page into
const toDist = path.resolve(__dirname, '../dist');
const distRoute = path.join(toDist, 'team.html');

// empty array to hold the new Employees created
const team = [];

// create the Team class from all the other classes using custom class methods
class Team {
  // method to make the Manager
  makeManager() {
    console.log("First, let's make your profile.");
    // inquirer prompt for name, id, email, and office
    inquirer.prompt([
      // name
      {
        type: 'input',
        name: 'name',
        message: 'What is your preferred name?',
      }, 
      // id
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
      }, 
      // email
      {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email address?',
      },
      // office 
      {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
      },
    ]).then((answers) => {
      const manager = new Manager (
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      team.push(manager);
      console.log("Got it! Now let's add your team members.");
      this.makeChoice();
    });
  }
  // method to make an Engineer
  makeEngineer() {
    console.log("Okay, let's add one of your engineers then.");
    // inquirer prompt for name, id, email, and school
    inquirer.prompt([
      // name
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's preferred name?",
      }, 
      // id
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
      }, 
      // email
      {
        type: 'input',
        name: 'email',
        message: 'What is their preferred email address?',
      },
      // office 
      {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?',
      },
    ]).then((answers) => {
      const engineer = new Engineer (
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(engineer);
      console.log(`Okay, ${engineer.name} has been added to your team.`);
      this.makeChoice();
    })
  }
  // method to make an intern
  makeIntern() {
    console.log("Okay, let's add one of your interns then.");
    // inquirer prompt for name, id, email, and school
    inquirer.prompt([
      // name
      {
        type: 'input',
        name: 'name',
        message: "What is your intern's preferred name?",
      }, 
      // id
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
      }, 
      // email
      {
        type: 'input',
        name: 'email',
        message: 'What is their preferred email address?',
      },
      // office 
      {
        type: 'input',
        name: 'school',
        message: 'What school are they currently attending?',
      },
    ]).then((answers) => {
      const intern = new Intern (
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      console.log(`Okay, ${intern.name} has been added to your team.`);
      this.makeChoice();
    })
  }
  //method to create the html
  makeHTML() {
    // if dist doesn't exist, make it
    if(!fs.existsSync(toDist)) {
      fs.mkdirSync(toDist);
    }
    // send team array to template and send it down dist route created
    fs.writeFileSync(distRoute, template(team), 'utf-8');
    // good bye message
    console.log('Okay!');
    console.log('Your team profile has been created!');
    console.log('You can find it in the dist folder.');
    console.log('Good bye!');
  }
  // method to ask if new employee or quit
  makeChoice() {
    // offer choice between engineer, intern, or quit
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Would you like to add an engineer or intern?',
        choices: [
          'Engineer',
          'Intern',
          "I'm done",
          ],
      }
    ]).then((answer) => {
      if (answer.choice === 'Engineer') {
        this.makeEngineer();
      } else if (answer.choice === 'Intern') {
        this.makeIntern();
      } else {
        this.makeHTML();
      }
    });
  }
  // method to build team
  makeTeam() {
    // app initiation message
    console.log('Team Profile Generator v1');
    console.log('Hello Manager!');
    console.log("Let's begin building your team!");
    // make one manager
    this.makeManager();
  }
}

// export the Game class to be used in index.js
module.exports = Team;