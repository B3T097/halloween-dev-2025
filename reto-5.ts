function changeLock(current: string, target: string): number {
    let moves = 0;
    for (let i = current.length - 1; i >= 0; i--) {
        const digit = Number(current[i]);
        const digitObjective = Number(target[i]);

        if ( Math.abs(digitObjective-digit) < 5) {
            moves += Math.abs(digitObjective-digit);
        } else {
            moves += 10 - Math.abs(digitObjective-digit);
        }

    }
    return moves;
}
let test = []
test.push(changeLock('0022', '0044'));
test.push(changeLock('0000', '9999'));
test.push(changeLock('1234', '5678'));
test.push(changeLock('0000', '0000'));
test.push(changeLock('1357', '2468'));

console.log("Test", test);