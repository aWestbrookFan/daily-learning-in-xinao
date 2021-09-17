/*
 *  sww
 *  2021-08-31 09:49:36
 * */
// 个人分析: 传入promise里面的函数会执行
//  打印 1、2 当resolve()执行时候 从pending变为fulfilled 此时状态进行改变
//  then 作为微任务可执行 放入事件队列中 继续执行同步代码 打印出 4 最后打印3
// 1 2 4 3
const promise = new Promise((resolve) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(()=> { 
    console.log(3)
})
console.log(4)

// 个人分析
// 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，
// 只有两种可能：从pending变为fulfilled和从pending变为rejected。
// 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
// 所以：结果是 then: success1
const promise = new Promise((resolve)=>{ 
    resolve('success1')
    reject('error')
    resolve('success2')
})

promise.then((res)=>{ 
    console.log('then:',res)
}).catch((err)=> { 
    console.log('catch:',err)
})


