"use strict"

let N = prompt("Enter max number: ", "10");

for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 1) {
        alert(i);
    }
}