import { Sprite } from 'pixi.js'

export interface Options {
  url: string // 图片 url
  x?: number // x轴位置
  y?: number // y轴位置
  width?: number // 宽度
  height?: number // 高度
  anchor?: number | [number, number] // 中心描点
  tint?: number // 背景颜色
  interactive?: boolean // 是否允许点击行为
  buttonMode?: boolean // 鼠标悬停时指针是否为 pointer
}

/**
 * 简单添加一张图片
 * @param options
 */
export default function addImage(options: Options): Sprite {
  const {
    url,
    width = 100,
    height = 100,
    x = 0,
    y = 0,
    anchor = 0,
    tint,
    interactive = false,
    buttonMode = false,
  } = options

  const sprite = Sprite.from(url)

  sprite['x'] = x
  sprite['y'] = y
  sprite['width'] = width
  sprite['height'] = height
  sprite['interactive'] = interactive
  sprite['buttonMode'] = buttonMode

  if (typeof anchor === 'number') {
    sprite['anchor'].set(anchor)
  } else {
    sprite['anchor'].set(...anchor)
  }

  if (tint) {
    sprite['tint'] = tint
  }

  return sprite
}
