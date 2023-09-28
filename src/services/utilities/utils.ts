export default class Utils {
  static generateAvatar(text: string, foregroundColor: string = 'white', backgroundColor: string = '#009578') {
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
