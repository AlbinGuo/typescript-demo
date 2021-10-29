// ES6模块化
declare module 'jquery' {
  interface Selctor {
    html: (html: string) => Selctor
  }

  // 混合类型
  export function $(selector: string): Selctor
  export function $(readyFunc: () => void): void

  export namespace $ {
    namespace fn {
      class init {}
    }
  }
}
