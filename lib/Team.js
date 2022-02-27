// import required packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// import the Classes
const Manager = require('/Manager');
const Engineer = require('/Engineer');
const Intern = require('/Intern');

// import the HTML template
const template = require('../src/template');

// create the path to the dist folder to dump the new html page into
const toDist = path.resolve(__dirname, 'dist');
const distRoute = path.join(toDist, 'team.html');

// empty array to hold the new Employees created
const team = [];

// create the Team class from all the other classes using custom class methods
class Team {
  // method to make the Manager
  makeManager() {
    console.log("First, let's make your profile.");
    console.log("What's your name?");
    // inquirer prompt for name
    inquirer.prompt([
      {}, {}, {}, 
    ])
  }
  // method to make an Engineer
  makeEngineer() {

  }
  // method to make an intern
  makeIntern() {

  }
  //method to create the html
  makeHTML() {
    // if dist doesn't exist, make it
    if(!fs.existsSync(toDist)) {
      fs.mkdirSync(toDist);
    }
    // send team array to template and send it down dist route created
    fs.writeFileSync(distRoute, render(team), 'utf-8');
  }
  // method to ask if new employee or quit
  makeChoice() {
    // offer choice between engineer, intern, or quit
    console.log('');

  }
  // method to build team
  makeTeam() {
    // app initiation message
    console.log('Team Profile Generator v1');
    console.log('Hello Manager!');
    console.log("Let's begin building your team!");
    // make one manager
    this.makeManager();
    // prompt to make either engineer or employee or quit
    this.makeChoice();
  }

}

// export the Game class to be used in index.js
module.exports = Team;