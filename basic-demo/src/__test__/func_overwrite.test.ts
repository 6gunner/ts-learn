function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);



function fn(x?: string): void;
function fn(x?: string) {
  // ...
  if (x) {
    console.log(x.toUpperCase());
  }
}
fn();


// 第一个函数签名
function add(a: number, b: number): number;
// 第二个函数签名
function add(a: string, b: string): string;

// 函数实现，参数类型用any，返回类型用any
function add(a: any, b: any): any {
  // 在实现里可以判断参数类型，做不同的处理
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
}
console.log(add(1, 2));       // 输出: 3
console.log(add('Hello, ', 'TypeScript!'));  // 输出: Hello, TypeScript!