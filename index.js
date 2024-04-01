const { name } = require('ci-info');
const {readFile, writeFile} = require('fs/promises');
const inquirer = require('inquirer');
const shape = require('./lib/shape');
const { data } = require('browserslist');
const { choices } = require('yargs');

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/
const questions = [

    {
        type:'input',
        name:'name',
        message:'What name would you like for your logo (up to three characters):'
    },
    {
        type:'input',
        name:'text-color',
        message: 'What color would you like for your logo name?:'
    },
    {
        type:'list',
        name:'shape',
        choices:["circle","triangle","square"],
        message: 'What shape would you like for your logo?(only circle, triangle, and square):',
        
    }       
]

inquirer.prompt(questions)
.then(answer =>{
    console.log(answer)
})



