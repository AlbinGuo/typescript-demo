namespace Home {
  class Header {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a header text'
      document.body.appendChild(ele)
    }
  }
  class Content {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a content text'
      document.body.appendChild(ele)
    }
  }
  class Footer {
    constructor() {
      const ele = document.createElement('div')
      ele.innerText = 'this is a footer text'
      document.body.appendChild(ele)
    }
  }
  export class Pager {
    constructor() {
      new Header()
      new Content()
      new Footer()
    }
  }
}
