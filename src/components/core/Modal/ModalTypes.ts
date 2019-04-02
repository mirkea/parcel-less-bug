export interface PropsModal {
  dataKey?: string
  onClose? (...args: any[])
  show?: boolean
}

export interface PropsModalHeader {
  onClose? (...args: any[])
  closeIcon?: string
}
