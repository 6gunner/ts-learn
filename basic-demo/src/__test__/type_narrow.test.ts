/**
 * 类型收窄
 */

/// 通过instanceof收窄
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x);
  }
}

logValue(new Date());
logValue(new Date().toLocaleDateString());


/// 
interface Square {
  kind: "square";
  sideLength: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
interface Rectange {
  kind: "rectang";
  width: number;
  length: number;
}
interface Triangle {
  kind: "triangle";
  bottomWidth: number;
  height: number;
}
type Shape = Square | Circle | Rectange | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectang":
      return shape.width * shape.length;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(getArea({
  kind: "circle",
  radius: 4
}));
console.log(getArea({
  kind: "triangle",
  bottomWidth: 4,
  height: 3,
}));


function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) { }
}