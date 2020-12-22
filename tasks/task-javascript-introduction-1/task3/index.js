// const printSegitiga = 5;

// if(typeof printSegitiga === 'number') {
//   for(let vertical = printSegitiga; vertical >= 1; vertical--) {
//     let str = '';
    
//     for(let horizontal = 1; horizontal <= vertical; horizontal++) {
//       str += `${horizontal} `;
//     }

//     console.log(str);
//   }
// } else {
//   console.log('Data harus number');
// }

function printSegitiga(num) {
  if(typeof num === 'number') {
    let str = '';

    for(let vertical = num; vertical >= 1; vertical--) {
      for(let horizontal = 1; horizontal <= vertical; horizontal++) {
        str += `${horizontal} `;
      }
      str += '\n'
    }

    return str;
  } else {
    return 'Data harus number';
  }
}

console.log(printSegitiga(5));