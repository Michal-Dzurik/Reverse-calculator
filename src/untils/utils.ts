import { evaluate } from "mathjs";
const BASE = 100;

const getGCD = (a: number, b: number): number => {
    return b === 0 ? a : getGCD(b, a % b);
};

const getComplexityMultiplier = (complexity: string): number => {
    return complexity === "high" ? 4 : complexity === "medium" ? 2 : 1;
};

const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const binaryRandom = (): number => {
    return Math.floor(Math.random() * 2);
};

export const hasDecimal = (numb: number): boolean => {
    return !Number.isInteger(numb);
};

export const getSign = (numb: number): string => {
    return numb >= 0 ? "+" : "-";
};

export const formatNumber = (numb: number, divide?: number, ignoreFormatting?: boolean): string => {
    if (divide != null && ignoreFormatting == null) return `${getSign(numb)}${Math.abs(numb)}/${divide}`;
    if (!hasDecimal(numb) || ignoreFormatting || numb === 0) return `${getSign(numb)}${Math.abs(numb)}`;

    const sign = getSign(numb);
    const absValue = Math.abs(numb);

    const precision = 1e-10;
    let denominator = 1;

    while (Math.abs(absValue * denominator - Math.round(absValue * denominator)) > precision) {
        denominator++;
    }

    const numerator = Math.round(absValue * denominator);
    const gcd = getGCD(numerator, denominator);

    return `${sign}${numerator / gcd}/${denominator / gcd}`;
};

export const reverseCalculate = (
    result: number,
    maxOperands: number,
    maxPolynome: number,
    mode: string,
    complexity: string,
    fractions: boolean,
    roots: boolean
): string => {
    if (
        !mode ||
        !complexity ||
        maxPolynome < 1 ||
        maxOperands < 1 ||
        maxPolynome >= 20 ||
        maxOperands >= 20
    ) {
        return "";
    }

    let output = "";
    const multiplier = getComplexityMultiplier(complexity);
    const operandNumber = random(1, maxOperands);

    if (mode === "numbers") {
        for (let i = 0; i < operandNumber; i++) {
            let numb = random(1, BASE * multiplier - 1);

            if (fractions && binaryRandom() === 1) {
                const fraction = random(2, Math.max(2, (result / 2) * multiplier));
                output += `${formatNumber(binaryRandom() ? -numb : numb, fraction)}`;

                continue;
            }

            if (roots && binaryRandom() === 1) {
                const rootExponent = random(2, 5 * multiplier - 2);
                const randomExponent = random(1, 5 * multiplier - 1);
                output += `${getSign(numb)}${numb}^(${randomExponent}/${rootExponent})`;
                continue;
            }

            if (binaryRandom() === 1) numb = -numb;
            output += formatNumber(numb, 0, true);
        }

        const rest = evaluate(`${output} - ${result}`);
        output += formatNumber(-rest, 0, true);
    }

    if (mode === "variables") {
        for (let i = 0; i < operandNumber; i++) {
            let numb = random(1, BASE * multiplier - 1);
            const polynome = random(1, maxPolynome + 1);

            if (complexity === "high" && binaryRandom() === 1) {
                const fraction = random(1, Math.max(1, (result / 2) * multiplier));
                output +=  + `(${formatNumber(binaryRandom() ? -numb : numb, fraction)})x^${polynome}`;
                continue;
            }

            if (roots && binaryRandom() === 1) {
                const rootExponent = random(2, 5 * multiplier - 2);
                const randomExponent = random(1, 5 * multiplier - 1);
                output += `${getSign(numb)}${numb}x^(${randomExponent}/${rootExponent})`;
                continue;
            }

            if (binaryRandom() === 1) numb = -numb;
            output +=`${formatNumber(numb)}x^${polynome}`;
        }

        try {
            const rest = evaluate(output, { x: result });
            if (!isFinite(rest) || isNaN(rest)) throw new Error("Invalid equation");
            output += formatNumber(-rest, 0, true);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            return reverseCalculate(result,maxOperands,maxOperands,mode,complexity,fractions,roots);
        }
    }

    output = output.trim() == '' ? '0' : output;

    if (mode == 'numbers' && evaluate(output) != result) return reverseCalculate(result,maxOperands,maxOperands,mode,complexity,fractions,roots);
    return output;
};

export const formatForScreen = (equation: string): string => {
    return equation.replace(/\^\((.*?)\)/g, '^{$1}')
        .replace(/(\d+)\/(\d+)/g, '{$1 \\over $2}');
}
