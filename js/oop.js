
// Programación orientada a objetos: sirve para encapsular todas las características (atributos) y funcionalidades (métodos) que forman parte de una misma entidad:
const user = {
  firstName: 'Marina',
  lastName: 'Altés',
  username: 'mrnlts',
  age: 31,
  profession: 'Web developer',
  email: 'marina@gmail.com',
  password: 'Ironhack123',
  sayHi: function() {
    return `Hello! My name is ${this.firstName}`;
  },
  login: function (email, password) {
    if (email === this.email && password === this.password) {
      console.log('Login successful! Welcome back!');
    } else {
      console.log('Wrong credentials. Try again.');
    }
  }
}

// Podemos acceder a los métodos como hemos estado haciendo hasta ahora
// user.login('marina@gmail.com', 'Ironhack123');


// MEJOR APPROACH: usar clases
class User {
  // Constructor: Almacena esos elementos que le pasaré cuando cree un nuevo usuario
  constructor(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.isFree = true;
  }

  // Métodos: funcionalidades que tienen todos los objetos de tipo User
  sayHi() {
    console.log(`Hello! My name is ${this.name}`);
  }
  // Los métodos pueden recibir atributos desde fuera cuando alguien los llame
  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log('Login successful! Welcome back!');
    } else {
      console.log('Wrong credentials. Try again.');
    }
  }

  logout() {
    console.log(`Be back soon!`);
  }

}

// Instancias de la clase User
const marina = new User('Marina', 31, 'marina@gmail.com', 'Ironhack123');
const pepe = new User('Pepe', 54, 'pepe@hotmail.com', 'vivaelatleti');
marina.login('marina@gmail.com', 'Ironhack123');
marina.sayHi();
marina.logout();
pepe.sayHi();


// HERENCIA: Puedo crear una clase "hija" de otra con la palabra clave "extends", de forma que herede todos los métodos de forma automática
class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.sound}! ${this.sound}!`)
  }
}

const aria = new Animal('Aria', 'brown', 'woof');
aria.makeSound();

class Bird extends Animal{
  constructor(color, sound, beakColor, flyMax) {
    // Con la palabra super le digo qué elementos comparte con la función constructora de la clase padre para que haga lo mismo con ellos. Puedo añadir los que considere
    super(color, sound);
    this.name = 'Charlie';
    this.flyMax = flyMax;
    this.beakColor = beakColor;
  }
  // Polimorfismo: puedo reescribir un método en la clase hija
  makeSound() {
    console.log(`I'm a bird and I make this ${this.sound}!`)
  }
  
  flyToMaximumHeight(){
    console.log(`Yaay I'm flying at ${this.flyMax} meters!`)
  }
}

const charlie = new Bird('green', 'WRAAAAH', 'red', 1000);
charlie.makeSound();





