// GCD (Greatest Common Divisor) == Najväčší spoločný deliteľ (NSD)
const getGCD = (a: number, b: number): number => {
    return b === 0 ? a : getGCD(b, a % b);
};

const getComplexityMultiplayer = (complexity:string):number =>{
    return complexity === 'high' ? 4 : (complexity === 'medium' ? 2 : 1);
}

const random = (min:number, max:number): number =>{
    return Math.floor(Math.random() * max + min);
}

const binaryRandom = () =>{
    return Math.floor(Math.random() * 2);
}

export const hasDecimal = (numb: number): boolean =>{
    return !Number.isInteger(numb);
}

export const getSign = (numb: number): string =>{
    return (numb >= 0 ? '+' : '-');
}

export const formatNumber = (numb:number): string  =>{
    if (!hasDecimal(numb)) return `${getSign(numb)}${Math.abs(numb)}`;

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
}

export const reverseCalculate = (result: number, maxOperands: number, maxPolynome: number, mode: string, complexity: string): string => {
    if (mode == null ||
        complexity == null ||
        mode === '' ||
        complexity === '' ||
        maxPolynome < 1 ||
        maxOperands < 1 ||
        maxPolynome >= 20 ||
        maxOperands >= 20) return '';

    let output = '',
        sum = 0;

    if (mode === 'numbers'){
        const multiplier = getComplexityMultiplayer(complexity);
        const operandNumber = random(1,maxOperands);

        for (let i = 0; i < operandNumber; i++) {
            let numb = random(0,result * multiplier);

            if(complexity === 'high' && binaryRandom() === 1) {
                const fraction = random(1,(result / 2) * multiplier);

                sum += numb / fraction;
                output += formatNumber(numb / fraction);

                continue;
            }
            if(binaryRandom() === 1) numb = -numb;

            sum += numb;
            output += formatNumber(numb);
        }

        const rest = (result - sum);
        output += formatNumber(rest);
    }

    return output;
};
