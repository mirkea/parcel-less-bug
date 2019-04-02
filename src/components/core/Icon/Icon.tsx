import * as styles from './Icon.less'
import { h } from 'hyperapp'
import { PropsIcon } from './IconTypes'

export const Icon = ({ className, dataKey, src, size, color }: PropsIcon) => (
  <span
    className={
      'icon' + ' ' + (className || '') + ' ' + styles['icon'] +
      (size ? ' ' + styles['icon-' + size] : '') +
      (color ? ' ' + styles['icon-' + color] : '')
    }
    innerHTML={src}
    alt={className}
    data-key={dataKey}
  />
)
