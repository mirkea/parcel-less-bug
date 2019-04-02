export interface PropsListGroupItem {
  onClick?
  className?: string
  active?: boolean
  disabled?: boolean
  row?: boolean
  container?: boolean
  key?: string
  dataKey?: string
}

export interface PropsListGroup {
  className?: string
  dataKey?: string
}
