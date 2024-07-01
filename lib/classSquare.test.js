const Square = require('./classSquare');
// testing square functionality
const {red} = require('color-name');
const {blue} = require('color-name');
describe('square-class',()=>{
    test('should render square properly',()=>{
    const shape = new Square();
    shape.setBackgroundColor("red");
    shape.setInputText('svg');
    shape.setTextColor("blue");
    expect(shape.render().trim().replace(/\s+/g,'')).toEqual(`
        <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="red"/>
            <text x="50%" y="50%" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="blue">svg</text>
        </svg>`.trim().replace(/\s+/g,''));
    })
})

