"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! ${this.name} ${this.age}`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    explainJob() {
        console.log(this.subject);
    }
    get subject() {
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
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
