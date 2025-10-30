function myersCalendar(year: number): string[] {
  if(isNaN(year) || year < 1000) return [];
  let validDates: string[] = [`${year}-10-31`];
  
  for(let month=0; month<12; month++){
    let date = new Date(year, month, 13);
    if (date.getDay() == 5) {
      validDates.push(date.toISOString().split('T')[0]);
    }
  }

  validDates = validDates.sort((a, b) => {
    if (new Date(a).getTime() > new Date(b).getTime()) {
      return 1;
    }
    return -1;
  });
  
  return validDates;
}

let test1 = myersCalendar(2025);
// → ['2025-06-13', '2025-09-13', '2025-10-31']

let test2 = myersCalendar(2026)
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

let test3 = myersCalendar(2024)
// → ['2024-09-13', '2024-10-31', '2024-12-13']

console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);