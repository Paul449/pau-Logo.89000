
const inquirer = require('inquirer');
const path = require('path');
const createLogo = require('./lib/createLogo');
const fs = require('fs');
const { data } = require('browserslist');
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
        name:'text',
        message:'What name would you like for your logo (up to three characters):'
    },
    {
        type:'input',
        name:'textColor',
        message: 'What color would you like for your logo name?:'
    },
    {

        type:'input',
        name:'shapeColor',
        message: 'What background-color would you like for your logo?'
    },   
    {
        type:'list',
        name:'shape',
        choices:["circle","triangle","square"],
        message: 'What shape would you like for your logo?(only circle, triangle, and square):'
        
    }  
]
  
 function writingFile(filename,answer){
    let data = createLogo(answer)
   return fs.writeFileSync(path.join(process.cwd(),filename),data);
 }
// function which will generate the logo using the inquirer prompt with
 const GenerateFile = function(){
  inquirer.prompt(questions)
  .then((answer) =>{
    return writingFile('./generateLogo.svg',answer)
  }).catch((error)=>{
   console.error('An error has occured:', error);
  })
 }
 GenerateFile();
  