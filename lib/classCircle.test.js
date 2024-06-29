const { default: expect } = require('expect');
const circle = require('../lib/classCircle');
const { blue } = require('color-name');

const shape = new circle();
shape.setbackgroundColor("blue");
expect(shape.render()).toEqual('<circle r="45" cx="50" cy="50" fill="blue" />');