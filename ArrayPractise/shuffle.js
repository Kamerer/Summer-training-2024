let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        index[i] = Math.floor(arr.length * Math.random());
    }
    console.log(index);
}

shuffle(arr);
