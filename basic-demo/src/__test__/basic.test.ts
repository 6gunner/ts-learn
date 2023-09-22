export { }

let a: any = 1
a = "some thing"
console.log(a)

/**
 * 基础类型
 */
let areUOk: boolean = true
let age: number = 26
let b: number = 1_000_000

let name: string = "kewudi"
let otherName: string = "wanglihong";
let sentence: string = `Hello, my name is ${name}. I'll be ${age + 1} years old next month`;

/**
 * 数组
 */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let oneString: any = 'this is a string';
let stringLength: number = (oneString as string).length;

/**
 * Symbol对象
 */
const symbol = Symbol();
const anotherSymbol = Symbol();
// console.log(symbol == anotherSymbol)

const symbol2 = Symbol("Hello")
console.log(symbol2.toString());

let symbol3 = Symbol("Coda")
console.log(symbol3);
symbol3 = Symbol("sda")
// symbole可以修改的
console.log(symbol3);

/**
 * 对象类型
 */
function printCoord(pt: { x: number, y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 })

/**
 * bigint
 */
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);
console.log(oneHundred)
// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
console.log(anotherHundred)
console.log(oneHundred == anotherHundred)

test('测试ts', () => {
  expect(stringLength).toEqual(16);
  expect(symbol).not.toEqual(anotherSymbol);
  expect(symbol2.toString()).toEqual("Symbol(Hello)")
});
