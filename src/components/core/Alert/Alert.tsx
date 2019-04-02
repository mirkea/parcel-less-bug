import { h } from 'hyperapp'
import { Icon } from '../Icon/Icon'
import * as styles from './Alert.less'
import { PropsAlert } from './AlertTypes'

const bgColor = (color) => (['danger', 'warning', 'success'].indexOf(color) >= 0 ? color : 'light')

export const Alert = ({ role, dataKey, className, closeIcon, dismissable, heading, fixed, onDismiss }: PropsAlert, children) => {
  const dismiss = dismissable && (
    <button
      className={'close ' + styles['close']}
      type='button'
      onClick={onDismiss}
    >
      {closeIcon && <Icon src={closeIcon} size='sm' />}
      {!closeIcon && <span>&times;</span>}
    </button>
  )

  return (
    <div
      className={
        'alert ' + styles['alert'] + ' ' +
        (fixed ? styles['alert-fixed'] + ' ' + styles['alert-' + bgColor(role)]
          : styles['alert'] + ' ' + styles['alert-' + bgColor(role)]) +
        (dismissable ? ' ' + styles['alert-dismissible'] : '') +
        (className ? ' ' + className : '')
      }
      data-key={dataKey}
    >
      {heading && (
        <div className={'alert-heading ' + styles['alert-heading']}>
          {heading}
        </div>
      )}
      <div className={'alert-body ' + styles['alert-body']}>
        {children}
      </div>
      {dismiss}
    </div>
  )
}
