interface Bird {
  fly: string
  sing: () => {}
}

interface Dog {
  fly: string
  bark: () => {} // 叫喊
}

// 联合类型
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    ;(animal as Bird).sing()
  } else {
    ;(animal as Dog).bark()
  }
}

// 使用in语法进行类型保护
function trainAnimalSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}

// 使用typeof进行类型保护
function add(first: string, second: number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 使用instanceof进行类型保护
class NumberObj {
  count: number = 0
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}
