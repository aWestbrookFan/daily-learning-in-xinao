/*
 *  sww
 *  2021-09-26 11:48:29
 * */

const arr = [1, 2, 3, 4, 5]
for (const iterator of arr) {
  console.log(iterator)
}
arr[Symbol.iterator] = function* () {
  let idx = 1
  do {
    yield this[idx]
  } while ((idx += 2) < this.length)
}
for (const iterator of arr) {
  console.log(iterator)
}

arr.map((value) => {
  console.log(value)
})
