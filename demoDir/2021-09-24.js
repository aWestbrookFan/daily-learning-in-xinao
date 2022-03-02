/*
 *  sww
 *  2021-09-24 14:37:58
 * */
// const testPromise = new Promise(function (resolved, rejected) {
//     setTimeout(() => {
//         resolved('swsw')
//     }, 3000)
// })
// testPromise.then((res) => {
//     console.log(res)
// })

// 异步执行的话  存储then中成功的回调函数、和存储then中失败的函数
function MyPromise(executor) {
    let _self = this
    //resolved 或者 rejected 里面的值
    this.value = undefined
    this.reason = undefined
    this.status = 'pending'
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    function resolved(value) {
        if (_self.status === 'pending') {
            _self.value = value
            _self.status = 'resolved'
            _self.onResolvedCallbacks.forEach(fn => fn());
        }
    }

    function rejected(value) {
        if (_self.status === 'pending') {
            _self.reason = value
            _self.status = 'rejected'
            self.onRejectedCallbacks.forEach(fn => fn());
        }
    }
    executor(resolved, rejected)
}

MyPromise.prototype.then = function(onFulfilled,onRejected){
    let _self = this
    //同步代码
    if (_self.status === 'resolved'){
        onFulfilled(_self.value)
    }
    if (_self.status === 'rejected'){
        onRejected(_self.reason)
    }
    if (_self.status === 'pending'){
        _self.onResolvedCallbacks.push(()=>{onFulfilled(_self.value)})
        _self.onRejectedCallbacks.push(()=>{onRejected(_self.reason)})
    }
}





let aaa = new MyPromise(function (resolved,rejected) {
    setTimeout(()=>{
        resolved('swswsss')
    },1000)
})
aaa.then((res)=>{console.log(res)},(rejectedResult)=>{console.log(rejectedResult)})
// console.log(aaa)
//
// setTimeout(()=>{
//     console.log(aaa)
// },2000)


// class MyPromise{
//     constructor() {
//
//     }
// }
// 手写一个 promise

