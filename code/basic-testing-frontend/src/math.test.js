const {add} = require('./math.js');

describe('should have a function for adding values', () => {
    test('should summarize all number values in an array', () => {
        // Arrange phase
        const numbers = [1, 2, 3, 4, 5];
        // Act phase
        const result = add(numbers);
        // Assert phase
    
        expect(result).toBe(15);
        // const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0); // the reduce method walks thru the array element-by-elemnt then adding current array value to the result fromt he previous step
        // expect(result).toBe(expectedResult);
    });
    
    test('should yield to NaN if a least one invalid number is provided', () => {
        const inputs = ['invalid', 1];
        const result = add(inputs);
        expect(result).toBeNaN();
    });
    
    test('should yield a correct sum if an array of numeric string value is provided', () => {
        const num = ['1', '2', '3'];
        const result = add(num);
        const expectedResult = num.reduce((prevValue, curValue) => +prevValue + +curValue, 0); // the "+" in front forces the string conversion value to a real number
        expect(result).toBe(expectedResult);
    });
    
    test('should yeild 0 if an empty array is provided', () => {
        const num = [];
        const result = add(num);
        expect(result).toBe(0);
    });
    
    test('should throw an error if no value is passed into the function', () => {
        const resultFunt = () => {
            add();
        };
        expect(resultFunt).toThrow(); // toThrow works the same way as the try and catch 
    });
    
    test('should throw an error if provided with multiple arguments instead of an array', () => {
        const num1 = 1;
        const num2 = 2;
    
        const resultFunc = () => {
            add(num1, num2);
        };
    
        expect(resultFunc).toThrow(/is not iterable/); // passing in the "//" is an optional way of providing the expected error message to display 
    });
});
