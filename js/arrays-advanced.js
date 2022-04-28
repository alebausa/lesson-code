// *********** Mutability & Immutability ********** //
let number = 12;
let number2 = number;
// Reasigno la copia a otro valor
number2 = 13;
console.log(number); // => No se modifican los dos
console.log(number2); // => No se modifican los dos


// Pero en cambio con los objetos:
let obj = {
  name: 'Michael',
}
let obj2 = obj;
obj2.name = 'Sarah'; // => Cambio una propiedad de uno de los dos
console.log(obj); // => Se modifican los dos, porque hacen referencia al mismo objeto
console.log(obj2); // => Se modifican los dos, porque hacen referencia al mismo objeto


// Y lo mismo ocurre con los arrays:
const arrOfObjects = [1,2,3]
const secondArray = arrOfObjects;
secondArray[0] = 4;
console.log(arrOfObjects);// => Se modifican los dos
console.log(secondArray);// => Se modifican los dos


// *********** DEEP COPY & SHALLOW COPY ********** //
// Maneras de hacer array shallow copies:
// 1. Spread operator:
const numbers = [1, 2, 3, 4];
let numbers2 = [...numbers]; // => Shallow copy pero solo tiene un nivel, no se modificará el valor de la variable original
const groups = [ 
	['Harry','Ron','Hermione'],
	['Draco','Crab','Goyle'],
	['Luna','Ginny','Neville']
];
const students = [...groups]; // => Shallow copy pero tiene dos niveles
groups[0][1] = 'Ronald'; // => Se modifican los dos arrays

// 2. Foor loop: también hace shallow copy
for (let i = 0; i < arrOriginal.length; i++){
  arr2.push(arrOriginal[i]);
}

// Métodos de object shallow copies:
// 1. Object assign: 
const objCopy = Object.assign({}, objOriginal);
// 2. For ... in:
for (let key in originaObject) {
  copyObject[key] = originalObject[key];
}
// 3. Spread operator:
const copyObject = {...originalObject}


// Métodos para hacer deep copies tanto para arrays como para objetos: son aquellos en los que genero dos elementos diferenciados, y si modifico la copia, no modifico el original y viceversa:
// 1. JSON.parse: no usar si tu objeto o array tiene dentro funciones, nulls, undefined, etc. se salta los elementos que no entiende (no primitivos)
const copyArr = JSON.parse(JSON.stringify(arrOriginal));

// 2. structuredCopy: funciona perfect pero no visible en todos los navegadores
const copyArray = structuredClone(arrOriginal)


// *********** MÉTODOS ********** //
// Método MAP: hace a cada elemento lo que le indico en la función de callback
// No modifica el array original
const array = [1, 2, 3];
const newArray = array.map(function (number) {
  return number * 2;
});

// Método REDUCE: sirve para sumar. El primer valor es el acumulador, el segundo es el value actual de esa iteración
const arr = [3,4,5,6];
const total = arr.reduce(function (acc, val) {
  // console.log(`accumulator is: ${acc}, value is: ${val}`);
  return acc + val;
});
// console.log(total)

// Combinación de map + reduce para conseguir el precio medio (average) de un carrito de la compra:
const shoppingCart = [
  {
    name: 'Backpack',
    price: 23
  },
  {
    name: 'Seeds',
    price: 2
  },
    {
    name: 'Cup',
    price: 34
  },
];
// Método MAP
const prices = shoppingCart.map((obj) => obj.price);
// console.log(prices);
const totalPrice = prices.reduce((acc, val) => acc + val);
// console.log(totalPrice);
const avg = totalPrice / shoppingCart.length;
// console.log(avg);


// MÉTODO FILTER: genera un nuevo array con los elementos que den true en la función de callback que le paso:
const cheapProducts = shoppingCart.filter((elem) => elem.price < 10);
// console.log(cheapProducts);
const getSeeds = shoppingCart.filter(function (product) {
  return product.name === 'Seeds'
})
// console.log(getSeeds);


// MÉTODO REVERSE
// Modifica el array original. No necesita parámetros
const numbers3 = [1, 2, 3, 4, 5];
const reversedNumbers = numbers3.reverse();
// Combinación de shallow copy con reverse para no modificar la array original:
const reversedNumbers2 = [...numbers3].reverse();
// console.log(reversedNumbers);
// console.log(numberArr);


// MÉTODO SORT
// Modifica el array original. La función de callback le indica si tiene que ordenar los elementos de forma acendente (a - b) o ascendente (b - a):
const numberArr = [19, 8, 19, 4, 55, 48];
// To sort numbers in ascendent order
const sortedArr = numberArr.sort((a, b) => a - b);
// To sort strings
const letters = ['b', 'c', 'a', 'd', 'z'];
letters.sort(function (a, b) {
  if (a < b) return -1; // a is less than b
  if (a > b) return 1; // a is greater than b
  if (a === b) return 0; // a equals b
})
console.log(letters);
// To sort objects by name
const dishes = [
  {
    name: 'Fish Casserole',
    price: 23.55,
  },
  {
    name: 'Steak',
    price: 54,
  },
  {
    name: 'Burguer',
    price: 12,
  },
  {
    name: 'Nuggets',
    price: 4,
  },
];

const sortedDishes = dishes.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    return 0;
  }
});
// console.log(sortedDishes);

