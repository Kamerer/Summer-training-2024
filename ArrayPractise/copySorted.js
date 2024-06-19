function copySorted(arr) {
    let tempArr = [];
    tempArr = tempArr.concat(arr);
    return tempArr.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)