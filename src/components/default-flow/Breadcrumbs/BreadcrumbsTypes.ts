export interface BreadcrumbsProps {
  items: BreadcrumbItemProps[]
  step: number
  maxStep: number
  className?: string
  dataKey?: string
  onItemClick?
}

export interface BreadcrumbItemProps {
  label: string
  icon: string
  onClick?
}
