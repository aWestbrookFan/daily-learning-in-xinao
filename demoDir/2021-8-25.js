//  将数组（array）拆分成多个 size 长度的区块，
// 并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
// const _chunk = (array, size = 1) => {
//     if (!Array.isArray(array)) return false
//     if (!array.length) return []
//     const _length = array.length
//     const result = []
//     const resultLength = Math.ceil(_length / size)
//     for (let i = 0; i < resultLength; i++) {
//         result.push([])
//     }
//     console.log(result)
//     array.forEach((item, index, arr) => {
//         const isBegin = Math.floor(++index % resultLength) + Math.floor(++index / resultLength)
//         result[isBegin - 1].push(item)
//     })
//     return result
// }
//
// console.log(_chunk([1, 2, 3, 3, 4, 5], 2))


// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
const _compact = (array) => {
    return array.filter((value) =>  value)
}
console.log(_compact([0, 1, false, 2, '', 3]))
