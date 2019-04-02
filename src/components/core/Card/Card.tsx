import { h } from 'hyperapp'
import { PropsCard, PropsCardBody } from './CardTypes'
import * as styles from './Card.less'

export const Card = ({ border, className, key, dataKey, transparent }: PropsCard, children) => (
  <div
    className={
      'card ' + styles['card'] +
      (border === 'none' ? + styles['border-0'] : ' ' + styles['border-' + border]) +
      (transparent ? ' ' + styles['bg-transparent'] : '') +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
    key={key}
  >
    {children}
  </div>
)

export const CardBody = ({ className, dataKey }: PropsCardBody, children) => (
  <div
    className={
      'card-body ' + styles['card-body'] +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)

export const CardGroup = ({ className, dataKey }: PropsCardBody, children) => (
  <div
    className={
      'card-group ' + styles['card-group'] +
      (className ? ' ' + className : '')
    }
    data-key={dataKey}
  >
    {children}
  </div>
)
