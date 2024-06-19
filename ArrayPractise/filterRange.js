function filterRange(arr, min, max) {
    // let filtered = [];
    // for (element of arr) {
    //     if ((element >= min) && (element <= max)) {
    //         filtered.push(element);
    //     }
    // }
    // return filtered;
    return arr.filter(item => item >= min && item <= max);
}

let arr = [-200, 0, 99, 101, 'rjngireni']
console.log(filterRange(arr,0,100));
