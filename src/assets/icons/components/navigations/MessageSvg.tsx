import { NavigationProps } from '../../type'

const MessageSvg = ({ height, width, active }: NavigationProps) => {
  return active ? (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 42 42' fill='none'>
      <path
        d='M19.0313 21C19.0313 21.5221 19.2387 22.0229 19.6079 22.3921C19.9771 22.7613 20.4779 22.9688 21 22.9688C21.5221 22.9688 22.0229 22.7613 22.3921 22.3921C22.7613 22.0229 22.9687 21.5221 22.9687 21C22.9687 20.4779 22.7613 19.9771 22.3921 19.6079C22.0229 19.2387 21.5221 19.0312 21 19.0312C20.4779 19.0312 19.9771 19.2387 19.6079 19.6079C19.2387 19.9771 19.0313 20.4779 19.0313 21ZM27.2343 21C27.2343 21.5221 27.4417 22.0229 27.8109 22.3921C28.1801 22.7613 28.6809 22.9688 29.203 22.9688C29.7252 22.9688 30.2259 22.7613 30.5951 22.3921C30.9643 22.0229 31.1717 21.5221 31.1717 21C31.1717 20.4779 30.9643 19.9771 30.5951 19.6079C30.2259 19.2387 29.7252 19.0312 29.203 19.0312C28.6809 19.0312 28.1801 19.2387 27.8109 19.6079C27.4417 19.9771 27.2343 20.4779 27.2343 21ZM10.8283 21C10.8283 21.5221 11.0357 22.0229 11.4049 22.3921C11.7741 22.7613 12.2748 22.9688 12.797 22.9688C13.3191 22.9688 13.8199 22.7613 14.1891 22.3921C14.5583 22.0229 14.7657 21.5221 14.7657 21C14.7657 20.4779 14.5583 19.9771 14.1891 19.6079C13.8199 19.2387 13.3191 19.0312 12.797 19.0312C12.2748 19.0312 11.7741 19.2387 11.4049 19.6079C11.0357 19.9771 10.8283 20.4779 10.8283 21ZM37.9474 13.8797C37.0205 11.6771 35.6916 9.7002 33.9977 8.00215C32.3156 6.31393 30.3188 4.972 28.1202 4.05234C25.8644 3.10488 23.4691 2.625 21 2.625H20.918C18.4325 2.6373 16.0249 3.12949 13.7608 4.09746C11.5811 5.02655 9.60298 6.37086 7.93669 8.05547C6.25917 9.74941 4.94259 11.7182 4.03205 13.9125C3.0887 16.1848 2.61293 18.6006 2.62523 21.0861C2.63915 23.9345 3.31302 26.741 4.59396 29.2852V35.5195C4.59396 36.0199 4.79273 36.4998 5.14656 36.8536C5.50038 37.2075 5.98027 37.4062 6.48065 37.4062H12.7191C15.2632 38.6872 18.0696 39.3611 20.918 39.375H21.0041C23.4609 39.375 25.8439 38.8992 28.0874 37.9682C30.2749 37.0595 32.2643 35.7332 33.9444 34.0635C35.6383 32.3859 36.9713 30.4254 37.9023 28.2393C38.8703 25.9752 39.3625 23.5676 39.3748 21.082C39.3871 18.5842 38.9031 16.1602 37.9474 13.8797ZM31.7501 31.8445C28.8749 34.691 25.0605 36.2578 21 36.2578H20.9303C18.4571 36.2455 16.0003 35.6303 13.8306 34.4736L13.486 34.2891H7.71111V28.5141L7.52654 28.1695C6.36991 25.9998 5.75469 23.543 5.74238 21.0697C5.72598 16.9805 7.28865 13.1414 10.1556 10.2498C13.0185 7.3582 16.8452 5.75859 20.9344 5.74219H21.0041C23.0549 5.74219 25.0441 6.14004 26.9185 6.92754C28.7478 7.69453 30.3884 8.79785 31.7993 10.2088C33.2061 11.6156 34.3135 13.2604 35.0805 15.0896C35.8762 16.9846 36.274 18.9943 36.2658 21.0697C36.2412 25.1549 34.6375 28.9816 31.7501 31.8445Z'
        fill='url(#paint0_linear_828_463)'
        stroke='url(#paint1_linear_828_463)'
        strokeWidth='2'
      />
      <defs>
        <linearGradient id='paint0_linear_828_463' x1='2.1' y1='21' x2='38.85' y2='21' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#2ECEC2' />
          <stop offset='0.421875' stopColor='#34BAD0' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
        <linearGradient id='paint1_linear_828_463' x1='2.1' y1='21' x2='38.85' y2='21' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#2ECEC2' />
          <stop offset='0.34375' stopColor='#34BAD0' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 42 42' fill='none'>
      <path
        d='M19.0313 21C19.0313 21.5221 19.2387 22.0229 19.6079 22.3921C19.9771 22.7613 20.4779 22.9688 21 22.9688C21.5221 22.9688 22.0229 22.7613 22.3921 22.3921C22.7613 22.0229 22.9687 21.5221 22.9687 21C22.9687 20.4779 22.7613 19.9771 22.3921 19.6079C22.0229 19.2387 21.5221 19.0313 21 19.0312C20.4779 19.0313 19.9771 19.2387 19.6079 19.6079C19.2387 19.9771 19.0313 20.4779 19.0313 21ZM27.2343 21C27.2343 21.5221 27.4417 22.0229 27.8109 22.3921C28.1801 22.7613 28.6809 22.9688 29.203 22.9688C29.7252 22.9688 30.2259 22.7613 30.5951 22.3921C30.9643 22.0229 31.1718 21.5221 31.1718 21C31.1718 20.4779 30.9643 19.9771 30.5951 19.6079C30.2259 19.2387 29.7252 19.0313 29.203 19.0312C28.6809 19.0313 28.1801 19.2387 27.8109 19.6079C27.4417 19.9771 27.2343 20.4779 27.2343 21ZM10.8283 21C10.8283 21.5221 11.0357 22.0229 11.4049 22.3921C11.7741 22.7613 12.2748 22.9688 12.797 22.9688C13.3191 22.9688 13.8199 22.7613 14.1891 22.3921C14.5583 22.0229 14.7657 21.5221 14.7657 21C14.7657 20.4779 14.5583 19.9771 14.1891 19.6079C13.8199 19.2387 13.3191 19.0313 12.797 19.0312C12.2748 19.0313 11.7741 19.2387 11.4049 19.6079C11.0357 19.9771 10.8283 20.4779 10.8283 21ZM37.9474 13.8797C37.0205 11.6771 35.6916 9.7002 33.9977 8.00215C32.3156 6.31393 30.3188 4.972 28.1202 4.05234C25.8644 3.10488 23.4691 2.625 21 2.625H20.918C18.4325 2.6373 16.0249 3.12949 13.7608 4.09746C11.5811 5.02655 9.60298 6.37086 7.93669 8.05547C6.25917 9.74941 4.94259 11.7182 4.03205 13.9125C3.0887 16.1848 2.61293 18.6006 2.62523 21.0861C2.63915 23.9345 3.31302 26.741 4.59396 29.2852V35.5195C4.59396 36.0199 4.79273 36.4998 5.14656 36.8536C5.50038 37.2075 5.98027 37.4062 6.48065 37.4062H12.7191C15.2632 38.6872 18.0696 39.3611 20.918 39.375H21.0041C23.4609 39.375 25.8439 38.8992 28.0874 37.9682C30.2749 37.0595 32.2643 35.7332 33.9444 34.0635C35.6383 32.3859 36.9713 30.4254 37.9023 28.2393C38.8703 25.9752 39.3625 23.5676 39.3748 21.082C39.3871 18.5842 38.9031 16.1602 37.9474 13.8797ZM31.7501 31.8445C28.8749 34.691 25.0605 36.2578 21 36.2578H20.9303C18.4571 36.2455 16.0003 35.6303 13.8306 34.4736L13.486 34.2891H7.71111V28.5141L7.52654 28.1695C6.36991 25.9998 5.75469 23.543 5.74238 21.0697C5.72598 16.9805 7.28865 13.1414 10.1556 10.2498C13.0185 7.3582 16.8452 5.75859 20.9344 5.74219H21.0041C23.0549 5.74219 25.0441 6.14004 26.9185 6.92754C28.7478 7.69453 30.3884 8.79785 31.7993 10.2088C33.2061 11.6156 34.3135 13.2604 35.0805 15.0896C35.8762 16.9846 36.274 18.9943 36.2658 21.0697C36.2412 25.1549 34.6375 28.9816 31.7501 31.8445Z'
        fill='#1B1D2A'
        stroke='#1B1D2A'
        strokeWidth='2'
      />
    </svg>
  )
}

export default MessageSvg