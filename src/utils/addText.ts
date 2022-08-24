import { Container, Text, TextStyle } from 'pixi.js'

export interface Options {
  text: string
  style?: {}
  x?: number
  y?: number
}

/**
 * 添加文字
 * @param options
 */
export default function addText(options: Options): Container {
  const { text, x = 0, y = 0, style } = options

  const textStyle = new TextStyle(style)

  const textContainer = new Text(text, textStyle)

  const container = new Container()
  container['x'] = x
  container['y'] = y

  container.addChild(textContainer)

  return container
}
