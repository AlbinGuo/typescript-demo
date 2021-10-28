// 使用泛型之前
class DataManager {
  constructor(private data: string[] | number[]) {}
  getItem(index: number) {
    return this.data[index]
  }
}

// 使用泛型
class DataManager2<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}

interface Item {
  name: string
  gender?: number
}

// 泛型继承
class DataManager3<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}

// 泛型类型约束
class DataManager4<T extends string | number> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}

// 匿名函数泛型【如何使用泛型作为一个具体的类型注解】
function hello<T>(param: T): T {
  return param
}
const fn: () => string = () => '11'
const fn2: <T>(param: T) => T = hello
const fn3: <T>() => string = <T>() => {
  return '123456'
}

const data = new DataManager(['111'])
console.log(data.getItem(0))
const data2 = new DataManager2<string>(['222'])
console.log(data2.getItem(0))
const data3 = new DataManager3([
  {
    name: '豹子头-林冲'
  }
])
console.log(data3.getItem(0))
const data4 = new DataManager4<string>(['444'])
console.log(data4.getItem(0))
