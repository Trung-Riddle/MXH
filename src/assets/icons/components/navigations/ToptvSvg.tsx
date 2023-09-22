import Props from '../../type'

const ToptvSvg = ({ width, height }: Props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 40 40' fill='none'>
      <path
        d='M7.33105 7.33051C14.3277 0.333841 25.6727 0.333841 32.6694 7.33051C39.6661 14.3272 39.6661 25.6722 32.6694 32.6688C25.6727 39.6655 14.3277 39.6655 7.33105 32.6688'
        stroke='#1B1D2A'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28.3333 20.0001L15 12.3018V27.6984L28.3333 20.0001Z'
        stroke='#1B1D2A'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ToptvSvg
