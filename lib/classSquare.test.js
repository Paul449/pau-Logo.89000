const square = require('./classSquare');
const {classSquare} = require('./classSquare');
const {red} = require('color-name');
// testing square functionality
const shape = new square();
shape.setbackgroundColor("red");
expect(shape.render()).toEqual('<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="red"/>')