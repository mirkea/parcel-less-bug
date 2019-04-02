import { h } from 'hyperapp'
import { PropsDropdown, PropsDropdownMenu, PropsDropdownToggle, PropsLink, PropsClass } from './DropdownTypes'
import * as styles from './Dropdown.less'

export const Dropdown = ({ className, dataKey, fullWidth }: PropsDropdown, children) => (
  <div
    className={
      'dropdown ' + styles['dropdown'] +
      (fullWidth ? ' w-100 ' + styles['w-100'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)

export const DropdownToggle = ({ className, dataKey, onClick }: PropsDropdownToggle, children) => (
  <button
    className={
      'dropdown-toggle ' + styles['btn'] + ' ' + styles['dropdown-toggle'] +
      (className ? ' ' + className : '')
    }
    onClick={onClick}
    type='button'
    data-toggle='dropdown'
    data-key={dataKey}
  >
    {children}
  </button>
)

export const DropdownMenu = ({ collapsed, dataKey, align, form, className }: PropsDropdownMenu, children) => (
  <div
    className={
      'dropdown-menu ' + styles['dropdown-menu'] +
      (collapsed ? '' : ' ' + styles['show']) +
      (align === 'right' ? ' ' + styles['dropdown-menu-right'] : '') +
      (form ? ' ' + styles['dropdown-form'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)

export const DropdownItem = ({ onClick, active, key, dataKey, href, className, target, download }: PropsLink, children) => (
  <a
    className={
      'dropdown-item ' + styles['dropdown-item'] +
      (active ? ' ' + styles['active'] : '') +
      (className ? ' ' + className : '')
    }
    onClick={onClick}
    href={href}
    target={target}
    download={download}
    data-key={dataKey}
    key={key}
  >
    {children}
  </a>
)

export const DropdownDivider = ({ className, dataKey }: PropsClass) => (
  <div
    className={
      'dropdown-divider ' + styles['dropdown-divider'] +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  />
)
