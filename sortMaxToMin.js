let arr = [5, 2, 1, -10, 8];

function sortMaxToMin(arr) {
    return arr.sort((a, b) => b - a);
}
sortMaxToMin(arr);
//arr.sort((a, b) => b - a);    //то же самое
console.log(arr);