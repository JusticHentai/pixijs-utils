/**
 * 外部初始化选项
 */
export interface Options {
  el: HTMLDivElement // 要挂载的 dom
}

/**
 * 默认选项
 */
export interface DefaultOptions {}

/**
 * 内部基础选项
 */
export interface BaseOptions {
  width: number // element 宽度
  height: number // element 高度
}

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & {
  [key: string]: any
} & BaseOptions

/**
 * 合并两个 interface
 * 冲突第二个覆盖第一个
 */
type Merge<
  Type1 extends { [Key: string]: any },
  Type2 extends { [Key: string]: any }
> = {
  [Key in keyof (Type1 & Type2)]: Key extends keyof Type2
    ? Type2[Key]
    : Key extends keyof Type1
    ? Type1[Key]
    : never
}
