function substituiPares(array) {
    if (!array.length) return -1;
    if (!array) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log ("você ja é zero")
        } else if (array[i] % 2 === 0) {
            console.log (`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(substituiPares(array));