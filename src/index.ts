import { Application, Container, Sprite } from 'pixi.js'
import { DefaultOptions, InnerOptions, Options } from './types'
import addContainer, {
  Options as AddContainerOptions,
} from './utils/addContainer'
import addImage, { Options as AddImageOptions } from './utils/addImage'
import addText, { Options as AddTextOptions } from './utils/addText'
import getElementSize from './utils/getElementSize'
import pixijsInit from './utils/pixijsInit'
import qrcode, { Options as QrcodeOptions } from './utils/qrcode'
import userIcon, { Options as UserIconOptions } from './utils/userIcon'

const defaults: DefaultOptions = {}

export default class PixiUtils {
  public options: InnerOptions

  constructor(options: Options) {
    const innerOptions = { ...defaults, ...options }

    const { el } = innerOptions

    const { width, height } = getElementSize(el)

    this.options = { ...innerOptions, width, height }
  }

  app!: Application
  init(): Application {
    const { width, height, el } = this.options

    this.app = pixijsInit({
      width,
      height,
    })

    el.appendChild(this.app.view)

    return this.app
  }

  addImage(options: AddImageOptions, container?: Container): Sprite {
    const sprite = addImage(options)

    container ? container.addChild(sprite) : this.app.stage.addChild(sprite)

    return sprite
  }

  addContainer(options: AddContainerOptions): Container {
    const container = addContainer(options)

    this.app.stage.addChild(container)

    return container
  }

  addUserIcon(options: UserIconOptions): Container {
    const container = userIcon(options)

    this.app.stage.addChild(container)

    return container
  }

  async addQrcode(options: QrcodeOptions): Promise<Sprite> {
    const sprite = await qrcode(options)

    this.app.stage.addChild(sprite)

    return sprite
  }

  addText(options: AddTextOptions): Container {
    const container = addText(options)

    this.app.stage.addChild(container)

    return container
  }
}
