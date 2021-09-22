/*
 *  sww
 *  2021-09-17 09:38:23
 * */

// 理解一下 本质上bind() 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 this 值
const module1 = {
  x: 42,
  getX: function () {
    console.log([...arguments])
    return this.x
  }
}

const unboundGetX = module1.getX
console.log(unboundGetX()) 

const boundGetX = unboundGetX.bind(module1, 'testVal')
console.log({ a: boundGetX })
