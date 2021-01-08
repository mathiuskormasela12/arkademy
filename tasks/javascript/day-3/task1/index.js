/* 
  ==== Mengenal Built In Function Javascript ====
*/

/* 
  1. For Each
  For Each merupakan sebuah method
  yang berfungsi untuk melooping
  element-element array dan method ini
  tidak akan menghasilkan array baru
*/
const num = [1,2,3,4,5];
num.forEach(item  => {
  console.log(item);
});

console.log('');

/* 
  2. Map
  Map merupakan sebuah method yang 
  berfungsi untuk melooping element-element
  array sama seperti method forEach, namun
  method map menghasilan array baru.
*/
const newNum = num.map(item => item * 2);
console.log(newNum);

console.log('');

/* 
  3. Filter
    Filter merupakan sebuah method yang berfungsi
    untuk menyaring element-element array berdasarkan
    kondisi tertentu
*/
const evenNumber = num.filter(item => item % 2 ===0);
console.log(evenNumber);

console.log('');

/* 
  4. Reverse
  Reverse merupakan sebuah method pada Javscript
  yang berguna untuk membalikan urutan dari
  sebuah element array.
*/
const newNumber = [1,2,3];
const reverseNumber = newNumber.reverse();
console.log(reverseNumber);

/* 
  5. Sort
  Sort merupakan sebuah method yang berfungsi
  untuk mengurutkan element array baik secara
  ascending ataupun descending
*/
const randomNum = [8,6,2,70,5,9,10,1];
const ascNum = randomNum.sort((min, max) => min - max);
console.log(ascNum);

/* 
  6. Push
  Push merupakan sebuah method yang berfungsi
  untuk menambahkan element array di index
  terakhir.
*/
randomNum.push(20);
console.log(randomNum);

/* 
  7. Unshift
  Unshift merupakan sebuah method yang berfungsi
  untuk menambahkan element array di index
  ke 0.
*/
randomNum.unshift(100);
console.log(randomNum);

/* 
  8. Shift
  Shift merupakan sebuah method yang berfungsi
  untuk mengambil dan menghapus element array
  di index ke 0.
*/
const anime = ['Boruto', 'Naruto', 'One Puch Man'];
// mengambil element array index ke 0
const boruto = anime.shift();
console.log(anime);
console.log(boruto);

/* 
  9. Pop
  Pop merupakan sebuah method yg berfungsi
  untuk mengambil dan menghapus element array
  di index terakhir
*/
const onePuchMan = anime.pop();
console.log(anime);
console.log(onePuchMan);

/* 
  10. Splice
  Splice merupakan sebuah method yang berfungsi
  untuk menghapus dan menambah element array
  di index manapun.
*/
const newArr = [1,2,4,5];
newArr.splice(2, 0, 3);
console.log(newArr);

/* 
  11. Split
  Split merupakan sebuah method yang berfungsi
  untuk memecah string menjadi array
*/
const myName = 'Mathius Kormasela';
const arrName =  myName.split(' ');
console.log(arrName);

/* 
  12. Join
  Join merupakan sebuah method yang berfungsi
  untuk menggabungkan element-element array
  menjadi sebuah string.
*/
const newMyName = arrName.join(' ');
console.log(newMyName);

/* 
  13. Repeat
  Repeat merupakan sebuah method yang berfungsi
  untuk mengulang string.
*/
const repeatStr = newMyName.repeat(2);
console.log(repeatStr);

/* 
  14. Trim
  Trim merupakan sebuah method yang berfungsi
  untuk menghapus karakter whitespace di awal
  dan akhir string.
*/
let greeting = ' Mathius Kormasela ';
console.log(`Hello my name is${greeting}and....`);
greeting = greeting.trim();
console.log(`Hello my name is${greeting}and....`);

/* 
  15. Substr
  Substr merupakan sebuah method yang berfungsi
  untuk mengambil beberapa karakter dalam sebuah string
*/
const lang = 'Javascript';
console.log(lang.substr(4, 3));

/* 
  16. Includes
  Includes merupakan sebuah method yang berfungsi
  untuk mengecek apakah dalam sebuah string
  terdapat karakter tertentu tidak.
*/
// mengecek apakah dalam variable lang terdapat karakter Java
console.log(lang.includes('Java'));

/* 
  17. startsWith
  startsWith merupakan sebuah method yang berfungsi
  untuk mengecek apakah suatu string diawali
  oleh sebuah karakter tertentu atau tidak.
*/
// mengecek apakah dalam variable lang diawali karakter Java
console.log(lang.startsWith('Java'));

/* 
  18. endsWith
  endsWith merupakan sebuah method yang berfungsi
  untuk mengecek apakah suatu string diakhiri
  oleh sebuah karakter tertentu atau tidak.
*/
// mengecek apakah dalam variable lang diakhiri karakter script
console.log(lang.endsWith('script'));

/* 
  19. indexOf
  indexOf merupakan sebuah method yang berfungsi untuk 
  mengecek suatu element array berada di index keberapa
*/
const array = [1,2,3];
console.log(array.indexOf(2));

/* 
  19. lastIndexOf
  lastIndexOf merupakan sebuah method yang berfungsi untuk 
  mengecek suatu element array berada di index keberapa 
  namun Javascript akan mencarinya dari kanan ke kiri.
*/
const fullName = 'Mathius Kormasela';
console.log(fullName.lastIndexOf('a', 14));

/* 
  20. Reduce
  Reduce merupakan sebuah method yang berfungsi
  untuk mengkalkulasi element-element array.
*/
const totalArray = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(totalArray);
