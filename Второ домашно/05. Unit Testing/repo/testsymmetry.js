import { expect } from 'chai';
import isSymmetric from './symmetry.js';

describe("Arr isSymmetric", function () {
    it("should return true for symmetric arrays", function () {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
   
    });

    it("should return false for asymmetric arrays", function () {
        expect(isSymmetric([1, 2, 3, 4, 5, 6])).to.be.equal(false);
    });
    it("should return false for not arrays", function () {
        expect(isSymmetric("a")).to.be.equal(false);
    });
});

