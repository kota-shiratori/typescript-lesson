function copy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy({ name: "Quill" }));
type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(item: T) {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}

type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

interface ResponseData<T = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;
type MappedTypes = {
  [P in "tomato" | "pumpkin"]: P;
};

type ConditionalTypes = "tomato" extends string ? number : boolean;
