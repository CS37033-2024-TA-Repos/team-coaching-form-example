import {add, subtract} from '../simple-math';


describe('add', () => {
    test('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('should add two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('should not multiply two numbers', () => {
        expect(add(1, 2)).not.toBe(2);
    });
})

describe('subtract', () => {
    test('should subtract two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('should subtract two negative numbers', () => {
        expect(subtract(-1, -2)).toBe(1);
    });

    test('should not add two numbers', () => {
        expect(subtract(2, 1)).not.toBe(3);
    });
});


describe('test something else', () => {
    test('should be true', () => {
        expect(true).toBe(true);
    });

    test('should be false', () => {
        expect(false).toBe(false);
    });

    test('number should be within 1 decimal place of another', () => {
        expect(1.07).toBeCloseTo(1.1, 1);
    });

    test('this test should fail', () => {
        expect(false).toBe(true);
    });
});