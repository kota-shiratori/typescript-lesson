let hasValue: boolean = true;
let count: number = 10;
let single: string = "hello";

const person: {
  name: {
    first: string;
    last: string;
  };
  age: number;
} = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};

const fruits: string[] = ["Apple", "Banana", "Grape"];

const book: [string, number, boolean] = ["business", 1500, true];
