import { Application } from 'pixi.js'
import { DefaultOptions, InnerOptions, Options } from './types'
import addImage, { Options as AddImageOptions } from './utils/addImage'
import getElementSize from './utils/getElementSize'
import pixijsInit from './utils/pixijsInit'

const defaults: DefaultOptions = {}

export default class PixiUtils {
  public options: InnerOptions

  constructor(options: Options) {
    const innerOptions = { ...defaults, ...options }

    const { el } = innerOptions

    const { width, height } = getElementSize(el)

    this.options = { ...innerOptions, width, height }
  }

  renderer!: Application
  init(): PixiUtils {
    const { width, height, el } = this.options

    this.renderer = pixijsInit({
      width,
      height,
    })

    console.log(this.renderer)

    el.appendChild(this.renderer.view)

    return this
  }

  addImage(options: AddImageOptions) {
    const sprite = addImage(options)

    this.renderer.stage.addChild(sprite)
  }
}
