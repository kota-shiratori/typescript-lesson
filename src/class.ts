class Person {
  constructor(public readonly name: string, private age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! ${this.name} ${this.age}`);
  }
}

const quill = new Person("Quill", 38);
quill.greeting();
quill.incrementAge();
