export interface PropsNavbar {
  onToggle? (...args: any[])
  collapsed?: boolean
  role: 'primary' | 'secondary'
  brand?: PropsNavbarBrand
  className?: string
  dataKey?: string
}
export interface PropsNavbarBrand {
  src: any
  href?: string
  dataKey?: string
}

export interface PropsNavbarGroup {
  align?: 'left' | 'right'
  className?: string
  dataKey?: string
}

export interface PropsNavbarDropdown {
  className?: string
  dataKey?: string
}
