
let s = "hello";
let n: typeof s;
//string


/// 对对象使用
const person = { name: "kevin", age: 18 }
type Person = typeof person;
// type Person = {
//   name: string;
//   age: string;
// }
/// 对对象属性使用
type Age = typeof person['age'];


/// 对函数使用
function identity<Type>(arg: Type): Type {
  return arg;
}
type result = typeof identity;
// type result = <Type>(arg: Type) => Type


/// 一种比较巧妙的用法
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type P = typeof MyArray[number]
// type P = {
//   name: string;
//   age: number;
// }

// 结合ReturnType
type Fn = (x: unknown) => boolean;
type K = ReturnType<Fn>;
// type K = boolean

function f() {
  return {
    x: 10, y: 3
  }
}
type p = ReturnType<typeof f>
// type p = {
//   x: number;
//   y: number;
// }


export { }