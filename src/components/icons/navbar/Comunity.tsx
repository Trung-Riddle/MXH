interface Props {
  width: string
  height: string
  active: boolean
}

const Comunity = ({ width, height, active }: Props) => {
  return active ? (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <g clipPath='url(#clip0_985_32)'>
        <path
          d='M10.5002 4.5002C10.5002 3.62498 10.1525 2.78561 9.53365 2.16674C8.91478 1.54787 8.07541 1.2002 7.2002 1.2002C6.32498 1.2002 5.48561 1.54787 4.86674 2.16674C4.24787 2.78561 3.9002 3.62498 3.9002 4.5002C3.9002 5.37541 4.24787 6.21478 4.86674 6.83365C5.48561 7.45252 6.32498 7.8002 7.2002 7.8002C8.07541 7.8002 8.91478 7.45252 9.53365 6.83365C10.1525 6.21478 10.5002 5.37541 10.5002 4.5002ZM5.1002 4.5002C5.1002 4.22442 5.15451 3.95134 5.26005 3.69656C5.36558 3.44178 5.52027 3.21027 5.71527 3.01527C5.91027 2.82027 6.14178 2.66558 6.39656 2.56005C6.65134 2.45451 6.92442 2.4002 7.2002 2.4002C7.47597 2.4002 7.74905 2.45451 8.00383 2.56005C8.25861 2.66558 8.49012 2.82027 8.68512 3.01527C8.88012 3.21027 9.03481 3.44178 9.14034 3.69656C9.24588 3.95134 9.3002 4.22442 9.3002 4.5002C9.3002 5.05715 9.07895 5.59129 8.68512 5.98512C8.29129 6.37895 7.75715 6.6002 7.2002 6.6002C6.64324 6.6002 6.1091 6.37895 5.71527 5.98512C5.32145 5.59129 5.1002 5.05715 5.1002 4.5002ZM3.0002 9.0002H8.0198C7.823 9.3722 7.6766 9.7754 7.5902 10.2002H3.0002C2.84107 10.2002 2.68845 10.2634 2.57593 10.3759C2.46341 10.4885 2.4002 10.6411 2.4002 10.8002V11.4002C2.4002 12.9122 3.719 14.537 6.1154 14.9162C5.729 15.1802 5.4074 15.5318 5.1782 15.941C2.6462 15.2558 1.2002 13.3046 1.2002 11.4002V10.8002C1.2002 10.3228 1.38984 9.86497 1.7274 9.5274C2.06497 9.18984 2.52281 9.0002 3.0002 9.0002ZM9.455 9.0002C10.0598 8.2682 10.9754 7.8002 12.0002 7.8002C12.7188 7.79894 13.4182 8.03282 13.9915 8.46616C14.5648 8.89949 14.9805 9.50847 15.1754 10.2002C15.3491 10.8176 15.3393 11.4722 15.1472 12.0841C14.9552 12.6961 14.5891 13.2388 14.0938 13.6463C13.5985 14.0537 12.9952 14.3081 12.3578 14.3785C11.7203 14.4488 11.0761 14.3321 10.5038 14.0426C10.0632 13.8183 9.67857 13.4979 9.37841 13.1051C9.07824 12.7122 8.87019 12.2569 8.76962 11.7729C8.66905 11.2888 8.67853 10.7883 8.79737 10.3084C8.91621 9.82848 9.14016 9.3814 9.455 9.0002ZM10.103 10.2002C9.98481 10.4495 9.91688 10.7196 9.90309 10.9952C9.8893 11.2707 9.92992 11.5463 10.0226 11.8062C10.1153 12.066 10.2583 12.3051 10.4434 12.5097C10.6285 12.7143 10.8521 12.8804 11.1014 12.9986C11.3507 13.1168 11.6208 13.1847 11.8964 13.1985C12.1719 13.2123 12.4475 13.1717 12.7074 13.079C12.9672 12.9863 13.2063 12.8433 13.4109 12.6582C13.6155 12.4731 13.7816 12.2495 13.8998 12.0002C14.1385 11.4965 14.1673 10.9187 13.98 10.3938C13.7926 9.86888 13.4044 9.43989 12.9008 9.2012C12.3971 8.9625 11.8193 8.93366 11.2944 9.121C10.7695 9.30835 10.3417 9.69655 10.103 10.2002ZM18.8222 15.941C18.5936 15.5316 18.2727 15.1811 17.885 14.9174C20.2802 14.537 21.6002 12.911 21.6002 11.4002V10.8002C21.6002 10.6411 21.537 10.4885 21.4245 10.3759C21.3119 10.2634 21.1593 10.2002 21.0002 10.2002H16.4102C16.3254 9.78179 16.1812 9.37769 15.9818 9.0002H21.0002C21.4776 9.0002 21.9354 9.18984 22.273 9.5274C22.6106 9.86497 22.8002 10.3228 22.8002 10.8002V11.4002C22.8002 13.3046 21.353 15.2546 18.8222 15.941ZM17.3846 16.0454C17.0571 15.7579 16.636 15.5996 16.2002 15.6002H7.8002C7.56364 15.5996 7.32929 15.6457 7.11062 15.7359C6.89194 15.8262 6.69326 15.9587 6.52599 16.126C6.35872 16.2933 6.22616 16.4919 6.13592 16.7106C6.04569 16.9293 5.99956 17.1636 6.0002 17.4002V18.0002C6.0002 20.3654 8.2322 22.8002 12.0002 22.8002C15.7682 22.8002 18.0002 20.3654 18.0002 18.0002V17.4002C18.0002 16.8602 17.7626 16.3754 17.3846 16.0442V16.0454ZM7.2002 17.4002C7.2002 17.2411 7.26341 17.0885 7.37593 16.9759C7.48845 16.8634 7.64107 16.8002 7.8002 16.8002H16.2002C16.3593 16.8002 16.5119 16.8634 16.6245 16.9759C16.737 17.0885 16.8002 17.2411 16.8002 17.4002V18.0002C16.8002 19.7258 15.0818 21.6002 12.0002 21.6002C8.9186 21.6002 7.2002 19.7258 7.2002 18.0002V17.4002ZM16.8002 1.2002C17.6754 1.2002 18.5148 1.54787 19.1336 2.16674C19.7525 2.78561 20.1002 3.62498 20.1002 4.5002C20.1002 5.37541 19.7525 6.21478 19.1336 6.83365C18.5148 7.45252 17.6754 7.8002 16.8002 7.8002C15.925 7.8002 15.0856 7.45252 14.4667 6.83365C13.8479 6.21478 13.5002 5.37541 13.5002 4.5002C13.5002 3.62498 13.8479 2.78561 14.4667 2.16674C15.0856 1.54787 15.925 1.2002 16.8002 1.2002ZM16.8002 2.4002C16.2432 2.4002 15.7091 2.62144 15.3153 3.01527C14.9214 3.4091 14.7002 3.94324 14.7002 4.5002C14.7002 5.05715 14.9214 5.59129 15.3153 5.98512C15.7091 6.37895 16.2432 6.6002 16.8002 6.6002C17.3572 6.6002 17.8913 6.37895 18.2851 5.98512C18.6789 5.59129 18.9002 5.05715 18.9002 4.5002C18.9002 3.94324 18.6789 3.4091 18.2851 3.01527C17.8913 2.62144 17.3572 2.4002 16.8002 2.4002Z'
          fill='url(#paint0_linear_985_32)'
          stroke='url(#paint1_linear_985_32)'
        />
      </g>
      <defs>
        <linearGradient id='paint0_linear_985_32' x1='1' y1='12' x2='23' y2='12' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34BAD0' />
          <stop offset='0.765625' stopColor='#3996E8' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
        <linearGradient id='paint1_linear_985_32' x1='1' y1='12' x2='23' y2='12' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34BAD0' />
          <stop offset='0.75' stopColor='#3996E8' />
          <stop offset='1' stopColor='#3B89F1' />
        </linearGradient>
        <clipPath id='clip0_985_32'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M10.5002 4.5002C10.5002 3.62498 10.1525 2.78561 9.53365 2.16674C8.91478 1.54787 8.07541 1.2002 7.2002 1.2002C6.32498 1.2002 5.48561 1.54787 4.86674 2.16674C4.24787 2.78561 3.9002 3.62498 3.9002 4.5002C3.9002 5.37541 4.24787 6.21478 4.86674 6.83365C5.48561 7.45252 6.32498 7.8002 7.2002 7.8002C8.07541 7.8002 8.91478 7.45252 9.53365 6.83365C10.1525 6.21478 10.5002 5.37541 10.5002 4.5002ZM5.1002 4.5002C5.1002 4.22442 5.15451 3.95134 5.26005 3.69656C5.36558 3.44178 5.52027 3.21027 5.71527 3.01527C5.91027 2.82027 6.14178 2.66558 6.39656 2.56005C6.65134 2.45451 6.92442 2.4002 7.2002 2.4002C7.47597 2.4002 7.74905 2.45451 8.00383 2.56005C8.25861 2.66558 8.49012 2.82027 8.68512 3.01527C8.88012 3.21027 9.03481 3.44178 9.14034 3.69656C9.24588 3.95134 9.3002 4.22442 9.3002 4.5002C9.3002 5.05715 9.07895 5.59129 8.68512 5.98512C8.29129 6.37895 7.75715 6.6002 7.2002 6.6002C6.64324 6.6002 6.1091 6.37895 5.71527 5.98512C5.32145 5.59129 5.1002 5.05715 5.1002 4.5002ZM3.0002 9.0002H8.0198C7.823 9.3722 7.6766 9.7754 7.5902 10.2002H3.0002C2.84107 10.2002 2.68845 10.2634 2.57593 10.3759C2.46341 10.4885 2.4002 10.6411 2.4002 10.8002V11.4002C2.4002 12.9122 3.719 14.537 6.1154 14.9162C5.729 15.1802 5.4074 15.5318 5.1782 15.941C2.6462 15.2558 1.2002 13.3046 1.2002 11.4002V10.8002C1.2002 10.3228 1.38984 9.86497 1.7274 9.5274C2.06497 9.18984 2.52281 9.0002 3.0002 9.0002ZM9.455 9.0002C10.0598 8.2682 10.9754 7.8002 12.0002 7.8002C12.7188 7.79894 13.4182 8.03282 13.9915 8.46616C14.5648 8.89949 14.9805 9.50847 15.1754 10.2002C15.3491 10.8176 15.3393 11.4722 15.1472 12.0841C14.9552 12.6961 14.5891 13.2388 14.0938 13.6463C13.5985 14.0537 12.9952 14.3081 12.3578 14.3785C11.7203 14.4488 11.0761 14.3321 10.5038 14.0426C10.0632 13.8183 9.67857 13.4979 9.37841 13.1051C9.07824 12.7122 8.87019 12.2569 8.76962 11.7729C8.66905 11.2888 8.67853 10.7883 8.79737 10.3084C8.91621 9.82848 9.14016 9.3814 9.455 9.0002ZM10.103 10.2002C9.98481 10.4495 9.91688 10.7196 9.90309 10.9952C9.8893 11.2707 9.92992 11.5463 10.0226 11.8062C10.1153 12.066 10.2583 12.3051 10.4434 12.5097C10.6285 12.7143 10.8521 12.8804 11.1014 12.9986C11.3507 13.1168 11.6208 13.1847 11.8964 13.1985C12.1719 13.2123 12.4475 13.1717 12.7074 13.079C12.9672 12.9863 13.2063 12.8433 13.4109 12.6582C13.6155 12.4731 13.7816 12.2495 13.8998 12.0002C14.1385 11.4965 14.1673 10.9187 13.98 10.3938C13.7926 9.86888 13.4044 9.43989 12.9008 9.2012C12.3971 8.9625 11.8193 8.93366 11.2944 9.121C10.7695 9.30835 10.3417 9.69655 10.103 10.2002ZM18.8222 15.941C18.5936 15.5316 18.2727 15.1811 17.885 14.9174C20.2802 14.537 21.6002 12.911 21.6002 11.4002V10.8002C21.6002 10.6411 21.537 10.4885 21.4245 10.3759C21.3119 10.2634 21.1593 10.2002 21.0002 10.2002H16.4102C16.3254 9.78179 16.1812 9.37769 15.9818 9.0002H21.0002C21.4776 9.0002 21.9354 9.18984 22.273 9.5274C22.6106 9.86497 22.8002 10.3228 22.8002 10.8002V11.4002C22.8002 13.3046 21.353 15.2546 18.8222 15.941ZM17.3846 16.0454C17.0571 15.7579 16.636 15.5996 16.2002 15.6002H7.8002C7.56364 15.5996 7.32929 15.6457 7.11062 15.7359C6.89194 15.8262 6.69326 15.9587 6.52599 16.126C6.35872 16.2933 6.22616 16.4919 6.13592 16.7106C6.04569 16.9293 5.99956 17.1636 6.0002 17.4002V18.0002C6.0002 20.3654 8.2322 22.8002 12.0002 22.8002C15.7682 22.8002 18.0002 20.3654 18.0002 18.0002V17.4002C18.0002 16.8602 17.7626 16.3754 17.3846 16.0442V16.0454ZM7.2002 17.4002C7.2002 17.2411 7.26341 17.0885 7.37593 16.9759C7.48845 16.8634 7.64107 16.8002 7.8002 16.8002H16.2002C16.3593 16.8002 16.5119 16.8634 16.6245 16.9759C16.737 17.0885 16.8002 17.2411 16.8002 17.4002V18.0002C16.8002 19.7258 15.0818 21.6002 12.0002 21.6002C8.9186 21.6002 7.2002 19.7258 7.2002 18.0002V17.4002ZM16.8002 1.2002C17.6754 1.2002 18.5148 1.54787 19.1336 2.16674C19.7525 2.78561 20.1002 3.62498 20.1002 4.5002C20.1002 5.37541 19.7525 6.21478 19.1336 6.83365C18.5148 7.45252 17.6754 7.8002 16.8002 7.8002C15.925 7.8002 15.0856 7.45252 14.4667 6.83365C13.8479 6.21478 13.5002 5.37541 13.5002 4.5002C13.5002 3.62498 13.8479 2.78561 14.4667 2.16674C15.0856 1.54787 15.925 1.2002 16.8002 1.2002ZM16.8002 2.4002C16.2432 2.4002 15.7091 2.62144 15.3153 3.01527C14.9214 3.4091 14.7002 3.94324 14.7002 4.5002C14.7002 5.05715 14.9214 5.59129 15.3153 5.98512C15.7091 6.37895 16.2432 6.6002 16.8002 6.6002C17.3572 6.6002 17.8913 6.37895 18.2851 5.98512C18.6789 5.59129 18.9002 5.05715 18.9002 4.5002C18.9002 3.94324 18.6789 3.4091 18.2851 3.01527C17.8913 2.62144 17.3572 2.4002 16.8002 2.4002Z'
        fill='#1B1D2A'
        stroke='#1B1D2A'
      />
    </svg>
  )
}

export default Comunity
