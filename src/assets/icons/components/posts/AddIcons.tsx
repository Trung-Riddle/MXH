import Props from '../../type'

const AddIcons = ({ width, height, disabled }: Props & { disabled?: boolean }) => {
  return !disabled ? (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 40 40' fill='none'>
      <path
        d='M23.933 23.7163C22.8189 24.6146 21.4308 25.1045 19.9997 25.1045C18.5685 25.1045 17.1805 24.6146 16.0663 23.7163C15.726 23.4334 15.2872 23.2973 14.8465 23.338C14.4058 23.3786 13.9992 23.5926 13.7163 23.933C13.4335 24.2734 13.2973 24.7122 13.338 25.1529C13.3786 25.5936 13.5927 26.0001 13.933 26.283C15.6352 27.704 17.7823 28.4824 19.9997 28.4824C22.2171 28.4824 24.3641 27.704 26.0663 26.283C26.4067 26.0001 26.6208 25.5936 26.6614 25.1529C26.702 24.7122 26.5659 24.2734 26.283 23.933C26.1429 23.7645 25.971 23.6252 25.7771 23.5231C25.5832 23.421 25.3711 23.3581 25.1529 23.338C24.7122 23.2973 24.2734 23.4334 23.933 23.7163ZM14.9997 18.333C15.3293 18.333 15.6516 18.2353 15.9256 18.0521C16.1997 17.869 16.4133 17.6087 16.5395 17.3041C16.6656 16.9996 16.6986 16.6645 16.6343 16.3412C16.57 16.0179 16.4113 15.7209 16.1782 15.4878C15.9451 15.2547 15.6481 15.096 15.3248 15.0317C15.0015 14.9674 14.6664 15.0004 14.3619 15.1265C14.0573 15.2527 13.797 15.4663 13.6139 15.7404C13.4308 16.0145 13.333 16.3367 13.333 16.6663C13.333 17.1084 13.5086 17.5323 13.8212 17.8449C14.1337 18.1574 14.5577 18.333 14.9997 18.333ZM24.9997 14.9997C24.67 14.9997 24.3478 15.0974 24.0737 15.2806C23.7996 15.4637 23.586 15.724 23.4599 16.0285C23.3337 16.3331 23.3007 16.6682 23.365 16.9915C23.4293 17.3148 23.5881 17.6118 23.8212 17.8449C24.0543 18.0779 24.3512 18.2367 24.6745 18.301C24.9978 18.3653 25.3329 18.3323 25.6375 18.2061C25.942 18.08 26.2023 17.8664 26.3855 17.5923C26.5686 17.3182 26.6663 16.996 26.6663 16.6663C26.6663 16.2243 26.4908 15.8004 26.1782 15.4878C25.8656 15.1753 25.4417 14.9997 24.9997 14.9997ZM19.9997 3.33301C16.7033 3.33301 13.481 4.31049 10.7402 6.14185C7.99936 7.9732 5.86315 10.5762 4.60169 13.6216C3.34023 16.6671 3.01017 20.0182 3.65326 23.2512C4.29635 26.4842 5.88369 29.4539 8.21457 31.7848C10.5454 34.1157 13.5152 35.703 16.7482 36.3461C19.9812 36.9892 23.3323 36.6591 26.3777 35.3977C29.4232 34.1362 32.0261 32 33.8575 29.2592C35.6889 26.5184 36.6663 23.296 36.6663 19.9997C36.6663 17.811 36.2353 15.6437 35.3977 13.6216C34.5601 11.5995 33.3324 9.7622 31.7848 8.21456C30.2372 6.66692 28.3998 5.43926 26.3777 4.60168C24.3556 3.7641 22.1884 3.33301 19.9997 3.33301ZM19.9997 33.333C17.3626 33.333 14.7847 32.551 12.5921 31.0859C10.3994 29.6209 8.69046 27.5385 7.68129 25.1021C6.67212 22.6658 6.40808 19.9849 6.92255 17.3985C7.43702 14.8121 8.70689 12.4363 10.5716 10.5716C12.4363 8.70688 14.8121 7.43701 17.3985 6.92254C19.9849 6.40807 22.6658 6.67211 25.1021 7.68128C27.5385 8.69045 29.6209 10.3994 31.0859 12.5921C32.551 14.7847 33.333 17.3626 33.333 19.9997C33.333 23.5359 31.9283 26.9273 29.4278 29.4278C26.9273 31.9283 23.5359 33.333 19.9997 33.333Z'
        fill='url(#paint0_linear_1438_398)'
      />
      <defs>
        <linearGradient id='paint0_linear_1438_398' x1='3' y1='20' x2='37' y2='20' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#2ECEC2' />
          <stop offset='0.494792' stopColor='#34BAD0' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 40 40' fill='none'>
      <path
        d='M23.933 23.7163C22.8189 24.6146 21.4308 25.1045 19.9997 25.1045C18.5685 25.1045 17.1805 24.6146 16.0663 23.7163C15.726 23.4334 15.2872 23.2973 14.8465 23.338C14.4058 23.3786 13.9992 23.5926 13.7163 23.933C13.4335 24.2734 13.2973 24.7122 13.338 25.1529C13.3786 25.5936 13.5927 26.0001 13.933 26.283C15.6352 27.704 17.7823 28.4824 19.9997 28.4824C22.2171 28.4824 24.3641 27.704 26.0663 26.283C26.4067 26.0001 26.6208 25.5936 26.6614 25.1529C26.702 24.7122 26.5659 24.2734 26.283 23.933C26.1429 23.7645 25.971 23.6252 25.7771 23.5231C25.5832 23.421 25.3711 23.3581 25.1529 23.338C24.7122 23.2973 24.2734 23.4334 23.933 23.7163ZM14.9997 18.333C15.3293 18.333 15.6516 18.2353 15.9256 18.0521C16.1997 17.869 16.4133 17.6087 16.5395 17.3041C16.6656 16.9996 16.6986 16.6645 16.6343 16.3412C16.57 16.0179 16.4113 15.7209 16.1782 15.4878C15.9451 15.2547 15.6481 15.096 15.3248 15.0317C15.0015 14.9674 14.6664 15.0004 14.3619 15.1265C14.0573 15.2527 13.797 15.4663 13.6139 15.7404C13.4308 16.0145 13.333 16.3367 13.333 16.6663C13.333 17.1084 13.5086 17.5323 13.8212 17.8449C14.1337 18.1574 14.5577 18.333 14.9997 18.333ZM24.9997 14.9997C24.67 14.9997 24.3478 15.0974 24.0737 15.2806C23.7996 15.4637 23.586 15.724 23.4599 16.0285C23.3337 16.3331 23.3007 16.6682 23.365 16.9915C23.4293 17.3148 23.5881 17.6118 23.8212 17.8449C24.0543 18.0779 24.3512 18.2367 24.6745 18.301C24.9978 18.3653 25.3329 18.3323 25.6375 18.2061C25.942 18.08 26.2023 17.8664 26.3855 17.5923C26.5686 17.3182 26.6663 16.996 26.6663 16.6663C26.6663 16.2243 26.4908 15.8004 26.1782 15.4878C25.8656 15.1753 25.4417 14.9997 24.9997 14.9997ZM19.9997 3.33301C16.7033 3.33301 13.481 4.31049 10.7402 6.14185C7.99936 7.9732 5.86315 10.5762 4.60169 13.6216C3.34023 16.6671 3.01017 20.0182 3.65326 23.2512C4.29635 26.4842 5.88369 29.4539 8.21457 31.7848C10.5454 34.1157 13.5152 35.703 16.7482 36.3461C19.9812 36.9892 23.3323 36.6591 26.3777 35.3977C29.4232 34.1362 32.0261 32 33.8575 29.2592C35.6889 26.5184 36.6663 23.296 36.6663 19.9997C36.6663 17.811 36.2353 15.6437 35.3977 13.6216C34.5601 11.5995 33.3324 9.7622 31.7848 8.21456C30.2372 6.66692 28.3998 5.43926 26.3777 4.60168C24.3556 3.7641 22.1884 3.33301 19.9997 3.33301ZM19.9997 33.333C17.3626 33.333 14.7847 32.551 12.5921 31.0859C10.3994 29.6209 8.69046 27.5385 7.68129 25.1021C6.67212 22.6658 6.40808 19.9849 6.92255 17.3985C7.43702 14.8121 8.70689 12.4363 10.5716 10.5716C12.4363 8.70688 14.8121 7.43701 17.3985 6.92254C19.9849 6.40807 22.6658 6.67211 25.1021 7.68128C27.5385 8.69045 29.6209 10.3994 31.0859 12.5921C32.551 14.7847 33.333 17.3626 33.333 19.9997C33.333 23.5359 31.9283 26.9273 29.4278 29.4278C26.9273 31.9283 23.5359 33.333 19.9997 33.333Z'
        className='fill-[#888]'
      />
    </svg>
  )
}

export default AddIcons