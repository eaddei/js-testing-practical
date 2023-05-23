const {transformToNumber} = require('./numbers');

describe('should have a function for transforming values to numbers', () => {
    test('should transform a string number to a number of type number', () => {
        const input = '1';
        const result = transformToNumber(input);
        console.log(result);
        expect(result).toBe(1);
    });
    
    test('should yield NaN for non-transformable values', () => {
        const input = 'invalid';
        const result = transformToNumber(input);
        expect(result).toBeNaN();
    
    });
});