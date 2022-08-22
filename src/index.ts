import { DefaultOptions, InnerOptions, Options } from './types'
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

  init(): PixiUtils {
    const { width, height } = this.options

    pixijsInit({
      width,
      height,
    })

    return this
  }
}
