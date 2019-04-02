import * as styles from './Switch.less'
import { PropsCheckbox } from '../Form/FormTypes'
import { h } from 'hyperapp'

export const Switch = ({ id, className, disabled, required, key, dataKey, checked, align, value, onClick, onChange }: PropsCheckbox, children) => (
  <label
    className={
      'switch ' + styles['switch'] +
      (align === 'right' ? ' ' + styles['switch-right'] : '') +
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
    <label className={styles['switch-indicator']} for={id} onClick={onClick} />
    {children.length > 0 && (
      <label className={styles['switch-label']} for={id} onClick={onClick}>
        {children}
      </label>)
    }
  </label>
)
