function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

// T P
function calu<T, P>(a: T, b: P) {
  return `${a}${b}`;
}

// T[]
function map<T>(arr: T[]) {
  return arr;
}

console.log(join<string>("b", "a"));
console.log(
  map<string | number>([1, 2, 3, 4])
);
console.log(calu(1, "2"));

// 泛型类
class Animal<T> {
  constructor(private kinds: T[]) {}
  getkinds(): T[] {
    return this.kinds;
  }
}
console.log(
  new Animal<string>(["s", "sdd"]).getkinds()
);

/**
 * [
 *    {
 *       name: 'dell',
 *        age: 23
 *    }
 * ]
 */
interface Item {
  name: string;
  age?: number;
}
class Child<T extends Item> {
  constructor(private arr: T[]) {}
  getItem(): T[] {
    return this.arr;
  }
}

const children = [
  {
    name: "tom",
    age: 21
  },
  {
    name: "jack"
  }
];
console.log(new Child(children).getItem());

class LL<T extends string | number> {
  constructor(private item: T[]) {}
  getItem(): T[] {
    return this.item;
  }
}
console.log(new LL([1, "222"]).getItem());
