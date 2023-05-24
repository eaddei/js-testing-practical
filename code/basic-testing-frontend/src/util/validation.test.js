const { validateStringNotEmpty, validateNumber } = require('./validation'); // Replace 'your-module-path' with the actual path to your module

describe('validateStringNotEmpty', () => {
  test('should throw an error when given an empty string', () => {
    expect(() => {
      validateStringNotEmpty('');
    }).toThrow('Invalid input - must not be empty.');
  });

  test('should throw an error when given a string with only whitespace characters', () => {
    expect(() => {
      validateStringNotEmpty('   ');
    }).toThrow('Invalid input - must not be empty.');
  });

  test('should not throw an error when given a non-empty string', () => {
    expect(() => {
      validateStringNotEmpty('Hello, world!');
    }).not.toThrow();
  });
});

describe('validateNumber', () => {
  test('should throw an error when given a non-numeric value', () => {
    expect(() => {
      validateNumber('abc');
    }).toThrow('Invalid number input.');
  });

  test('should not throw an error when given a valid numeric value as a string', () => {
    expect(() => {
      validateNumber('123');
    }).not.toThrow();
  });

  test('should not throw an error when given a valid numeric value as a number', () => {
    expect(() => {
      validateNumber(456);
    }).not.toThrow();
  });
});
