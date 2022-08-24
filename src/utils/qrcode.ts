import { Sprite } from 'pixi.js'
// @ts-ignore qrcode 没 dts
import Qrcode from 'qrcode'

export interface Options {
  url?: string // 二维码的链接
  x?: number // x轴位置
  y?: number // y轴位置
  width?: number // 宽度
  height?: number // 高度
  anchor?: number | [number, number] // 中心描点
  interactive?: boolean // 是否允许点击行为
  buttonMode?: boolean // 鼠标悬停时指针是否为 pointer
  // 额外的 query
  query?: {
    [key: string]: any
  }
}

/**
 * 简单添加二维码
 * @param options
 */
export default async function qrcode(options: Options): Promise<Sprite> {
  const {
    url = location.href,
    width = 100,
    height = 100,
    x = 0,
    y = 0,
    anchor = 0,
    interactive = false,
    buttonMode = false,
    query,
  } = options

  const resUrl = getUrl(url, query) // 转换 url
  const resQrcode = await createQrcode(resUrl) // 获取 二维码 canvas

  // 组装
  const sprite = Sprite.from(resQrcode)

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

  return sprite
}

/**
 * 转换url
 * @param url
 * @param queryList
 */
function getUrl(url: string, queryList?: { [key: string]: any }) {
  if (!queryList) {
    return url
  }

  let resQuery = ''
  for (const query in queryList) {
    resQuery = `${resQuery}&${query}=${queryList[query]}`
  }

  // 判断前缀
  const haveQuery = /[?].+$/g.test(url)
  const prefix = haveQuery ? '&' : '?'
  resQuery = resQuery.replace(/^[&]/g, prefix)

  return `${url}${resQuery}`
}

/**
 * 生成二维码 canvas
 * @param url
 */
async function createQrcode(url: string) {
  return await Qrcode.toCanvas(url, {
    errorCorrectionLevel: 'L',
    margin: 0,
  })
}
