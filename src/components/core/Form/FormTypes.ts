export interface PropsForm {
  className?: string
  dataKey?: string
  container?: boolean
}

export interface PropsFormGroup {
  className?: string
  key?: string
  dataKey?: string
  row?: boolean
}
export interface PropsInputError {
  className?: string
  dataKey?: string
}

export interface PropsLabel {
  onClick?
  className?: string
  htmlFor?: string
  dataKey?: string
}

export interface PropsInput {
  onInput?
  className?: string
  disabled?: boolean
  dataKey?: string
  required?: boolean
  type?: string
  placeholder?: string
  invalid?: boolean
  value?: string
  name?: string
}

export interface PropsCheckbox {
  onClick?
  onChange?
  id: string
  className?: string
  disabled?: boolean
  required?: boolean
  key?: string
  dataKey?: string
  checked?: boolean
  align?: 'left' | 'right'
  value?: string
}

export interface PropsRadioButton extends PropsCheckbox {
  name?: string
}
