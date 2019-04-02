import { h } from 'hyperapp'
import {
  PropsForm,
  PropsLabel,
  PropsInput,
  PropsFormGroup,
  PropsInputError,
  PropsCheckbox,
  PropsRadioButton
} from './FormTypes'
import * as styles from './Form.less'

export const Form = ({ className, container, dataKey }: PropsForm, children) => (
  <form
    className={(className ? ' ' + className : '')}
    data-key={dataKey}
  >
    {children}
  </form>
)

export const FormGroup = ({ className, key, dataKey, row }: PropsFormGroup, children) => (
  <div
    className={
      'form-group ' + styles['form-group'] +
      (row ? ' ' + styles['form-inline'] + ' ' + styles['row'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    {children}
  </div>
)

export const Label = ({ className, htmlFor, dataKey, onClick }: PropsLabel, children) => (
  <label
    className={'label ' + (className ? ' ' + className : '')}
    for={htmlFor}
    data-key={dataKey}
    onClick={onClick}
  >
    {children}
  </label>
)

export const Input = ({ className, disabled, invalid, dataKey, name, value, placeholder, required, type, onInput }: PropsInput) => (
  <input
    className={
      'form-control ' + styles['form-control'] +
      (invalid ? ' ' + styles['is-invalid'] + ' is-invalid' : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    onInput={onInput}
    name={name}
    value={value}
  />
)

export const InputError = ({ className, dataKey }: PropsInputError, children) => (
  <div
    className={
      'invalid-feedback ' + styles['invalid-feedback'] +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)

export const Checkbox = ({ id, className, disabled, required, checked, align, value, onClick, onChange, key, dataKey }: PropsCheckbox, children) => (
  <div
    className={
      'custom-checkbox ' + styles['custom-control'] +
                     ' ' + styles['custom-checkbox'] +
                     ' ' + styles['custom-control-inline'] +
      (align === 'right' ? ' ' + styles['custom-control-right'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    <input
      type='checkbox'
      className={styles['custom-control-input']}
      id={id}
      disabled={disabled}
      required={required}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    <label
      className={styles['custom-control-label']}
      for={id}
      onClick={onClick}
    >
      {children}
    </label>
  </div>
)

export const RadioButton = ({ id, name, className, disabled, required, checked, align, value, onClick, onChange, key, dataKey }: PropsRadioButton, children) => (
  <div
    className={
      'custom-radio ' + styles['custom-control'] +
                  ' ' + styles['custom-radio'] +
                  ' ' + styles['custom-control-inline'] +
      (align === 'right' ? ' ' + styles['custom-control-right'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    <input
      type='radio'
      className={styles['custom-control-input']}
      id={id}
      name={name}
      disabled={disabled}
      required={required}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    <label
      className={styles['custom-control-label']}
      for={id}
      onClick={onClick}
    >
      {children}
    </label>
  </div>
)
