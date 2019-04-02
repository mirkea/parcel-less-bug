export type PropsBorder = 'primary' | 'secondary' | 'danger' | 'light' | 'dark' | 'none'

export interface PropsCard {
  border?: PropsBorder
  className?: string
  key?: string
  dataKey?: string
  transparent?: boolean
}

export interface PropsCardBody {
  className?: string
  dataKey?: string
}
