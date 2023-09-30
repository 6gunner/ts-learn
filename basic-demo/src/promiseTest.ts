function testFunc(array: Array<Function>):void {
  let i = 0;
  const nextPromise = () => {
    if (i >= array.length) {
      return;
    }
    // 核心思路是利用Promise.resolve方法:
    // 如果是一个同步方法，直接返回
    // 如果是异步方法，会跟踪进去
    const newPromise = Promise.resolve(array[i]());
    i++;
    return newPromise.then(nextPromise)
  }
  Promise.resolve().then(nextPromise)
}


function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time) 
  })
}

testFunc([
  () => console.log(1),
  () => sleep(1000),
  () => console.log(2),
  () => sleep(2000),
  () => console.log(3)
])


export {}