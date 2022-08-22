import { Sprite } from 'pixi.js'

export interface Options {
  url: string
  width?: number
  height?: number
  anchor?: number
}

/**
 * 简单添加一张图片
 * @param options
 */
export default function addImage(options: Options): Sprite {
  const { url, width = 100, height = 100, anchor = 0.5 } = options

  const sprite = Sprite.from(url)

  sprite['width'] = width
  sprite['height'] = height
  sprite['anchor'].set(anchor)

  return sprite
}
