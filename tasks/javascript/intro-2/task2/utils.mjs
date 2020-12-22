function filterArr(arr, str) {
  return arr.filter(item => {
    return item.toLowerCase().includes(str.toLowerCase()) === true
  });
}

function limitArr(arr, limit) {
  if(arr.length > limit) {
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