import { h } from 'hyperapp'
import { PropsListGroupItem, PropsListGroup } from './ListTypes'
import * as styles from './List.less'

export const ListGroupItem = ({ active, key, dataKey, className, row, container, disabled, onClick }: PropsListGroupItem, children) => (
  <div
    className={
      'list-group-item ' + styles['list-group-item'] +
      (active ? ' ' + styles['active'] + ' active' : '') +
      (row ? ' ' + styles['row'] : '') +
      (container ? ' ' + styles['container'] : '') +
      (disabled ? ' ' + styles['disabled'] + ' disabled' : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
    onClick={onClick}
  >
    {children}
  </div>
)

export const ListGroup = ({ className, dataKey }: PropsListGroup, children) => (
  <div
    className={
      'list-group ' + styles['list-group'] +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)
