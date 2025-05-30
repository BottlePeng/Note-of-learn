//这是注释
console.log("Hello World");

let a;
a = 1; //let用于声明变量,可以先声明后赋值,且后续可修改

const b = 2; //const用于声明常量,必须在声明时赋值后续不可修改

//String,Number,Boolean,null,undefined(未定义)
const username = "John";
const age = 30;
const rate = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof age); //typerof语句用来显示变量类型
console.log(typeof rate);

//连接
console.log("My name is " + username + " and I am " + age + ".");
console.log(`My name is ${username} and I am ${age}.`); //连接需要使用``包裹
const hello = `My name is ${username} and I am ${age}.`; //连接可以赋值
console.log(hello);

//数组
const numbers = new Array(1, 2, 3, 4, 5, "name"); //使用Array定义数组
const fruits = ["apples", "oranges", "pears", 10, true]; //使用[]直接定义数组,可以在数组中添加不同类型的变量

console.log(numbers);
console.log(fruits);

//对象
const person = {
  firstname: "john", //使用键值对描述属性,属性可以说任意类型
  lastname: "Doe",
  age: 30,
  hobebies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Bostion",
    state: "MA",
  },
};

person.email = "john@email.com"; //可以使用"."+"属性名"给对象添加属性

console.log(
  person.firstname,
  person.lastname,
  person.hobebies[1],
  person.address.city,
  person.email
);

const {
  firstname,
  lastname,
  address: { city },
} = person; //可以使用{}包裹的变量名抽取出对象中的值

console.log(firstname, city);

//对象数组
const todos = [
  {
    id: 1,
    text: "Take out trash.",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss.",
    isCompleted: true,
  },
  {
    id: 3,
    text: "干掉他",
    isCompleted: false,
  },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); //JSON.stringify方法可以将数组对象转变为json格式
console.log(todoJSON);

//if语句
const num1 = 10;

if (num1 === "10") {
  //===表示数值与数据类型均相同
  console.log("yes");
} else if (num1 == 10) {
  //==表示数值相同,忽略数据类型
  console.log("yes");
}

//三目运算符
const num2 = 9;

const color = num2 > 10 ? "red" : "bule"; //?前为判断条件,后面的接条件成立时的赋值,:后接剩余判断

console.log(color);

//switch语句
switch (color) {
  case "bule":
    console.log("color is bule");
    break;
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("color is not red or bule");
}

//for 和 while 循环
//for
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
for (let todo of todos) {
  //使用of遍历数组
  console.log(todo.text);
}

//while
let i = 0;
while (i < 10) {
  console.log(++i);
}
