class Person {
  name = "guoguo";
  height: number;
  protected getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getName() {
    console.log(super.getName());
    return "guonan";
  }
  getTeacherName() {
    return "teacher";
  }
}

console.log(new Teacher().getName());
console.log(new Teacher().getTeacherName());

class aaa{
  getss(){
    new Person().
  }
}
