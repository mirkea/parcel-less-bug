import { h } from 'hyperapp'
import { PropsDropdownToggle, PropsDropdown, PropsLink } from '../../core/Dropdown/DropdownTypes'
import { PropsNavbar, PropsNavbarGroup } from './NavbarTypes'
import * as styles from './Navbar.less'

export const Navbar = ({ brand, role, dataKey, onToggle, collapsed, className }: PropsNavbar, children) => {

  const brandImage = brand && (
    <a
      className={styles['navbar-brand'] + ' ' + styles['d-flex'] + ' ' + styles['align-items-center']}
      href={brand.href}
    >
      <img src={brand.src} />
    </a>
  )

  return (
    <nav
      className={
        styles['navbar'] + ' ' +
        styles['navbar-expand-md'] +
        (className ? ' ' + className : '') +
        (role === 'primary' ? ' ' + styles['bg-primary'] : ' ' + styles['bg-white'])
      }
      data-key={dataKey}
    >
      {brandImage}
      <button
        className={styles['navbar-toggler']}
        type='button'
        onClick={onToggle}
      >
        <span className={styles['navbar-toggler-icon']} />
      </button>
      <div className={styles['collapse'] + ' ' + styles['navbar-collapse'] + (collapsed ? '' : ' ' + styles['show'])}>
        {children}
      </div>
    </nav>
  )
}

export const NavbarGroup = ({ align, dataKey, className }: PropsNavbarGroup, children) => (
  <ul
    className={
      styles['navbar-nav'] +
      (align === 'right' ? '' : ' ' + styles['mr-auto']) +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </ul>
)

export const NavbarButton = ({ onClick, href, active, dataKey, className }: PropsLink, children) => (
  <li
    className={styles['nav-item'] + (active ? ' ' + styles['active'] : '') + (className ? ' ' + className : '')} data-key={dataKey}
  >
    <a
      className={styles['nav-link']}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  </li>
)

export const NavbarDropdown = ({ className, dataKey }: PropsDropdown, children) => (
  <li
    className={styles['nav-item'] + ' ' + styles['dropdown'] + (className ? ' ' + className : '')}
    data-key={dataKey}
  >
    {children}
  </li>
)

export const NavbarDropdownToggle = ({ onClick, className, dataKey }: PropsDropdownToggle, children) => (
  <a
    className={styles['nav-link'] + ' ' + styles['dropdown-toggle'] + (className ? ' ' + className : '')}
    onClick={onClick}
    role='button'
    data-key={dataKey}
  >
    {children}
  </a>
)
