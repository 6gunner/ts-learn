export { }

function* generator() {
  const who: string = yield;
  console.log("hello " + who)
}

const iterator = generator();
console.log(iterator.next());
console.log("我插入执行了 ")
console.log(iterator.next("Coda"))



function* generator2() {
  try {
    yield 1;
  } catch (error) {
    console.log(error.message);
  }
}

const iterator2 = generator2();
iterator2.next()
iterator2.throw(new Error("测试error情况"));


function* fib(max: number) {
  var
    t,
    a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  return;
}
function run(gen: any, num: number) {
  var g = gen.apply(null, [num]);
  function next() {
    var result = g.next();
    console.log(result)
    if (result.done) {
      return result.value;
    }
    return new Promise(((resolve, reject) => {
      resolve(null);
    })).then(() => {
      next();
    })
  }
  next();
}

// run(fib, 10);

test("", () => {

});