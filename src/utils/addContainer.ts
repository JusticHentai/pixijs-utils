import { Container } from 'pixi.js'

export interface Options {
  x?: number
  y?: number
}

/**
 * 新建一个 container
 * @param options
 */
export default function addContainer(options: Options): Container {
  const { x = 0, y = 0 } = options

  const container = new Container()

  container['x'] = x
  container['y'] = y

  return container
}
