function sum(a, b) { 
  return a + b;
}

const sum2 = (a, b) => {
  console.log(a)
  return a + b
};


function isPositive(num) {
  return num >= 0;
}

const isPositive2 = num => num >= 0;

function randomNum() {
  return Math.random();
}

const randomNum2 = () => Math.random();
randomNum2();

const array = [1, 2, 3];

// array.forEach(function(elem) {
//   console.log(elem);
// });

// const printConsole = (elem) => console.log(elem)
// array.forEach(function (elem) { console.log(elem) });

