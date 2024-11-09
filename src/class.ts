class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: {name: string}) {
    console.log(`Hello! ${this.name}`);
  }
}

const quill = new Person('Quill');
console.log(quill);
const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting
}
anotherQuill.anotherGreeting();