import { expect } from "chai";
import {formatNumber, getSign, hasDecimal, reverseCalculate} from "../src/untils/utils.js";
import {evaluate} from "mathjs";

// Helpers
describe("hasDecimal", () => {
    it("should decide if the number has decimal points", () => {
        expect(hasDecimal(1)).to.equal(false);
        expect(hasDecimal(-1)).to.equal(false);
        expect(hasDecimal(0)).to.equal(false);
        expect(hasDecimal(23454678)).to.equal(false);
        expect(hasDecimal(-456789)).to.equal(false);
        expect(hasDecimal(0)).to.equal(false);
        expect(hasDecimal(1.0)).to.equal(false);
        expect(hasDecimal(-1.0)).to.equal(false);

        expect(hasDecimal(1.000000000000001)).to.equal(true);
        expect(hasDecimal(-1.000000000000001)).to.equal(true);
        expect(hasDecimal(0.000000000000001)).to.equal(true);
        expect(hasDecimal(-0.000000000000001)).to.equal(true);
        expect(hasDecimal(345678.5)).to.equal(true);
        expect(hasDecimal(-345678.5)).to.equal(true);
    })
})

describe("getSign", () => {
    it("should return correct sign", () => {
        expect(getSign(1)).to.equal('+');
        expect(getSign(0)).to.equal('+');
        expect(getSign(-1)).to.equal('-');

        expect(getSign(1.24)).to.equal('+');
        expect(getSign(-1.24)).to.equal('-');
        expect(getSign(675235.3554)).to.equal('+');
        expect(getSign(-23536.3465)).to.equal('-');
    })
})

describe("formatNumber", () => {
    it("should format number correctly", () => {
        expect(formatNumber(1)).to.equal('+1');
        expect(formatNumber(-1)).to.equal('-1');
        expect(formatNumber(0)).to.equal('+0');

        expect(formatNumber(1/2)).to.equal('+1/2');
        expect(formatNumber(-1/2)).to.equal('-1/2');
        expect(formatNumber(0.25)).to.equal('+1/4');

        expect(formatNumber(1/3)).to.equal('+1/3');
        expect(formatNumber(-1/3)).to.equal('-1/3');

        expect(formatNumber(-52/7)).to.equal('-52/7');
        expect(formatNumber(-245/3)).to.equal('-245/3');

    })
})

// Reverse calc
describe("numbers only", () => {
    it("should return equation equal to result", () => {
        const randomComplexity = (): string => {
            const random = Math.floor(Math.random() * 3);
            if (random == 3) return 'high';
            if (random == 2) return 'medium';

            return 'low';
        }

        const maxPolynome = 1;
        const mode = 'numbers';

        for (let i = 0; i < 50; i++) {
            const result = Math.floor(Math.random() * 100) * (Math.floor(Math.random() * 2) == 1 ? -1 : 1);
            const maxOperands = Math.floor(Math.random() * 9) + 1;
            expect(evaluate(reverseCalculate(result,maxOperands,maxPolynome,mode, randomComplexity()))).to.equal(result);
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
