
export const reverseCalculate = (result: number, maxOperands: number, maxPolynome: number, mode: string, complexity: string): string => {
    if (mode == null ||
        complexity == null ||
        mode === '' ||
        complexity === '' ||
        maxPolynome < 1 ||
        maxOperands < 1 ||
        maxPolynome >= 20 ||
        maxOperands >= 20) return '';
    maxPolynome = Math.max(maxPolynome, result);

    let output = '';
    let sum = 0;

    if (mode === 'numbers'){
        const multiplier = complexity === 'high' ? 4 : (complexity === 'medium' ? 2 : 1);
        const operandNumber = Math.floor(Math.random() * (maxOperands));

        for (let i = 0; i < operandNumber + 1; i++) {
            let numb = Math.floor(Math.random() * (result * multiplier));

            if(Math.floor(Math.random() * 2) === 1) numb = -numb;

            sum += numb;
            output += (numb >= 0 ? '+' : '') + numb;
        }

        const rest = (result - sum);
        output += (rest >= 0 ? '+' : '') + rest;
    }

    return output;
};
