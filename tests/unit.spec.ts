import { expect } from "chai";
import {reverseCalculate} from "../src/untils/utils.js";

describe("numbers only", () => {
    it("should return equation equal to result", () => {
        const maxPolynome = 1;
        const mode = 'numbers';
        const complexity = 'low';

        expect(eval(reverseCalculate(13,5,maxPolynome,mode, complexity))).to.equal(13);
    });
});
