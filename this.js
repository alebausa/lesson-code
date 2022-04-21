// THIS es una propiedad del contexto de ejecución
// Hace referencia al objeto al que pertenece la función en el momento de ser invocada (NO CREADA)

// THIS in the global scope:
// console.log(this);


// THIS in a function, because the window calls the function
function myFunction() {
  console.log(this);
}
// myFunction();



// THIS in a nested function, because the window calls the function
function outerFunction() {
  console.log('Outer function', this);
  function innerFunction() {
    console.log('Inner function', this);
    function secondLevelFunction() {
      console.log('Second level function', this);
    }
    secondLevelFunction()
  }
  innerFunction();
}
// outerFunction();


// THIS in arrow functions:
const anotherFunction = () => {
  const callMeMaybe = () => {
    console.log(this);
  }
  callMeMaybe()
}
// anotherFunction()



// THIS in object methods:
const user = {
  name: 'Marco Polo',
  age: 5,
  // Function methods => al objeto al que pertenece
  regularFunc: function() { 
    console.log(this);
  }, 
  // Arrow function methods => pierde el this (Window / Global object)
  arrowFunc: () => {
    console.log(this);
  },
  address: {
    street: 'Fake Street',
    number: 3,
    // Nested objects => Al objeto al que pertenece el nested object
    nestedFunc: function () {
      console.log(this)
    }
  }
}

//user.regularFunc();
//user.arrowFunc();
//user.address.nestedFunc();


// THIS in CLASS method => apunta a cada una de las instancias de la clase
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this);
  }
  otherMethod() {
    this.sayHi()
  }
}

const pepe = new User('Pepe')
//pepe.sayHi()

const marina = new User('Marina')
//marina.sayHi();