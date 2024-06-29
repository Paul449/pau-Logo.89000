const shape = require('../lib/shape');
class triangle extends shape{
    render(){
     return`
     <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
     <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor}">
     <text x="50%" y="50%" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
     </polygon>
     </svg>`
    }
    addText(text,textColor){
        this.text = text;
        this.textColor = textColor;
    }
}

module.exports = triangle;