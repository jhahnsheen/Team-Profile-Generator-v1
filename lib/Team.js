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
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// empty array to hold the new Employees created
const team = [];

// create the Team class from all the other classes
class Team {
  // method to make the Manager
  makeManager() {

  }
  // method to make an Engineer
  makeEngineer() {

  }
  // method to make an intern
  makeIntern() {

  }
  // method to ask if new employee or quit
  makeChoice() {

  }
  //method to create the html
  makeHTML() {
    
  }

  build() {
    // app initiation message
    console.log('Team Profile Generator v1')
    // make one manager

  }

}

// export the Game class to be used in index.js
module.exports = Team;