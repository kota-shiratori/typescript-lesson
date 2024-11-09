class Person {
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! ${this.name} ${this.age}`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! ${this.name} ${this.age} ${this.subject}`);
  }
}
const teacher = new Teacher("Quill", 38, "Math");
