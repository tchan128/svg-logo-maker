const {Circle, Square, Triangle, sizeGenerator} = require("./shapes.js");

// Test for shape generation

describe(`Shapes`, () => {
    describe(`Triangle`, () => {
        // Testing to generate a blue triangle 
        it('should create a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })
});

describe(`Shapes`, () => {
    describe(`Circle`, () => {
        // Testing to generate a red circle
        it('should create a red circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="red"/>');
        })
    })
});

describe(`Shapes`, () => {
    describe(`Square`, () => {
        // Testing to generate a pink square
        it('should create a pink square', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="pink"/>');
        })
    })
});

// Test for text size generation

describe(`textGenerator`, () => {
    describe(`Text Size for 3 letter`, () => {
        // Testing the size of text if input is 3 letters for a Square
        it('should create the correct size of text for logo', () => {
            const text = "npm"
            const textLength = text.length
            const size = sizeGenerator(textLength, "square")
            expect(size).toEqual("25");
        })
    })
});

describe(`textGenerator`, () => {
    describe(`Text Size for 3 letter`, () => {
        // Testing the size of text if input is 3 letters for a Triangle
        it('should create the correct size of text for logo', () => {
            const text = "npm"
            const textLength = text.length
            const size = sizeGenerator(textLength, "triangle")
            expect(size).toEqual("100");
        })
    })
});

describe(`textGenerator`, () => {
    describe(`Text Size for 2 letter`, () => {
        // Testing to make sure the text size of triangle and circle are not the same
        it('should compare the text size of a three letter input of a triangle and circle logo', () => {
            const text = "hi"
            const textLength = text.length
            const squareSize = sizeGenerator(textLength, "square")
            const triangleSize = sizeGenerator(textLength, "triangle")
            expect(squareSize == triangleSize).toBeFalsy();
        })
    })
});

// Test for text and text generation

describe(`Shapes`, () => {
    describe(`Text Generation`, () => {
        // Testing generation of text and text color for Circle
        it('should create a logo with black text saying "npm"', () => {
            const shape = new Circle("npm", "black");
            const result = shape.textCreate()
            expect(result).toEqual('<text x="25" y="125" font-size="80px" fill="black">npm</text>');
        })
    })
});

describe(`Shapes`, () => {
    describe(`Text Generation`, () => {
        // Testing generation of text and text color for Triangle
        it('should create a logo with pink text saying "hey"', () => {
            const shape = new Triangle("hey", "pink");
            const result = shape.textCreate()
            expect(result).toEqual('<text x="100" y="150" font-size="55px" fill="pink">hey</text>');
        })
    })
});

describe(`Shapes`, () => {
    describe(`Text Generation`, () => {
        // Testing generation of text and text color for Square
        it('should create a logo with blue text saying "hi"', () => {
            const shape = new Square("hi", "blue");
            const result = shape.textCreate()
            expect(result).toEqual('<text x="45" y="120" font-size="80px" fill="blue">hi</text>');
        })
    })
});