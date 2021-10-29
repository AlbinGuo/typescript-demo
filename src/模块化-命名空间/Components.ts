namespace Components {
  export namespace SubComponents {
    export class Container {
      constructor() {
        const container = document.createElement('span')
        container.innerText = '容器区域子使用命名空间'
        container.style.color = 'red'
        document.body.appendChild(container)
      }
    }
  }

  /**
   * 命名空间中定义的类型约束
   */
  export interface User {
    name: string
    age?: number
  }

  export class Header {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a header text'
      document.body.appendChild(ele)
    }
  }
  export class Content {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a content text'
      document.body.appendChild(ele)
    }
  }
  export class Footer {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a footer text'
      document.body.appendChild(ele)
    }
  }
}
