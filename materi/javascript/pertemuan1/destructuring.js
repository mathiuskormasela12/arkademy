const someObject = {
  firstName: 'Tatas',
  middleName: 'Fachrul',
  lastName: 'Aditya'
}
const someArray = ['1', '2', '3']

const { firstName, lastName, middleName } = someObject // Destructuring
const [ index1, index2, index3 ] = someArray

console.log(someObject.firstName) // Print sebagai Object
console.log(lastName) // Print sebagai String
console.log(index1)

const introductionName = `My name is ${someObject.firstName} from Depok`
console.log(introductionName)

const introName = 'My name is ' + someObject.firstName + ' from Depok'
console.log(introName)