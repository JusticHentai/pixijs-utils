import { Renderer } from 'pixi.js'

export interface Options {
  width: number
  height: number
}

export default function pixijsInit(options: Options): Renderer {
  const { width, height } = options

  return new Renderer({
    width,
    height,
  })
}
