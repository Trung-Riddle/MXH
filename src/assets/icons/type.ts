export default interface Props {
  width: string
  height: string
}

export interface NavigationProps extends Props {
  active?: boolean
  theme?: boolean
}
