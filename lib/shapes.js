// color, text, text color, shape color, shape
// rect, circle, polygon
// rect: x & y is position on screen, width, height
// circle: cx & cy is position on screen, cr is radius; should be r = 100
// font size should be 80px
// polygon: points 

// Generates text placements & size depending on number of letters

function sizeGenerator(length, shape){
    if (shape === "triangle") {
        if ((length === 3)) {
            return "100";
        } else if (length === 2) {
            return "115";
        } else if (length === 1) {
            return "130";
        }
    } else {
        if (length === 3) {
            return "25";
        } else if (length === 2) {
            return "45";
        } else if (length === 1) {
            return "75";
        }
    }
}

// General Shape Class 

class Shape {
    constructor(text, textColor) {
        this.text = text
        this.textColor = textColor
    }
    
    setColor(shapeColor){
        this.shapeColor = shapeColor
    }
}

// General Square Class 

class Square extends Shape {
    constructor(text, textColor) {
        super(text, textColor)
        this.positionX = 0
        this.positionY = 0
        this.width = 200
        this.height = 200
    }

    render(){
        return `<rect x="${this.positionX}" y="${this.positionY}" width="${this.width}" height="${this.height}" fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="${sizeGenerator(this.text.length, "square")}" y="120" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }
}

// General Circle Class 

class Circle extends Shape {
    constructor(text, textColor) {
        super(text, textColor)
        this.positionX = 100
        this.positionY = 100
        this.radius = 100
    }

    render(){
        return `<circle cx="${this.positionX}" cy="${this.positionY}" r="${this.radius}" fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="${sizeGenerator(this.text.length, "circle")}" y="125" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }
};

// General Triangle Class 

class Triangle extends Shape {
    constructor(text, textColor) {
        super(text, textColor)
        this.points = "150, 18 244, 182 56, 182";
    }

    render(){
        return `<polygon points="${this.points}" fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="${sizeGenerator(this.text.length, "triangle")}" y="150" font-size="55px" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Module that needs to be exported

module.exports = {
    Shape, 
    Square,
    Circle,
    Triangle,
    sizeGenerator,
}    