// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief desription of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide any steps required to install the application",
    },
    {
        type: "input",
        name: "usage",
        message:
            "List any examples and instructions for use of the application",
    },
    {
        type: "input",
        name: "license",
        message: "Please select a license type",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributors you'd like to add",
    },
    {
        type: "input",
        name: "tests",
        message: "Would you like to to run any tests for your project?",
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: "input",
        name: "questions",
        message: "Provide your e-mail address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile("README.md", generateMarkdown({ ...data }));
    });
}

// Function call to initialize app
init();
