export interface PropsAlert {
  onDismiss? (...args: any[])
  role?: 'default' | 'warning' | 'success' | 'danger'
  className?: string
  heading?: string
  dataKey?: string
  dismissable?: boolean
  fixed?: boolean
  closeIcon?: string
}
