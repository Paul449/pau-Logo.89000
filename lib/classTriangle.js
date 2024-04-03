const shape = require('../lib/shape');
class triangle extends shape{

    render(){
     return`
     <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
     <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor}">
     <text x="0" y="10" font-family="Verdana" font-size="55" fill="${this.textColor}">${this.text}</text>
     </polygon>
     </svg>`
    }
}

module.exports = triangle;