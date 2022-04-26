// VAR es function scoped
// Cuando está en un bloque (sin función), se vuelve global
  if (true) {
    var someVar = 'This is true';
  }
  // console.log(someVar);
// Let i const son block scoped



// Lexical scoping => Cómo JS va leyendo las variables desde el bloque pequeño
// hasta el grande y hasta el scope global

// Shadowing => El hecho de que dos variables se llamen igual pero en scopes diferentes
const number = 10;
function outerFunction() {
  const number = 15;
  function innerFunction() {
    let c = 30;
    console.log(number, c);
  }
  innerFunction()
}
// outerFunction();


// Hoisting: las variables var y las funciones declaradas con "function"
// se elevan y se inicializan como undefined

// console.log(message) // => undefined
var message = 'Message'; 

// console.log(secondMessage); // => Error
const secondMessage = 'Second message';


//thirdFunction(); // => Esta función la podemos invocar antes de que esté declarada por el hoisting
const thirdFunction = () => {
  let place = 'hoisting';
  console.log(`Hello from ${place}`)
}

// Object environment record: las variables declaradas con 'var' en el scope global se almacenan en el objeto window y lo contaminan
  if (true) {
    var a = 1;
  }
let c = 4;
const b = 2; // => las variables const y let no se almacenan en window
// econsole.log(window.a); // => 1































