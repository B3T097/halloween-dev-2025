function surviveRoulette(n: number, k: number): number {
  let steps = k;
  let survivors = Array.from({ length: n }, (_, i) => i);

  let position = 0;
  while (survivors.length > 1) {
    position = position + (steps - 1);
    
    while (position >= survivors.length) {
      position = position - survivors.length;
    }

    survivors.splice(position, 1);
    if (position == survivors.length) position = 0;
  }
  return survivors[0];
}

let test = []
test.push(surviveRoulette(4, 2));
test.push(surviveRoulette(5, 3));
test.push(surviveRoulette(5, 10));

console.log("Test", test);