import { AvatarColor } from './static.data'
import { floor, random } from 'lodash'

export default class Utils {
  static randomAvatarColor() {
    return AvatarColor[floor(random(0.9) * AvatarColor.length)]
  }

  static generateAvatar(text: string, foregroundColor: string, backgroundColor: string) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    canvas.width = 200
    canvas.height = 200

    context.fillStyle = backgroundColor
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.font = 'bold 100px Poppins'
    context.fillStyle = foregroundColor
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    return canvas.toDataURL('image/png')
  }
}