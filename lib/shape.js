const { lime, purple } = require("color-name");

class triangle {
    constructor(){
        this.height = height;
        this.width = width;
        this.points = points;
        this.shapeColor = shapeColor
}
    generateTriangle(){ // protoype or inheritance added for this constructor
   return `
   <!DOCTYPE html>
   <html>
   <body>
   <svg height="${this.height}"width="${this.width}">
    <polygon points="${this.points}" style="fill:${this.shapeColor}"/>
   </svg>
   </body>
   </html>`;
}
}
/*const triLogo = new triangle(100,100,"0,0 100,0 50,50", "red");
console.log(triLogo.generateTriangle());
*/
class circle {
    constructor(){
        this.shape = shape;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.cx=cx;
        this.cy=cy;
        this.shapeColor = shapeColor;
}
   generateCircle(){

    return`
    <!DOCTYPE html>
    <html>
    <body>
    <svg height="${this.height}" width="${this.width}" >
        <${this.shape} r="${this.radius}" cx="${this.cx}" cy="${this.cy}" style="fill:${this.shapeColor}" />
    </svg>
    </body>
    </html>
    `
   }

}

class square {

    constructor(){
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.width2 = width2;
        this.height2 = height2;
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.shapeColor = shapeColor;
}
    generateSquare(){

    return`
    <!DOCTYPE html>
    <html>
    <body>
    <svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
      <${this.shape} width="${this.width2}" height="${this.height2}" x="${this.x}" y="${this.y}" rx="${this.rx}" ry="${this.ry}" style="fill:${this.shapeColor}"/> 
    </svg>
    </body>
    </html>
            `
    }
    
}

module.exports = {triangle,circle,square};