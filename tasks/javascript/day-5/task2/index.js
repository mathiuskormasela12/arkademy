function reverseWords(words) {
  if(words.length < 1) {
    return 'Minimum words length is 1 character';
  } 

  return words.split(' ')
    .reverse()
    .join(' ');
}

const result = reverseWords('Saya Belajar Javascript');
console.log(result);