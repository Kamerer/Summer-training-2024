function extractCurrencyValue(str) {
    if (str.startsWith('$')) {
        return +str.slice(1);
    }
    return +str;
}

console.log(extractCurrencyValue('$100000'));