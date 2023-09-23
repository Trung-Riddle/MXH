import { NavigationProps } from '../../type'

const AllFriendsSvg = ({ width, height, active }: NavigationProps) => {
  return active ? (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 5C12.9283 5 13.8185 5.36875 14.4749 6.02513C15.1313 6.6815 15.5 7.57174 15.5 8.5C15.5 9.42826 15.1313 10.3185 14.4749 10.9749C13.8185 11.6313 12.9283 12 12 12C11.0717 12 10.1815 11.6313 9.52513 10.9749C8.86875 10.3185 8.5 9.42826 8.5 8.5C8.5 7.57174 8.86875 6.6815 9.52513 6.02513C10.1815 5.36875 11.0717 5 12 5ZM5 7.5C5.56 7.5 6.08 7.65 6.53 7.92C6.38 9.35 6.8 10.77 7.66 11.88C7.16 12.84 6.16 13.5 5 13.5C4.20435 13.5 3.44129 13.1839 2.87868 12.6213C2.31607 12.0587 2 11.2956 2 10.5C2 9.70435 2.31607 8.94129 2.87868 8.37868C3.44129 7.81607 4.20435 7.5 5 7.5ZM19 7.5C19.7956 7.5 20.5587 7.81607 21.1213 8.37868C21.6839 8.94129 22 9.70435 22 10.5C22 11.2956 21.6839 12.0587 21.1213 12.6213C20.5587 13.1839 19.7956 13.5 19 13.5C17.84 13.5 16.84 12.84 16.34 11.88C17.2119 10.7544 17.6166 9.3362 17.47 7.92C17.92 7.65 18.44 7.5 19 7.5ZM5.5 17.75C5.5 15.68 8.41 14 12 14C15.59 14 18.5 15.68 18.5 17.75V19.5H5.5V17.75ZM0 19.5V18C0 16.61 1.89 15.44 4.45 15.1C3.86 15.78 3.5 16.72 3.5 17.75V19.5H0ZM24 19.5H20.5V17.75C20.5 16.72 20.14 15.78 19.55 15.1C22.11 15.44 24 16.61 24 18V19.5Z'
        fill='url(#paint0_linear_1231_511)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1231_511'
          x1='5.65571e-08'
          y1='12'
          x2='24'
          y2='12'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2ECEC2' />
          <stop offset='0.375' stopColor='#34BAD0' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 5C12.9283 5 13.8185 5.36875 14.4749 6.02513C15.1313 6.6815 15.5 7.57174 15.5 8.5C15.5 9.42826 15.1313 10.3185 14.4749 10.9749C13.8185 11.6313 12.9283 12 12 12C11.0717 12 10.1815 11.6313 9.52513 10.9749C8.86875 10.3185 8.5 9.42826 8.5 8.5C8.5 7.57174 8.86875 6.6815 9.52513 6.02513C10.1815 5.36875 11.0717 5 12 5ZM5 7.5C5.56 7.5 6.08 7.65 6.53 7.92C6.38 9.35 6.8 10.77 7.66 11.88C7.16 12.84 6.16 13.5 5 13.5C4.20435 13.5 3.44129 13.1839 2.87868 12.6213C2.31607 12.0587 2 11.2956 2 10.5C2 9.70435 2.31607 8.94129 2.87868 8.37868C3.44129 7.81607 4.20435 7.5 5 7.5ZM19 7.5C19.7956 7.5 20.5587 7.81607 21.1213 8.37868C21.6839 8.94129 22 9.70435 22 10.5C22 11.2956 21.6839 12.0587 21.1213 12.6213C20.5587 13.1839 19.7956 13.5 19 13.5C17.84 13.5 16.84 12.84 16.34 11.88C17.2119 10.7544 17.6166 9.3362 17.47 7.92C17.92 7.65 18.44 7.5 19 7.5ZM5.5 17.75C5.5 15.68 8.41 14 12 14C15.59 14 18.5 15.68 18.5 17.75V19.5H5.5V17.75ZM0 19.5V18C0 16.61 1.89 15.44 4.45 15.1C3.86 15.78 3.5 16.72 3.5 17.75V19.5H0ZM24 19.5H20.5V17.75C20.5 16.72 20.14 15.78 19.55 15.1C22.11 15.44 24 16.61 24 18V19.5Z'
        fill='black'
      />
    </svg>
  )
}

export default AllFriendsSvg
