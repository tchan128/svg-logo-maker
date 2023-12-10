const inquirer = require("inquirer");

const fs = require("fs");

const svg = 
`<svg width="300" height="300">
    ${shapeInfo}
    <text x="50" y="100" font-size="80px">SVG</text>
</svg>`

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
            name: "text-color",
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
            name: "shape-color",
        },
    ])
    .then((responses) => {
        fs.writeFile("shape-information.txt", JSON.stringify(responses), (error) =>
        error ? console.error(error) : console.log(responses))
    })
    .then((responses) =>{
        fs.writeFile("shape.html", svg, (error) =>
        error ? console.error(error) : console.log(responses))
    })