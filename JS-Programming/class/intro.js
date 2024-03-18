class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  // Calling the greet method on the instances
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
  