export { };

/**
 * 
 * @param fn s:string=>void
 */
function greeter(fn: (s: string) => void) {
  fn("hello");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

/// 定义一个function type
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn("你好");
}
greeter2(printToConsole);

/// 调用签名
type DescribableFunction = {
  description: string;
  (someArg: string): boolean;
}
function doSomeThing(fn: DescribableFunction) {
  console.log(fn.description + "returned " + fn("yes"));
}
function yesOrNoFn(someArg: string): boolean {
  return someArg === "yes";
}
// 在函数上添加description属性
yesOrNoFn.description = "This function determines if a string equals 'yes'.";

doSomeThing(yesOrNoFn);

/// 构造函数
interface SomeObj {
}
type SomeConstructor = {
  new(s: string): SomeObj
}
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

/// 函数泛型
function firstElement<T>(arrs: T[]): T | undefined {
  return arrs[0];
}
var alphas: string[] = ["1", "2", "3", "4"]
console.log(firstElement(alphas));

function map<InputType, OutputType>(array: InputType[],
  fn: (s: InputType) => OutputType): OutputType[] {
  return array.map(fn);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
test("", () => {
  expect(parsed).toEqual([1, 2, 3])
})


/// 泛型约束
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// fixme: 类型“number”的参数不能赋给类型“{ length: number; }”的参数。ts(2345)
// const longerNum = longest(100, 2000);