function CustomtString(target: Function) {
  target.prototype.toString = function () {
    return JSON.stringify(this);
  };
}

@CustomtString
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("zhangsan", 18);

console.log(p1.toString());
