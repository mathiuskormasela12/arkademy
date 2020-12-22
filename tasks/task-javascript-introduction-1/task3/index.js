const printSegitiga = 5;

if(typeof printSegitiga === 'number') {
  for(let vertical = printSegitiga; vertical >= 1; vertical--) {
    let str = '';
    
    for(let horizontal = 1; horizontal <= vertical; horizontal++) {
      str += `${horizontal} `;
    }

    console.log(str);
  }
} else {
  console.log('Data harus number');
}