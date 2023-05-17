//Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")


//Function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Please describe your project?"
        },
        {
            type: "input",
            name: "projectInstallation",
            message: "What command should be run to install dependencies?",
            default:"npm i"
        },
        {
            type: "input",
            name: "projectUsage",
            message: "What does the user need to know about using this repository?",
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: "input",
            name: "projectContributing",
            message: "What does the user need to know about contributing to this repository?",
        },
        {
            type: "input",
            name: "projectTests",
            message: "What is the test command?",
            default: "npm run test",
        },
        {
            type: "input",
            name: "projectUsername",
            message: "Please insert your GitHub username",
        },
        {
            type: "input",
            name: "projectEmail",
            message: "Please insert your email address",
        },

    ]).then(function(results){
        fs.writeFileSync("./results/README.md", generateMarkdown(results))
    })
}


init();
