const Shape = require("./shapes.js");

describe(`Shapes`, () => {
    describe(`Circle`, () => {
        it('should create a circle', () => {
            const circle = new Shape.Triangle();
            circle.shapeCreate();
            expect(circle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});