function disemvowel(str) {
    let alphabet = ['a','e','i','o','u','A','I','E','O','U'];
    // for (let letter in alphabet) {
    //     //const letters = /g;
    //     console.log(alphabet[letter]);
    //     pattern = /a/g;
    //     str = str.replace(pattern, '_');
    // }

    
    return str.replace(/[aeiou]/ig,'');
}

console.log(disemvowel("NOOOOOOaaOOAE offensaqe but, \nYour writing is among the worst I've ever read"));