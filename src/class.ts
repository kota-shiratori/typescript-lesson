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
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject");
    }
    return this._subject;
  }
  set subject(value) {
    if (!value) {
      throw new Error("There is no subject");
    }
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! ${this.name} ${this.age} ${this.subject}`);
  }
}
const teacher = new Teacher("Quill", 38, "Math");
