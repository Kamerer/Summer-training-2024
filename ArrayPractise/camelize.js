function camelize(str) {
    let arrFromStr = str.split("-");
    console.log(arrFromStr);
    for (let i = 1; i < arrFromStr.length; i++) {
        if (arrFromStr[i] == '') continue;
        arrFromStr[i] = arrFromStr[i][0].toUpperCase() + arrFromStr[i].slice(1);
        console.log(arrFromStr[i]);

    }
    console.log(arrFromStr.join(''));
    return arrFromStr.join();
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';