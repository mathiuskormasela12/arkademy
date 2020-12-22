const someWord = 'Testing'
const constantWord = 174
const someBoolean = true
const someFunction = function(){
  return true
}
const someObject = {
  firstName: 'Tatas',
  middleName: 'Fachrul',
  lastName: 'Aditya'
}
const someArray = ['1', '2', '3']
const someSymbol = Symbol()

console.log(typeof(someWord))
console.log(typeof(constantWord))
console.log(typeof(someBoolean))
console.log(typeof(someFunction))
console.log(typeof(someObject))
console.log(typeof(someSymbol))

someObject.lastName = 'Arta'
console.log(someObject)