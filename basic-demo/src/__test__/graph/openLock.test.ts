import openLock from '../../graph/bfs/openLock';





test("LCR 109. 打开转盘锁", () => {
  // let deadends = ["0201", "0101", "0102", "1212", "2002"];
  // let target = "0202";
  // const result = openLock(deadends, target);
  // console.log(result)

  let deadends = ["0000"]
  let target = "8888"
  const result2 = openLock(deadends, target);
  console.log(result2)
})

