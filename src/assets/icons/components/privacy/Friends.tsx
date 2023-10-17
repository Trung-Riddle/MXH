import Props from '../../type'

const Friends = ({ width, height, className }: Props & { className?: string }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 45 45' fill='none'>
      <path
        d='M8.625 8.625C8.625 7.13316 9.21763 5.70242 10.2725 4.64752C11.3274 3.59263 12.7582 3 14.25 3C15.7418 3 17.1726 3.59263 18.2275 4.64752C19.2824 5.70242 19.875 7.13316 19.875 8.625C19.875 10.1168 19.2824 11.5476 18.2275 12.6025C17.1726 13.6574 15.7418 14.25 14.25 14.25C12.7582 14.25 11.3274 13.6574 10.2725 12.6025C9.21763 11.5476 8.625 10.1168 8.625 8.625ZM27.6909 13.08L27.8091 13.17C29.0024 14.0545 30.4971 14.4312 31.9671 14.2177C33.4371 14.0042 34.763 13.2179 35.6554 12.0305C36.5478 10.843 36.9343 9.35077 36.7305 7.87941C36.5267 6.40804 35.7492 5.07701 34.5677 4.17678C33.3861 3.27656 31.8965 2.88023 30.4238 3.0743C28.9511 3.26836 27.615 4.03706 26.707 5.21264C25.799 6.38821 25.3928 7.87522 25.5772 9.34915C25.7615 10.8231 26.5214 12.1643 27.6909 13.08ZM17.8163 17.0625C18.1695 16.3936 18.6541 15.8028 19.2409 15.3255C19.8278 14.8481 20.5049 14.4941 21.2317 14.2845C21.9586 14.0749 22.7202 14.0141 23.4711 14.1056C24.222 14.1972 24.9467 14.4393 25.6019 14.8174C26.2571 15.1955 26.8293 15.7019 27.2842 16.3063C27.7392 16.9106 28.0676 17.6006 28.2497 18.3348C28.4319 19.069 28.4641 19.8324 28.3444 20.5793C28.2247 21.3262 27.9556 22.0414 27.5531 22.6819C26.7789 23.9141 25.5572 24.7983 24.1448 25.1488C22.7323 25.4992 21.239 25.2886 19.9786 24.5612C18.7181 23.8337 17.7887 22.6461 17.3855 21.2478C16.9823 19.8495 17.1367 18.3494 17.8163 17.0625ZM7.21875 17.0625H14.7281C14.2283 18.49 14.1196 20.0253 14.4134 21.509C14.7071 22.9927 15.3926 24.3707 16.3987 25.5H15.6562C14.2062 25.4998 12.7916 25.9477 11.6059 26.7825C10.4203 27.6172 9.52156 28.798 9.03281 30.1631C8.08875 29.7839 7.20482 29.2694 6.40875 28.6359C4.29375 26.9344 3 24.42 3 21.2812C3 20.1624 3.44447 19.0893 4.23564 18.2981C5.02681 17.507 6.09987 17.0625 7.21875 17.0625ZM29.7188 25.5C31.1684 25.5 32.5826 25.948 33.7678 26.7828C34.9529 27.6175 35.8511 28.7982 36.3394 30.1631C37.2956 29.7722 38.1816 29.2631 38.9663 28.6359C41.0813 26.9344 42.375 24.42 42.375 21.2812C42.375 20.1624 41.9305 19.0893 41.1394 18.2981C40.3482 17.507 39.2751 17.0625 38.1562 17.0625H30.6469C30.9562 17.9428 31.125 18.8906 31.125 19.875C31.1276 21.9509 30.3622 23.9545 28.9763 25.5H29.7188ZM33.6197 30.9225C33.825 31.4175 33.9375 31.9631 33.9375 32.5312C33.9375 35.67 32.6466 38.1844 30.5288 39.8859C28.4447 41.5594 25.6491 42.375 22.6875 42.375C19.7259 42.375 16.9303 41.5594 14.8462 39.8859C12.7312 38.1844 11.4375 35.67 11.4375 32.5312C11.436 31.9768 11.5441 31.4276 11.7556 30.9151C11.9671 30.4025 12.2778 29.9369 12.6698 29.5448C13.0619 29.1528 13.5275 28.8421 14.0401 28.6306C14.5526 28.4191 15.1018 28.311 15.6562 28.3125H29.7188C30.5544 28.3123 31.3712 28.5603 32.0657 29.0249C32.7602 29.4896 33.301 30.15 33.6197 30.9225Z'
        className={className ? className : 'fill-dark dark:fill-light'}
      />
    </svg>
  )
}

export default Friends
