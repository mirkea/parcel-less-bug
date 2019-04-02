import * as styles from './Grid.less'
import { h } from 'hyperapp'
import { PropsContainer, PropsRow, PropsCol } from './GridTypes'

const getColStyle = (prefix, size, value) => {
  return styles[prefix + (size === 'xs' ? '' : size + '-') + value]
}

const getColClassName = (size, value) => {
  if (typeof (value) !== 'object') {
    return getColStyle('col-', size, value)
  } else {
    return (
      (value.size ? getColStyle('col-', size, value.size) + ' ' : '') +
      (value.offset ? getColStyle('offset-', size, value.offset) + ' ' : '') +
      (value.order ? getColStyle('order-', size, value.order) + ' ' : '') +
      (value.display ? getColStyle('d-', size, value.display) : '')
    )
  }
}

export const Container = ({ fluid, key, dataKey, className }: PropsContainer, children) => (
  <div
    className={
      'container ' + 
      (fluid ? styles['container-fluid'] : styles['container']) +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    {children}
  </div>
)

export const Row = ({ divider, key, dataKey, className }: PropsRow, children) => (
  <div
    className={
      'row ' + 
      (divider ? ' ' + styles['row-separator'] : styles['row']) +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    {children}
  </div>
)

export const Col = ({ xs, sm, md, lg, xl, shrink, className, key, dataKey }: PropsCol, children) => (
  <div
    className={
      'col ' + styles['col'] +
      (shrink ? ' ' + styles['flex-grow-0'] : '') +
      (xs ? ' ' + getColClassName('xs', xs) : '') +
      (sm ? ' ' + getColClassName('sm', sm) : '') +
      (md ? ' ' + getColClassName('md', md) : '') +
      (lg ? ' ' + getColClassName('lg', lg) : '') +
      (xl ? ' ' + getColClassName('xl', xl) : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    {children}
  </div>
)
