/*
 *  sww
 *  2021-09-24 14:37:58
 * */
const testPromise = new Promise(function (resolved, rejected) {
  setTimeout(() => {
    resolved('swsw')
  }, 3000)
})
testPromise.then((res) => {
    console.log(res)
})



function myPromise(fn){
    
}
// 手写一个 promise

