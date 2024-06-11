"use strict"

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
    // if (age > 18) {
    //   return true;
    // } else {
    //   return confirm('Родители разрешили?');
    // }
  }

let age = +prompt("Enter your age", 20);
alert(checkAge(age));