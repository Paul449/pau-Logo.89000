const shape = require('../lib/shape');
class circle extends shape{

    render(){
     return`
     <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
     <circle r="45" cx="50" cy="50" fill="${this.shapeColor}">
     <text x="0" y="10" font-family="Verdana" font-size="55" fill="${this.textColor}">${this.text}</text>
     </circle>
     </svg>`
    }
}
module.exports = circle;