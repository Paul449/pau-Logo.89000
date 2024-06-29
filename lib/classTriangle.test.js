const triangle = require('./classTriangle');
const {classTriangle} = require('./classTriangle');
const {blue} = require('color-name');
//Testing Triangle functionality
const shape = new triangle();
shape.setbackgroundColor("green");
expect(shape.render()).toEqual('<polygon points="100,10 150,190 50,190" style="fill:green">')
