const dataString = ['BMW', 'Yamaha', 'Honda', 'Ducati', 'Suzuki'];
const dataNumber = [3, 5, 1, 76, 10, 4, 20, 45];

// mengurutkan string secara ascending
const dataStringSortAsc = dataString.sort();
console.log(dataStringSortAsc);

// mengurutkan string secara descending
const dataStringSortDsc = dataString.sort().reverse();
console.log(dataStringSortDsc);

// mengurutkan number secara ascending
const dataNumberSortAsc = dataNumber.sort((min, max) => min - max);
console.log(dataNumberSortAsc);

// mengurutkan number secara descending
const dataNumberSortDsc = dataNumber.sort((min, max) => max - min);
console.log(dataNumberSortDsc);

// looping array
for(let i = 0; i < dataString.length; i++) {
  console.log(dataString[i])
}

dataStringSortAsc.map((item, index) => {
  console.log(`${index}. merk ${item}`);
});

// mengfilter array
const dataStringFilter = dataString.filter((item, index, array) => item.length <= 5);
console.log(dataStringFilter);
const dataNumberFilter = dataNumberSortDsc.filter((item, index, array) => item >= 10);
console.log(dataNumberFilter);

// menambah element array di index terakhir
dataString.push('Verari');
console.log(dataString);