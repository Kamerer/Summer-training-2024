function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    let newStr = '';
    for (let i = 0; i < maxlength - 1; i++) {
        newStr += str[i];
    }

    return newStr + '…'

}
console.log(truncate('12345678901234567890',10));