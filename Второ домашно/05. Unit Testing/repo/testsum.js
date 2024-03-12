import { expect } from 'chai';
import sum from './sum.js';

describe("Array sum", function () {
    it("should return 15 for [1,2,3,4,5]", function () {
        expect(sum([1,2,3,4,5])).to.be.equal(15);
    });
});