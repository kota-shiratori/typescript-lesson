"use strict";
function copy(value) {
    return value;
}
console.log(copy({ name: "Quill" }));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get(item) {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
const tmpDatabase = {
    id: 3,
    data: [32],
};
let tmp2;
