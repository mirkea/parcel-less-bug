export interface PropsContainer {
  fluid?: boolean
  className?: string
  key?: string
  dataKey?: string
}

export interface PropsRow {
  divider?: boolean
  className?: string
  key?: string
  dataKey?: string
}

export interface PropsColObject {
  size?: string | number
  offset?: string | number
  order?: string | number
  shrink?: boolean
  display?: 'none' | 'block' | 'flex'
}

export interface PropsCol {
  xs?: string | number | PropsColObject
  sm?: string | number | PropsColObject
  md?: string | number | PropsColObject
  lg?: string | number | PropsColObject
  xl?: string | number | PropsColObject
  shrink?: boolean
  className?: string
  key?: string
  dataKey?: string
}
