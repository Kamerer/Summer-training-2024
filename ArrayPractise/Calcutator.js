// https://learn.javascript.ru/task/calculator-extendable Сложная задача, я ее неправлиьно понял
function Calculator() {
    this.calculate = function(str) {
        let result = 0;
        if (str.includes('+')) {
            result = sumArray(str);
        } else if (str.includes('-')) {
            result = differenceArray(str);            
        } 
        return result;
    };

}
function sumArray(str) {
    let result = 0;
    let arr = str.split(' + ');
    for (let number of arr) {
        result += +number;
    }
    return result;
}
function differenceArray(str) {
    let result = 0;
    let arr = str.split(' - ');
    for (let number of arr) {
        result -= +number;
    }
    result += arr[0] * 2;
    return result;
}

let calc = new Calculator;
console.log(calc.calculate('3 + 5 + 6'));