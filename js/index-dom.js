console.log(document);

// Select by id
const cat = document.getElementById('cat');
// className me permite leer clase 
// si lo asigno puedo cambiar la id o la clase (className)
// div.className = 'dog'

const myName = 'Elisa';
// innerHTML property
cat.innerHTML = `<h3>My name is ${myName}</h3>`


// Select class
const mice = document.getElementsByClassName('mouse');
const miceArr = Array.from(mice);
// miceArr.forEach(elem => console.log(elem))

// Select Tags
const heading = document.getElementsByTagName('h1')[0];
// style property
heading.style = "color: blue; text-decoration: underline;";
// camel case styles
heading.style.backgroundColor = "lightyellow";

// Devuelve 1
const cat2 = document.querySelector('#cat');

// Devuelve un NodeList
const hello = document.querySelectorAll('.mouse')
// console.log(hello);


// Añadir elementos a una lista de clases
cat.classList.add('doraemon');

// cat.classList.remove('garfield');
console.log(cat.classList.contains('doraemon'));

// Coge dos parámetros: clase que cambio y por cuál
cat.classList.replace('garfield', 'mimi');

const components = document.getElementsByTagName('div');
console.log(components)

// getAttribute
const linkAttribute = document.getElementById('link');
// Me devuelve el atributo que le pase
console.log(linkAttribute.getAttribute('href'));
// setAttribute aplica el atributo
linkAttribute.setAttribute('class', 'link');
// removeAttribute elimina el que le pases
linkAttribute.removeAttribute('href');

// Crear elementos
const heading3 = document.createElement('h3');
heading3.innerHTML = "I'm a heading!"
// Prepend añade al principio
cat.prepend(heading3);
// appendChild añade al final
//cat.appendChild(heading3)

const text = document.createTextNode('El texto que creas');
cat.appendChild(text);


