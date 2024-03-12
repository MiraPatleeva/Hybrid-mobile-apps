import { expect } from 'chai';
import createCalculator from './calculator.js';

describe("Calculator.get", function () {
    it("should return 5 for add(7) substract(2)", function () {
        const calculator = createCalculator();
        calculator.add(7);
        calculator.subtract(2);
        expect(calculator.get()).to.be.equal(5);
    });
});
