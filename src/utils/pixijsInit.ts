import { Application } from 'pixi.js'

export interface Options {
  width: number
  height: number
}

/**
 * 创建一个 renderer
 * @param options
 */
export default function pixijsInit(options: Options): Application {
  const { width, height } = options

  return new Application({
    width,
    height,
    resolution: window.devicePixelRatio || 1, // 像素比率
    antialias: true, // 是否抗锯齿 某些地方可能有坑
    autoDensity: true, // 有 1 以下的像素比率
    backgroundAlpha: 0, // 背景不透明度
  })
}
