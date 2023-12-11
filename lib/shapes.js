// color, text, text color, shape color, shape

// rect, circle, polygon

// rect: x & y is position on screen, width, height

// circle: cx & cy is position on screen, cr is radius; should be r = 100

// font size should be 80px

// polygon: points 

class Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        this.positionX = positionX
        this.positionY = positionY
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Square extends Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        super(positionX, positionY, text, textColor, shapeColor)
        this.width = 200
        this.height = 200
    }

    shapeCreate(){
        return `<rect x="${this.positionX}" y="${this.positionY}" width="${this.radius}" height="${this.height}" fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="50" y="100" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        super(positionX, positionY, text, textColor, shapeColor)
        this.radius = "100"
    }

    shapeCreate(){
        return `<circle cx="${this.positionX}" cy="${this.positionY}" r="${this.radius}" fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="50" y="100" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }
};

class Triangle extends Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        super(positionX, positionY, text, textColor, shapeColor)
        this.points = "150, 18 244, 182 56, 182";
    }

    shapeCreate(){
        return `<points=${this.points} fill="${this.shapeColor}"/>`;
    }

    textCreate(){
        return `<text x="50" y="100" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = {
    Shape, 
    Square,
    Circle,
    Triangle,
}    