/*
 *  sww
 *  2021-09-23 10:12:49
 * */
const Person = {
  name: '',
  age: '',
  Cname: () => {},
  Cage: () => {}
}
console.log(Person)

const a = Object.create(Person)
console.log(a)
console.log(Object.getPrototypeOf(a))