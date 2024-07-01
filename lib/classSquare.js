const shape = require('../lib/shape');
class Square extends shape{
     render(){
     return`
     <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}"/>
     <text x="50%" y="50%" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
     </svg>`
    }
  }

  module.exports = Square;