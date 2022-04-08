class Fruit {
  public readonly name: string;
  constructor() {}
}
const fruit = new Fruit();
// fruit.name = "苹果";
console.log(fruit.name);

type isNumber<T> = T extends number ? true : false;
type res = isNumber<"s">;
