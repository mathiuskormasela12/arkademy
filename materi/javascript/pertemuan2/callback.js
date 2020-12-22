function sayHello(name, callback) {
  const greeting = `Hello my name is ${name}`;
  callback(greeting);
}

function showGreeting(str) {
  console.log(str);
}

sayHello('Mathius', showGreeting);