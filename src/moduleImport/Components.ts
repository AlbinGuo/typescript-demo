export class Header {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = '使用AMD规范引入module，Header'
    document.body.appendChild(ele)
  }
}

export class Footer {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = '===底部区域==='
    document.body.appendChild(ele)
  }
}
