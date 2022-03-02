/*
 *  sww
 *  2021-09-29 14:29:45
 * */

// reduce 方法 对数组中每个元素执行一个由您 提供的reducere函数(升序执行)，将结果汇总为单个返回值
const array = [1, 2, 3, 4, 5]
const array1 = array.reduce((previousValue, currentValue) => {
  return [previousValue].concat(currentValue)
},1000)
console.log(array1)


const symbolInstance = Symbol('instance')
const symbolTest = {
     age:12,
    [symbolInstance]:'swsw'
}

// 对象的
console.log(symbolTest)
console.log(symbolTest[symbolInstance])

for (const key in array) {
    console.log(array[key])
}
