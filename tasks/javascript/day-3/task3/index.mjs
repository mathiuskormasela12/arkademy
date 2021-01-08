import printResults from './printResults.mjs';

function valueSelection(initialValue, lastValue, dataArray) {
  if(initialValue >= lastValue) 
    return 'Nilai akhir harus lebih besar dari nilai awal';
  else if(dataArray.length <= 5)
    return 'Jumlah angka dalam dataArray harus lebih dari 5';
  else 
    return printResults(initialValue, lastValue, dataArray);
}

console.log(valueSelection(5, 20 , [2, 25, 4, 14, 17, 30, 8]));