function countSheep(letters: string): number {
    let sheep = ['s', 'h', 'e', 'e', 'p'];
    let index = 0;
    let countWordsSheep = 0;
    let lettersToArray = Array.from(letters);

    let findLetter = (letter: string, letters: string[]): string[] => {
        let existeLetter = letters.indexOf(letter);

        if (existeLetter != -1) letters.splice(existeLetter, 1);

        return letters;
    };

    let lengthBefore = lettersToArray.length;
    let newArrayLetters = findLetter(sheep[index], lettersToArray);
    while (newArrayLetters.length != lengthBefore) {
        index++;
        if (index > 4) {
            index = 0;
            countWordsSheep++;
        }
        lettersToArray = newArrayLetters;
        lengthBefore = lettersToArray.length;
        newArrayLetters = findLetter(sheep[index], lettersToArray);
    };

    return countWordsSheep;
}

let test1 = countSheep('sheepxsheepy');
// → 2 (puedes formar "sheep" dos veces)

let test2 = countSheep('sshhheeeepppp');
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

let test3 = countSheep('hola');
// → 0 (no hay suficientes letras)

let test4 = countSheep('peesh');
// → 1 (las letras están

console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);
console.log("Test 4:", test4);