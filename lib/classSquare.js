const shape = require('../lib/shape');
class square extends shape{
     render(){
     return`
     <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}">
     <text x="0" y="10" font-family="Verdana" font-size="55" fill="${this.textColor}">${this.text}</text>
     </rect>
     </svg>`
    }
  }

  module.exports = square;