interface Person {
  name: string
  age: number
  gender: string
  marriage: boolean
}
// Person的联合类型
// type pp = keyof Person
class Student {
  constructor(private info: Person) {}
  // T extends keyof Person 相当于 type pp = keyof Person
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}
const stu = new Student({
  name: '赵子龙',
  age: 56,
  gender: '男',
  marriage: false
})
const op = stu.getInfo('marriage')
console.log(op)
