async function testFunc(array: Array<Function>) {
  for (let i = 0; i < array.length; i++) {
    await array[i]();
  }
}

async function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

testFunc([
  () => console.log(1),
  () => sleep(1000),
  () => console.log(2),
  () => sleep(2000),
  () => console.log(3)
])

export { }
