function maximum69Number (num: number): number {
    let digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '6') {
            digits[i] = '9';
            break;
        }
    }
    return parseInt(digits.join(''))
};