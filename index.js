// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generate = require("./utils/generateMarkdown");

/*
what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions
title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
*/
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        name: "title",
        message: "project title? "
    },
    {
        name: "description",
        message: "description of the app: "
    },
    {
        name: "tableOfContents",
        message: "input Table of Contents: "
    },
    {
        name: "installation",
        message: "install info: "
    },
    {
        name: "usage",
        message: "Enter use of your application: "
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your application: ",
        choices: ["Apache", "MIT", "GNU"]
    },
    {
        name: "contribution",
        message: "enter contribution info: "
    },
    {
        name: "test",
        message: "put test info here:"
    },
    {
        name: "userQuestions",
        message: "User Questions/info:  "
    },

]).then(questions => {
    const content = generate(questions);

    writeToFile("README.md", content); 
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!!!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
