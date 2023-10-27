import './Loading.css'

const LoadingSmall = () => {
  return (
    <div className='loading flex items-center'>
      <svg width='40' height='40' viewBox='0 0 40 50'>
        <polygon stroke='black' strokeWidth='1' fill='none' points='20,1 40,40 1,40' />
      </svg>
    </div>
  )
}

export default LoadingSmall
