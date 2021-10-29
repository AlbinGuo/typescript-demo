///<reference path='./Components.ts'/>

namespace Home {
  export class Page {
    user: Components.User = {
      name: '张三',
      age: 20
    }
    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.SubComponents.Container()
      new Components.Footer()
    }
  }
}
