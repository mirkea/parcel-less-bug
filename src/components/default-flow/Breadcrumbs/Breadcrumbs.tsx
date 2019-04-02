import { h } from 'hyperapp'
import * as style from './Breadcrumbs.less'
import { Icon } from '../../core/Icon'
import { Button } from '../../core/Button'
import { BreadcrumbsProps } from './BreadcrumbsTypes'

export const Breadcrumbs = ({ items, step, maxStep, dataKey, className, onItemClick }: BreadcrumbsProps) => (
  <div
    className={style['breadcrumbs'] + ' ' + (className || '')}
    data-key={dataKey}
  >
    {items.map((item, index) =>
      <Button
        key={index.toString()}
        className={
          style['breadcrumb-item'] +
          (step === index ? ' ' + style['active'] : '') +
          (index < step ? ' ' + style['visited'] : '')
        }
        onClick={(maxStep > index ? [onItemClick, index] : null)}
        disabled={index >= maxStep}
      >
        <Icon
          src={item.icon}
          size='sm'
          color={(index >= maxStep ? 'secondary' : 'primary')}
          className={style['breadcrumb-icon']}
        />
        {step === index && <span className={style['breadcrumb-label']}>{item.label}</span>}
      </Button>
    )}
  </div>
)
