"use strict"
let login = prompt("Input login", "admin");
let pass;
if (login == "admin") {
    pass = prompt("Input password", "");
    if (pass == "admin") {
        alert("Its You!");
    } else {
        alert("WRONG!!!");
    }
} else if (login == "") {
    alert("abort");
} else {
    alert("I dont now you");
}