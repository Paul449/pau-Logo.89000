class shape{
    constructor(shapeColor,text,textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    setBackgroundColor(shapeColor){
        this.shapeColor = shapeColor;
    }
    setInputText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}

module.exports = shape;







