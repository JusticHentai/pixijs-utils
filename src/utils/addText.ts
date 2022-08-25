import { Container, Text, TextStyle } from 'pixi.js'

export interface Options {
  text: string
  style?: {
    fill: string // 字体颜色
    fontSize?: number // 字体大小
    breakWords?: boolean // 是否拆开单词换行
    wordWrap?: boolean // 是否换行
    wordWrapWidth?: number // 每行宽度
    // debug 使用显示文案线条
    textBaseline?:
      | 'alphabetic'
      | 'top'
      | 'hanging'
      | 'middle'
      | 'ideographic'
      | 'bottom'
  }
  x?: number
  y?: number
  debug?: boolean
}

/**
 * 添加文字
 * @param options
 */
export default function addText(options: Options): Container {
  const { text, x = 0, y = 0, style, debug = false } = options

  const textStyle = new TextStyle({
    textBaseline: debug ? 'bottom' : 'alphabetic',
    ...style,
  })

  const textContainer = new Text(text, textStyle)

  const container = new Container()
  container['x'] = x
  container['y'] = y

  container.addChild(textContainer)

  return container
}
