// Importing libraries that are needed
const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes.js");

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxLength-input', MaxLengthInputPrompt);



// Helper function to create logo

function createShape(fileName, shape, text) {
    const svg = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape}
        ${text}
    </svg>`

    fs.writeFile(fileName, svg, (error) =>
    error ? console.error(error) : console.log("Generated logo.svg"))
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
            const circle = new Circle(shapeInfo.text, shapeInfo.textColor);
            circle.setColor(shapeInfo.shapeColor)
            createShape("logo.svg", circle.render(), circle.textCreate());
        } else if (shapeInfo.shape[0] === "Square") {
            const square = new Square(shapeInfo.text, shapeInfo.textColor);
            square.setColor(shapeInfo.shapeColor)
            createShape("logo.svg", square.render(), square.textCreate());
        } else if (shapeInfo.shape[0] === "Triangle") {
            const triangle = new Triangle(shapeInfo.text, shapeInfo.textColor);
            triangle.setColor(shapeInfo.shapeColor)
            createShape("logo.svg", triangle.render(), triangle.textCreate());
        }
    });

