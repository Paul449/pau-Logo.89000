const Circle = require('../lib/classCircle');
const { green } = require('color-name');
const { purple } = require('color-name');
describe('circle-test',()=>{
    test('should render circle properly',()=>{
    const shape = new Circle();
    shape.setBackgroundColor("green");
    shape.setInputText('pau');
    shape.setTextColor("purple");
    expect(shape.render().trim().replace(/\s+/g,'')).toEqual(`
     <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="green"/>
        <text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="purple">pau</text>
     </svg>`.trim().replace(/\s+/g,''));
    })
})


