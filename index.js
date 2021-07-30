// npm pkgs
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Sent to output folder
const outputPath = path.resolve(__dirname, 'output', 'team.html');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const mainHTML = require('./templates/mainHTML');

const managerCard = require('./templates/managerhtml');
const internCard = require('./templates/internhtml');
const engineerCard = require('./templates/engineerhtml');

const teamArray = [];


const promptUser = () => {
    console.log('Build your team! Choose a role to add a new member. When finished, choose SUBMIT to see your progress.');
    inquirer.prompt([
        {
            type: "rawlist",
            name: "role",
            message: "Choose action:",
            choices: ["Add an Employee", "Add an Engineer", "Add an Intern", "Add a Manager", "SUBMIT/Update Team"]
        },
    ])

};

const employeePrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter employee's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter employee's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter employee's email:"
        }
    ])
};

const managerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter manager's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter manager's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter manager's email:"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter manager's office number:"
        }

    ])
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter engineer's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter engineer's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter engineer's email:"
        },
        {
            name: "github",
            type: "input",
            message: "Enter engineer's GitHub username:",
        }
    ])
};

const internPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter intern's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter intern's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter intern's email:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school:",
        }
    
    ])
};

