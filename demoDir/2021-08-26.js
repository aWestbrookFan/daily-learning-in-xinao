/*
*  sww
*  2021-08-26 14:05:54
* */

// 创建一个新数组，将array与任何数组 或 值连接在一起。
// _.concat
const _concat = (array, ...values) => {
    let result = [...array]
    values.forEach((value) => {
        result = [...result.concat(value)]
    })
    return result
}

console.log(_concat([1], 2, [[3]], 3))


//generator
function* generatorTest() {
    yield 1
    yield 2
    yield 3
}
let obj =  generatorTest()
console.log(obj.next())
