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

// 