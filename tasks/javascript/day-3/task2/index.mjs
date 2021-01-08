import searchName from './searchName.mjs';

const results = searchName('an', 3, () =>  {
  return [
    'Abigail', 'Alexandra', 
    'Alison', 'Amanda', 
    'Angela', 'Bella',
    'Carol', 'Caroline', 
    'Carolyn', 'Deirdre', 
    'Diana', 'Elizabeth',
    'Ella', 'Faith', 
    'Olivia', 'Penelope'
  ];
});
console.log(results);
  