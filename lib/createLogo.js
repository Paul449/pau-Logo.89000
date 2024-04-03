const circle = require('../lib/classCircle');
const triangle = require('../lib/classTriangle');
const square = require('../lib/classSquare');

const createLogo =  function (answer){
    let shape = undefined;
    if(answer.shape === "circle"){
        shape = new circle(answer.shapeColor,"","");
    } else if(answer.shape === "triangle"){
        shape = new triangle(answer.shapeColor,"","");
    } else if(answer.shape === "square"){
        shape = new square(answer.shapeColor,"","");
    }

    shape.addText(answer.text, answer.textColor);
    return shape.render();
}
 module.exports = createLogo;