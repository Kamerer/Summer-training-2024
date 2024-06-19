let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

function aclean(arr) {
    let newArr = sortArr(arr);
    console.log(newArr);
    let set = new Set();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.includes(newArr[i], i+1)) {
            set.add(arr[i]);
        }
    }
    return Array.from(set);
}

function sortArr(arr) {
    let newArr = [];
    for (let element of arr) {
        newArr.push(element.toLowerCase().split('').sort().join(''));
    }
    return newArr;
}