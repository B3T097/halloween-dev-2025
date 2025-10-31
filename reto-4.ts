function searchPhone(phones: number[], target: number): number {
    if (!phones.length) return -1;
    let indices = Array.from(phones.map((item, i) => i));
    let seachBinary = (currentPhones: number[], target: number, indices: number[]): number => {
        if(currentPhones.length == 1 && target != currentPhones[0]) return -1;
        let lastIndex = currentPhones.length - 1;
        let middle = Math.round(lastIndex / 2);

        let current = currentPhones[middle];
        if (current == target) return indices[middle];

        let newPhones = [];
        let newIndices = [];
        if (current > target) {
            newPhones = currentPhones.slice(0, middle);
            newIndices = indices.slice(0, middle);
            return seachBinary(newPhones, target, newIndices);
        } else {
            newPhones = currentPhones.slice(middle, currentPhones.length);
            newIndices = indices.slice(middle, indices.length);
            return seachBinary(newPhones, target, newIndices);
        }
    };

    return seachBinary(phones, target, indices);
}

// function searchPhone(phones: number[], target: number): number {
//     if (!phones.length) return -1;
//     let indices = Array.from(phones.map((item, i) => i));
//     let currentPhones = phones;
//     let lastIndex = 0;
//     let middle = 0;
//     let found = -2;

//     while (found == -2) {
//         lastIndex = currentPhones.length - 1;
//         middle = Math.round(lastIndex / 2);

//         let current = currentPhones[middle];
//         if (current == target) found = indices[middle];

//         if (current > target) {
//             currentPhones = currentPhones.slice(0, middle);
//             indices = indices.slice(0, middle);
            
//         } else {
//             currentPhones = currentPhones.slice(middle, currentPhones.length);
//             indices = indices.slice(middle, indices.length);
//         }

//         if (currentPhones.length == 1 && target != currentPhones[0]) found = -1; 
//     }

//     return found;
// }

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

let test1 = searchPhone(phones, 1008);
// => 3 (está en el índice 3)

let test2 = searchPhone(phones, 1001);
// => 0 (está en el índice 0)

let test3 = searchPhone(phones, 1020);
// => 6 (está en el índice 6)

let test4 = searchPhone(phones, 9999);
// => -1 (no existe)

console.log("Test 1: ", test1);

console.log("Test 2: ", test2);

console.log("Test 3: ", test3);

console.log("Test 4: ", test4);