import { expect } from "chai";
import {reverseCalculate} from "../src/untils/utils.js";

describe("numbers only", () => {
    it("should return equation equal to result", () => {
        const maxPolynome = 1;
        const mode = 'numbers';
        const complexity = 'low';

        for (let i = 0; i < 50; i++) {
            const result = Math.floor(Math.random() * 100) * (Math.floor(Math.random() * 2) == 1 ? -1 : 1);
            const maxOperands = Math.floor(Math.random() * 9) + 1;
            expect(eval(reverseCalculate(result,maxOperands,maxPolynome,mode, complexity))).to.equal(result);
        }
    });

    it("should return nothing when getting DRY", () => {
        const maxPolynome = 1;
        const mode = 'numbers';
        const complexity = 'low';

        expect(reverseCalculate(12,5,maxPolynome,'', complexity)).to.equal('');
        expect(reverseCalculate(12,5,maxPolynome,mode, '')).to.equal('');

        expect(reverseCalculate(12,5,-1,mode, complexity )).to.equal('');
        expect(reverseCalculate(12,-1,3,mode, complexity )).to.equal('');

        expect(reverseCalculate(12,5,0,mode, complexity )).to.equal('');
        expect(reverseCalculate(12,0,3,mode, complexity )).to.equal('');

        expect(reverseCalculate(12,5,1234536,mode, complexity )).to.equal('');
        expect(reverseCalculate(12,123456,3,mode, complexity )).to.equal('');

        expect(reverseCalculate(12,5,-1234536,mode, complexity )).to.equal('');
        expect(reverseCalculate(12,-123456,3,mode, complexity )).to.equal('');
    });
});
