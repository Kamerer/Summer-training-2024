function readNumber() {
    let inputValue;
    while (true) {
        inputValue = prompt('Input value', 0);
        if (!isNaN(inputValue)) {
            break;
        }
    }
    return inputValue;  
}

alert(readNumber());