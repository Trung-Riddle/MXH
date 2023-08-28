interface Props {
  width: string
  height: string
}

const Comment = ({ width, height }: Props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 40 40' fill='none'>
      <path
        d='M22.3828 16.4453C21.4805 16.4453 20.7812 17.1445 20.7812 18.0078C20.7812 18.8711 21.4805 19.5703 22.3828 19.5703C23.207 19.5703 23.9062 18.8711 23.9062 18.0078C23.9062 17.1445 23.207 16.4453 22.3828 16.4453ZM11.4453 16.4453C10.543 16.4453 9.84375 17.1445 9.84375 18.0078C9.84375 18.8711 10.543 19.5703 11.4453 19.5703C12.2695 19.5703 12.9688 18.8711 12.9688 18.0078C12.9688 17.1445 12.2695 16.4453 11.4453 16.4453Z'
        fill='#0B0F22'
      />
      <path
        d='M34.9223 13.4764C33.0434 10.8982 30.4184 9.17558 27.5395 8.39823V8.40214C26.8715 7.65995 26.1176 6.97636 25.2739 6.36698C18.8794 1.71854 9.9028 3.13651 5.23483 9.53104C1.47311 14.7264 1.63327 21.7146 5.46921 26.6795L5.50046 31.8592C5.50046 31.9842 5.51999 32.1092 5.55905 32.2264C5.76608 32.8865 6.46921 33.2498 7.12545 33.0428L12.0708 31.4842C13.3794 31.949 14.7309 32.2146 16.0747 32.2889L16.0551 32.3045C19.5356 34.8396 24.0981 35.6014 28.2817 34.2185L33.2465 35.8357C33.3715 35.8748 33.5005 35.8982 33.6333 35.8982C34.3247 35.8982 34.8833 35.3396 34.8833 34.6482V29.4139C38.3247 24.742 38.4145 18.285 34.9223 13.4764ZM12.6176 28.7107L12.1489 28.5154L8.28171 29.7264L8.24264 25.6639L7.93014 25.3123C4.62546 21.281 4.40671 15.4725 7.50046 11.2107C11.2661 6.04667 18.4848 4.90604 23.6333 8.63261C28.7973 12.3865 29.9419 19.5935 26.2114 24.7264C23.0825 29.0193 17.4809 30.6053 12.6176 28.7107ZM32.3442 28.0467L32.0317 28.4373L32.0708 32.4998L28.2426 31.2107L27.7739 31.406C25.5864 32.2185 23.2544 32.285 21.0942 31.6795L21.0864 31.6756C23.9731 30.7889 26.5903 28.992 28.477 26.406C31.4614 22.2928 31.9458 17.1248 30.2114 12.7185L30.2348 12.7342C31.1333 13.3787 31.9575 14.1834 32.6567 15.156C35.4926 19.0467 35.3325 24.3435 32.3442 28.0467Z'
        fill='#0C0F1D'
      />
      <path
        d='M16.9141 16.4453C16.0117 16.4453 15.3125 17.1445 15.3125 18.0078C15.3125 18.8711 16.0117 19.5703 16.9141 19.5703C17.7383 19.5703 18.4375 18.8711 18.4375 18.0078C18.4375 17.1445 17.7383 16.4453 16.9141 16.4453Z'
        fill='#0B0F22'
      />
    </svg>
  )
}

export default Comment
