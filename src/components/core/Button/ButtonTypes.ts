export interface PropsButton {
  onClick?
  role?: 'primary' | 'secondary' | 'danger'
  className?: string
  id?: string
  block?: boolean
  active?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  dropdownToggle?: boolean
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  download?: boolean
  key?: string
  dataKey?: string
}

export interface PropsButtonGroup {
  block?: boolean
  className?: string
  dataKey?: string
}
