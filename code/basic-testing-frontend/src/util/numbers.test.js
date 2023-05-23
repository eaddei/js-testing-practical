import {test, expect} from 'vitest';
import { transformToNumber } from './numbers';

test('should transform a string number to a number of type number', () => {
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBeTypeOf('number');
});

test('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const result = transformToNumber(input);
    expect(result).toBeNaN();
});

