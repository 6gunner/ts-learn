const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

function calcAngleDegrees(x: number, y: number) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}
const args = [5, 5] as const;
const angle = calcAngleDegrees(...args);
test("", () => {
  expect(angle).toEqual(45);
})

/// 返回void，但是不强制一定不能返回内容
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};


const v1 = f1();
console.log(v1);


const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));