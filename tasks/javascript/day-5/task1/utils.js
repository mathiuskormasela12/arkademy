function reverseText(text) {
  return [...text]
    .reverse()
    .join('')
    .replace(/\s/g, '');
}

function removeWhiteSpace(text) {
  return text
    .toLowerCase()
    .replace(/\s/g, '');
}

function isPalindrom(text, callback) {
  if(typeof text !== 'string') 
    return callback('Teks harus bertipe data string');
  else if(text.length < 1) 
    return callback('Panjang teks minimal 1 karakter');

  let textWithoutWhitespace = removeWhiteSpace(text)
  let reversedText = reverseText(textWithoutWhitespace);
  
  if(textWithoutWhitespace === reversedText) 
    return callback('Palindrom');
  else 
    return callback('Bukan Palindrom');
}

module.exports = isPalindrom;