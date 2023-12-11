// Importing libraries that are needed
const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./lib/shapes.js");

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxLength-input', MaxLengthInputPrompt);



// Helper function to create logo

function createShape(fileName, shape, text) {
    const svg = 
    `<svg width="300" height="300">
        ${shape}
        ${text}
    </svg>`

    fs.writeFile(fileName, svg, (error) =>
    error ? console.error(error) : console.log(shape))
}

// Prompting for user input

inquirer
    .prompt ([
        {
            type: "maxLength-input",
            message: "What letters would you like to display on the logo? Note you have up to 3 letters.",
            name: "text",
            maxLength: 3,
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
    // Generating the SVG
    .then((responses) => {
        const shapeInfo = responses;
    
        if (shapeInfo.shape[0] === "Circle") {
            const circle = new shape.Circle(100, 100, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
            const shapeSVG = circle.shapeCreate();
            const shapeText = circle.textCreate();
            createShape("circle.svg", shapeSVG, shapeText);
        } else if (shapeInfo.shape[0] === "Square") {
            const square = new shape.Square(0, 0, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
            const shapeSVG = square.shapeCreate();
            const shapeText = square.textCreate();
            createShape("square.svg", shapeSVG, shapeText);
        } else if (shapeInfo.shape[0] === "Triangle") {
            const triangle = new shape.Triangle(0, 0, shapeInfo.text, shapeInfo.textColor, shapeInfo.shapeColor);
            const shapeSVG = triangle.shapeCreate();
            const shapeText = triangle.textCreate();
            createShape("triangle.svg", shapeSVG, shapeText);
        }
    });

