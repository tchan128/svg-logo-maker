// color, text, text color, shape color, shape

// rect, circle, polygon

// rect: x & y is position on screen, width, height

// circle: cx & cy is position on screen, cr is radius; should be r = 100

// font size should be 80px

// polygon: points 

const fs = require("fs");

const xPosition = "100";
const yPosition = "100";

function createShape(fileName, shape, text) {
    const svg = 
    `<svg width="300" height="300">
        ${shape}
        ${text}
    </svg>`

    fs.writeFile(fileName, svg, (error) =>
    error ? console.error(error) : console.log(shape))
}

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
        shapeCreate = function () {
            return `<rect x=${positionX} y=${positionY}>`
        }
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
        this.points = points
    }
}

fs.readFile('../shape-information.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    const shapeInfo = JSON.parse(data);

    if (shapeInfo.shape[0] === "Circle") {
        const circle = new Circle(xPosition, yPosition, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
        const shapeSVG = circle.shapeCreate();
        console.log(shapeSVG);
        const shapeText = circle.textCreate();
        console.log(shapeText);
        
        createShape("shape.html", shapeSVG, shapeText);
    } 
});