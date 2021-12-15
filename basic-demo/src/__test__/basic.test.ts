export { }

let a: any = 1
a = "some thing"
console.log(a)
let areUOk: boolean = true
let age: number = 26
let b: number = 1_000_000

let name: string = "kewudi"
let otherName: string = "wanglihong";

let sentence: string = `Hello, my name is ${name}. I'll be ${age + 1} years old next month`;

let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

let oneString: any = 'this is a string';
let stringLength: number = (oneString as string).length;

const symbol = Symbol();
const anotherSymbol = Symbol();

const symbol2 = Symbol("Hello")
let symbol3 = Symbol("Coda")
console.log(symbol3);

symbol3 = Symbol("sda")
// symbole可以修改的
console.log(symbol3);

test('测试ts', () => {
  expect(stringLength).toEqual(16);
  expect(symbol).not.toEqual(anotherSymbol);
  expect(symbol2.toString()).toEqual("Symbol(Hello)")
});
