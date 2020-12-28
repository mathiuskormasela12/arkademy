function sorting(numArr) {
  return numArr.map(item => {
    return item.split('')
      .sort((min, max) => min - max)
  });
}

function divideAndSort(num) {
  let numStr = num.toString();
  let numArr = numStr.split('0');
  
  numArr = sorting(numArr);

  let numAsc = numArr.map(item => item.join(''));
  numAsc = numAsc.join('');

  numAsc = parseInt(numAsc);
  
  console.log(numAsc)
}

divideAndSort(5956560159466056)