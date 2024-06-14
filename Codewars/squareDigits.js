function squareDigits(num){
    if (num <= 0) return 0;
    let len = String(num).length;
    let result = "";
    let tempNum = num;
    for (let i = 1; i <= len; i++) {
        let divide = 10**(len - i);
        let bigPart = Math.trunc(tempNum/divide);
        result += (bigPart)**2;
        tempNum -= (bigPart)*divide;
    }
    return result;
}

console.log(squareDigits(3212))