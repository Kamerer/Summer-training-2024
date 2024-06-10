"use strict"

let inputNumber = prompt("Введите число!","5");
if (+inputNumber > 0) {
    alert("Positive");
} else if (+inputNumber < 0) {
    alert("Negative!");
} else {
    alert("Zero");
}