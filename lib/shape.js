class triangle {
    constructor(){
        this.height = height,
        this.width = width,
        this.points = points
        this.shapeColor = shapeColor
}
    generateTriangle(){ // protoype or inheritance added for this constructor
   return `
   <!DOCTYPE html>
   <html>
   <body>
   <svg height="${this.height}"width="${this.width}">
    <polygon points="${this.points}" style=""/>
   </svg>
   </body>
   </html>`;
}
}

class circle {
    constructor(){
        this.radius = radius,
        this.cx=cx,
        this.cy=cy
}
   generateCircle(){

    return`
    <!DOCTYPE html>
    <html>
    <body>
    <svg height="" width="" >
        <circle r="${this.radius}" cx="${this.cx}" cy="${this.cy}" fill="function" />
    </svg>
    </body>
    </html>
    `
   }

}

class square {

    constructor(){

        this.width = width,
        this.height = height,
        this.x = x,
        this.y = y,
        this.rx = rx,
        this.ry = ry
}
    generateSquare(){

    return`
    <!DOCTYPE html>
    <html>
    <body>
    <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
      <rect width="${this.width}" height="${this.height}" x="${this.x}" y="${this.y}" rx="${this.rx}" ry="${this.ry}" fill="function" /> 
    </svg>
    </body>
    </html>
            `
    }
    
}

