const Triangle = require('./classTriangle');
const { yellow } = require('color-name');
const { blue } = require('color-name');
//Testing Triangle functionality
describe('triangle-testing',()=>{
    test('triangle should render properly',()=>{
        const shape = new Triangle();
        shape.setBackgroundColor("yellow");
        shape.setInputText('dom');
        shape.setTextColor("blue");
        expect(shape.render().trim().replace(/\s+/g,'')).toEqual(`
        <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" fill="yellow"/>
            <text x="50%" y="50%" font-size="20" text-anchor="middle" dominant-baseline="middle" style=fill:"blue">dom</text>
        </svg>`.trim().replace(/\s+/g,''))
    })
})
