function sorting(numArr) {
  return numArr.map(item => {
    /* 
      5. Pecah kembali setiap item dari string 
      num yg ada pada variable numArr
    */
    return item.split('')
      // 6. Urutkan element-element yg sudah di pecah itu 
      .sort((min, max) => min - max)
  });
}

function joinAllArray(numArr) {
  return numArr
    // 7. Gabungkan setiap item yang sudah di urutkan
    .map(item => item.join(''))
    // 8. Gabungkan setiap item yang sudah di pecah
    .join('');
}

function divideAndSort(num) {

  /*
    1. inisialisasi variable
    num, numArr, numAsc, numStr


    3. Konversi parameter num menjadi string 
    dan masukan kedalam variable numStr
  */
  let numStr = num.toString();
  /* 
    4. Pecah string num menjadi array 
    dengan separator angka 0 dan masukan
    ke dalam variable numArr
  */
  let numArr = sorting(numStr.split('0'));

  /* 
     9. Masukan kedalam variable 
     numAsc hasil dari penggabungan 
     arraynya
  */
  let numAsc = joinAllArray(numArr);
  // 10. Konversi variable numAsc menjadi number 
  return parseInt(numAsc);
}

// 2. Input number kedalam variable num 
// 11. cetak hasilnya
console.log(divideAndSort(5956560159466056));