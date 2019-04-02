import { h } from 'hyperapp'
import { PropsButton, PropsButtonGroup } from './ButtonTypes'
import * as styles from './Button.less'

export const Button = ({ active, role, onClick, key, dataKey, dropdownToggle, className, id, block, type, disabled, href, target, download }: PropsButton, children) => (
  <button
    className={
      'btn ' + styles['btn'] +
      (block ? ' ' + styles['btn-block'] : '') +
      (active ? ' ' + styles['active'] + ' active' : '') +
      (role ? ' ' + styles['btn-' + role] : '') +
      (dropdownToggle ? ' ' + styles['dropdown-toggle'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
    disabled={disabled}
    download={download}
    id={id}
    href={href}
    onClick={onClick}
    target={target}
    type={type}
  >
    {children}
  </button>
)

export const ButtonGroup = ({ block, className, dataKey }: PropsButtonGroup, children) => (
  <div
    className={
      'btn-group ' + styles['btn-group'] +
      (block ? ' ' + styles['w-100'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)
