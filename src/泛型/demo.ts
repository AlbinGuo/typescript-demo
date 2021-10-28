function join<T>(first: T, second: T) {
  return `${first}${second}`
}

function join2<T, E>(first: T, second: E) {
  console.log('first:', typeof first)
  console.log('second', typeof second)
  if (typeof first === 'number' && typeof second === 'number') {
    return first + second
  } else {
    return `${first}${second}`
  }
}

function anotherJoin<T, E>(first: T, second: E): T {
  return first
}

// T[] 或 Array<T>效果一致
function map<T>(params: T[]) {
  console.log('params', params)
  return params
}

// join<string>('1', '2')
const rst = join2<number, string>(4, '3') // join2(4, 3)不写类型也可以->类型推断
console.log('rst=', rst)
anotherJoin(2222, 0)
// map<string>(['11'])
