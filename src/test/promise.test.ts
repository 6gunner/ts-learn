export { }

// const original = Promise.resolve(33);
// const cast = Promise.resolve(original);
// console.log(cast); // 
// cast.then(function (value) {
//   console.log('value: ' + value); // value: 33
// });
// console.log('original === cast ? ' + (original === cast)); // true 


// const thenableObj = {
//   then: (resolve, reject) => {
//     // 这里当做另一个executor来执行
//     console.log("我被执行了")
//     resolve("dadaasd");
//   }
// }

// const thenableObjTest = Promise.resolve(thenableObj);
// console.log(thenableObjTest); // 是一个promise对象   Promise { <pending> }
// thenableObjTest.then(value => {
//   console.log(value)
// })


test("", (done) => {
  // const p1 = new Promise((resolve, reject) => {
  //   resolve(1)
  // });
  // p1.then(res => {
  //   console.log(res)
  //   //then回调中可以return一个Promise
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(2)
  //     }, 1000);
  //   })
  // }).then().then(res => {
  //   console.log(res)
  //   //then回调中也可以return一个值
  //   return 3
  // }).then(res => {
  //   console.log(res)
  //   done();
  // })
  done();
});


new Promise(resolve => {
  resolve(1);
  Promise.resolve({
    then: function (resolve, reject) {
      console.log(2);
      resolve(3)
    }
  }).then(t => console.log(t))
  console.log(4);
}).then(t => console.log(t));

console.log(5);
