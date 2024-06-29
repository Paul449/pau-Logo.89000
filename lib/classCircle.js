const shape = require('../lib/shape');
class circle extends shape{

    render(){
     return`
     <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
     <circle r="45" cx="50" cy="50" fill="${this.shapeColor}">
     <text x="50%" y="50%" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
     </circle>
     </svg>`
    }

    addText(text,textColor){
        this.text = text;
        this.textColor = textColor;
    }
}
module.exports = circle;