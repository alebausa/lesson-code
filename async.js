function firstFunction() {
  console.log(1);
}

function secondFunction() {
  console.log(2);
}

function thirdFunction() {
  console.log(3);
}

// firstFunction();
// secondFunction();
// thirdFunction();


let counter = 1;
function callbackFunction() { // Crear una función que se llama a sí misma (función recursiva)
  console.log(counter);
  counter += 1;
  const timeout = setTimeout(callbackFunction, 1000);
  if (counter > 10) {
    clearTimeout(timeout);
  }
};
 
// setTimeout(callbackFunction, 1000);

// Vamos a crear el mismo ejemplo con un setInterval:

let intervalCounter = 0;
function countWithInterval() {
  console.log(intervalCounter);
  intervalCounter++;
  if (intervalCounter > 10) {
    clearInterval(counterInterval);
  }
}
// const counterInterval = setInterval(countWithInterval, 500);


// Clase
class Counter{
  constructor(){
    this.currentCount = 0;
    this.intervalId = null;
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.currentCount += 1;
      console.log(this.currentCount)
    }, 1000)
  }

  stop(){
    clearInterval(this.intervalId)
  }
}

const watch = new Counter();

