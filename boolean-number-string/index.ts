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

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee: {
  hot: boolean;
  size: CoffeeSize;
} = {
  hot: true,
  size: CoffeeSize.GRANDE,
};

let anything: any = true;
anything = "string";
anything = {};

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [10, 20, "hello"];

//Literal型はconst
const apple: "apple" = "apple";

//typeエイリアス
type ClothSize = "small" | "medium" | "large";
let clothSize: ClothSize = "large";
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "small",
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}
