function filterArr(arr, str) {
  return arr.filter(item => {
    return item.toLowerCase().includes(str.toLowerCase()) === true
  });
}

function limitArr(arr, limit) {
  if(typeof limit !== 'number') {
    return 'Nilai limit harus angka';
  } 
  else if(limit < 1){
    return 'Nilai limit harus lebih besar dari 0'
  } else if(arr.length > limit) {
    let results = [];
    for(let i = 0; i < limit; i++) {
      results.push(arr[i]);
    }
    return results;
  } else {
    return arr;
  }
}

export { filterArr, limitArr };