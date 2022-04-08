class Demo {
  private static instance: Demo;

  private constructor(public name: string) {}

  static getInstance(): Demo {
    if (!this.instance) {
      this.instance = new Demo("guoguo");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1);
console.log(demo2);
