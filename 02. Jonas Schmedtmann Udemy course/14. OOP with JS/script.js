'use strict';
// // 1. New {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. Fuction automatically return {}
// const Person = function (firstName, birthYear) {
//   //Instance propertioes
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this because it will create and attach it to every single object. Instead, add the methot to the prototype of the Person constructior function
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const ivan = new Person('Ivan', 1990);
// const pesho = new Person('Pesho', 1992);
// const gosho = new Person('Gosho', 1988);
// console.log(ivan);
// console.log(pesho);
// console.log(gosho);
// console.log(ivan instanceof Person);

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// ivan.calcAge();
// console.log(ivan.__proto__);
// console.log(ivan.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo Sapiens';
// console.log(ivan);

// console.log(ivan.hasOwnProperty('firstName'));
// console.log(ivan.hasOwnProperty('species'));

// // Prototype of the Person
// console.log(ivan.__proto__);
// //Prototype of an Object (top of prototype chain)
// console.log(ivan.__proto__.__proto__);
// // Null since the Object is on the top of prototype chain
// console.log(ivan.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 8, 3, 8, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// //Challenge #1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();

// ///////////////////////////////////////////////////
// //////////////////////////////////////////////////
// // ES 6 Classes

// //class expression
// const PersonCl1 = class {};

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //All methods written outside of the constructor will be attached to the prototype of the object and not to the object itself
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hei there 👋');
//   }
// }

// const lily = new PersonCl('Lily Lily', 2000);
// console.log(lily);
// lily.calcAge();
// console.log(lily.age);

// console.log(lily.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

// lily.greet();

// //1. Classes are Not hoisted
// //2. Classes are first-class citizens
// //3. Classes are executed in strict mode

// //const tomas = new PersonCl('tomas', 1975);

// //Setter and Getter
// const account = {
//   owner: 'Ivan',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(move) {
//     this.movements.push(move);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// //Static Methods
// Person.hey = function () {
//   console.log('Hei there 👋');
// };

// PersonCl.hey();

// //Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//Inheritance
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
