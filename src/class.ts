abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! ${this.name} ${this.age}`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
    private static instance: Teacher;
  explainJob(): void {
    console.log(this.subject);
  }
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
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  static getInstance() {
    if(Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher('Quill', 38, 'Math');
    return Teacher.instance;
  }
}
const teacher = Teacher.getInstance();
