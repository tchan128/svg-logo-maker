const inquirer = require("inquirer");

const fs = require("fs");

const shape = require("./lib/shapes.js");

function createShape(fileName, shape, text) {
    const svg = 
    `<svg width="300" height="300">
        ${shape}
        ${text}
    </svg>`

    fs.writeFile(fileName, svg, (error) =>
    error ? console.error(error) : console.log(shape))
}

inquirer
    .prompt ([
        {
            type: "input",
            message: "What letters would you like to display on the logo? Note you have up to 3 letters.",
            name: "text",
        },
        {
            type: "input",
            message: "What would you like the text color to be? Please enter a color keyword or a hexadecimal number.",
            name: "textColor",
        },
        {
            type: "checkbox",
            choices: ["Triangle", "Circle", "Square"],
            message: "What would you like the shape of the logo be?",
            name: "shape",
        },
        {
            type: "input",
            message: "What would you like the shape color to be? Please enter a color keyword or a hexadecimal number.",
            name: "shapeColor",
        },
    ])
    .then((responses) => {
        fs.writeFile("shape-information.txt", JSON.stringify(responses), (error) =>
        error ? console.error(error) : console.log(responses))
    })
    .then(() => {
        fs.readFile('shape-information.txt', function read(err, data) {
            if (err) {
                throw err;
            }
            const shapeInfo = JSON.parse(data);
        
            if (shapeInfo.shape[0] === "Circle") {
                const circle = new shape.Circle(100, 100, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
                const shapeSVG = circle.shapeCreate();
                const shapeText = circle.textCreate();
                createShape("shape.html", shapeSVG, shapeText);
            } else if (shapeInfo.shape[0] === "Square") {
                const square = new shape.Square(0, 0, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
                const shapeSVG = square.shapeCreate();
                const shapeText = square.textCreate();
                createShape("shape.html", shapeSVG, shapeText);
            } else if (shapeInfo.shape[0] === "Triangle") {
                const triangle = new shape.Triangle(0, 0, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
                const shapeSVG = triangle.shapeCreate();
                const shapeText = triangle.textCreate();
                createShape("shape.html", shapeSVG, shapeText);
            }
        });
    });

