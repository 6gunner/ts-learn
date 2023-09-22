type Point = { x: number; y: number };
type P = keyof Point;


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number


const NumericObject = {
  [1]: "一号",
  [2]: "二号",
  [3]: "三号"
};
type KN = keyof typeof symbolToNumberMap; // typeof sym1 | typeof sym2 | typeof sym3


/// 对symbol对象用keyof
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol();

const symbolToNumberMap = {
  [sym1]: 1,
  [sym2]: 2,
  [sym3]: 3,
};

type KS = keyof typeof symbolToNumberMap; // typeof sym1 | typeof sym2 | typeof sym3


/// 
function useKey<T, K extends Extract<keyof T, string>>(obj: T, key: K) {
  let name: string = key
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m");