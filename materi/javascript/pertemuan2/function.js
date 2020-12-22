const addition = (num1, num2) => {
  const result = num1 * num2;

  printResult(result);
}

const substraction = (num1, num2) => {
  const result = num1 - num2;

  printResult(result);
}

const printResult = result => {
  return console.log(`Hasilnya adalah ${result}`);
}

addition(3, 10);
substraction(10, 7);

const object = {
  function1: function(result) {
    const someWord = 'Hello Arkademy';
    return this.function2(someWord);
  },
  function2: function(result) {
    return console.log(result);
  }
};

object.function1()