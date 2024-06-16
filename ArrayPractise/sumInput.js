function sumInput() {
    let arr = [];
    let index = 0;
    let sum = 0;
    while (true) {
        elem = prompt('enter element', 5);
        sum += +elem;
        if (isNaN(elem)) break;
        arr[index] = elem;
        index++;

    }
    return sum;
}

alert(sumInput());