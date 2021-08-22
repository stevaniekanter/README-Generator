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
        message: "Please write a brief desription of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any steps required to install the project",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of the application",
    },
    {
        type: "input",
        name: "license",
        message: "Please select a license type",
        choices: ["MIT", "GPL 2.0", "Apache", "BSD 3", "Other"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any contributors if applicable",
    },
    {
        type: "input",
        name: "tests",
        message: "Would you like to to run a tests for your project?",
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please input your github username',
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide your e-mail address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function (error) {
        if (error) {
            console.log(error);
        }
        console.log("File has been created");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
        writeToFile("README.md", generateMarkdown({ ...answer }));
    });
}

// Function call to initialize app
init();
