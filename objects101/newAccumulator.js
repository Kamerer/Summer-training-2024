let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

function Accumulator(plusValue) {
    this.value = plusValue;
    this.read = function() {
        this.value += +prompt("Add another value", 5); 
    }
}