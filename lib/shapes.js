// color, text, text color, shape color, shape

// rect, circle, polygon

// rect: x & y is position on screen, width, height

// circle: cx & cy is position on screen, cr is radius; should be r = 100

// font size should be 80px

// polygon: points 

const xPosition = 100;
const yPosition = 100;

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
        this.width = width
        this.height = height
    }
}

class Circle extends Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        super(positionX, positionY, text, textColor, shapeColor)
        this.radius = radius
     }
}

class Triangle extends Shape {
    constructor(positionX, positionY, text, textColor, shapeColor) {
        super(positionX, positionY, text, textColor, shapeColor)
        this.points = points
    }
}