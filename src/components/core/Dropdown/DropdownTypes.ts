export interface PropsLink {
  onClick?
  href?: string
  active?: boolean
  className?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  download?: boolean
  key?: string
  dataKey?: string
}

export interface PropsClass {
  className?: string
  dataKey?: string
}

export interface PropsDropdownMenu {
  align?: 'left' | 'right'
  collapsed?: boolean
  form?: boolean
  className?: string
  dataKey?: string
}

export interface PropsDropdownToggle {
  onClick?
  className?: string
  dataKey?: string
}

export interface PropsDropdown {
  fullWidth?: boolean
  className?: string
  dataKey?: string
}
