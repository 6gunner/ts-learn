// 字面量类型

let changingString = "Hello World";
changingString = "Olá Mundo";
// let changingString: "string"

const constantString = "Hello World";
// const constantString: "Hello World"

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("Hello, world", "top");

/**
 * 和非字面量类型联合
 */
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic");


declare function handleRequest(url: string, method: "GET" | "POST"): void;

// 类型“string”的参数不能赋给类型“"GET" | "POST"”的参数。ts(2345)
// const req = { url: "https://example.com", method: "GET" };
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method);

const req2 = { url: "http://example.com", method: "GET" } as const;
handleRequest(req2.url, req2.method);
