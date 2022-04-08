interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  say(): string;
  [propsName: string]: any;
}

const getPersonName = (person: Person): string => {
  return person.name;
};

const setPersonName = (person: Person, name: string, age: number): void => {
  person.name = name;
  person.age = age;
  console.log(person);
};

const p = {
  name: "dell",
  sex: 1,
  say() {
    return "say hello";
  }
};
getPersonName(p);
setPersonName(p, "tom", 12);

interface SayHi {
  (word: string): string;
}
const say: SayHi = (word: string) => {
  return word;
};
