import { Container, Graphics, Sprite } from 'pixi.js'

export interface Options {
  url: string // 图片 url
  diameter: number // 圆的半径
  x?: number // x轴位置
  y?: number // y轴位置
  anchor?: number | [number, number] // 中心描点
  interactive?: boolean // 是否允许点击行为
  buttonMode?: boolean // 鼠标悬停时指针是否为 pointer
}

/**
 * 简单添加一张图片
 * @param options
 */
export default function userIcon(options: Options): Container {
  const {
    url,
    diameter,
    x = 0,
    y = 0,
    anchor = 0,
    interactive = true,
    buttonMode = true,
  } = options

  // 新建一个组
  const container = new Container()
  container['x'] = x
  container['y'] = y
  container['interactive'] = interactive
  container['buttonMode'] = buttonMode

  // 新建一个精灵放图
  const icon = Sprite.from(url)
  icon['width'] = diameter
  icon['height'] = diameter
  if (typeof anchor === 'number') {
    icon['anchor'].set(anchor)
  } else {
    icon['anchor'].set(...anchor)
  }

  // 新建一个圆形遮罩
  const mask = new Graphics()
  const radius = diameter / 2
  mask.beginFill(0xffffff).drawCircle(radius, radius, radius).endFill()

  // 组装
  container.addChild(icon)
  container.addChild(mask)
  container['mask'] = mask

  return container
}
