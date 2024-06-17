//Не законченная задача
function getMaxSubSum(arr) {
    getMaxFirstSum(arr);
    return arr;
    
}
function getMaxFirstSum(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        newArr[i] = newArr[i - 1] + arr[i];
    }

}

console.log(getMaxSubSum([100, -9, 2, -3, 5]));