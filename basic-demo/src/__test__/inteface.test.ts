export { }

let fn1 = (a: number) => 0;
let fn2 = (b: number, s: string) => 0;


test("interface的相关测试", () => {
  fn2 = fn1; // 成功
  // fn1 = fn2; // 报错
})

type f1ReturnType = ReturnType<typeof fn1>
const num1: f1ReturnType = 0;
type f2ReturnType = ReturnType<typeof fn2>

function foo(x: number): Array<number> {
  return [x];
}
type fn = ReturnType<typeof foo>;
const array: fn = [1, 2, 3]


interface LabelledValue {
  label: string,
  size: number,
}
let myObj: LabelledValue = {
  label: "size 10 ",
}

console.log(myObj)

// interface的继承

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square
square.color = "blue"
square.sideLength = 10;

abstract class Department {
  constructor(public name: string) {

  }

  abstract printMetting(): void;
}

class AccountDepartment extends Department {

  printMetting(): void {
    console.log("测试Abstract Method");
  }

}

let department: AccountDepartment = new AccountDepartment("吴越府");