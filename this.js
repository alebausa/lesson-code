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


// THIS in arrow functions: lexical scope
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
  // Function methods => se une (bind) al objeto al que pertenece el método
  regularFunc: function() { 
    console.log(this);
    // arrow function will borrow `this` value from the surrounding scope
    // of `regularMethod` where it was created
    // let anotherFunction = () => {
    //   console.log(this);
    // }
    // return anotherFunction();
  }, 
  // Arrow function methods => pierde el this (Window / Global object) porque coge lexical scope = ¿dónde esta declarado el objeto? En window
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


class Person{
  constructor(name){
    this.name = name;
  }
  // Depende de dónde sea llamado con las funciones normales (setTimeout es llamado por window)
  printNameWithFunction() {
    setTimeout(function () { console.log(`Name: ${this.name}`)}, 500);
  }
  // Coge lexical scope (donde está creado => Dentro de Person / nueva instancia
  printNameWithArrow() {
    setTimeout(() => { console.log(`Name: ${this.name}`)}, 500);
  }
}

const bob = new Person('Bob');
// bob.printNameWithFunction();
// bob.printNameWithArrow();