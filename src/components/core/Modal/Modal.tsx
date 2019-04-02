import { h } from 'hyperapp'
import { Icon } from '../Icon/Icon'
import { PropsModal, PropsModalHeader } from './ModalTypes'
import * as styles from './Modal.less'

const stopPropagation = (state, event) => {
  event.stopPropagation()
  return state
}

export const Modal = ({ show = false, onClose = null, dataKey }: PropsModal, children) => {
  return (
    <div
      onClick={onClose}
      className={
        styles['modal'] + ' ' + styles['fade'] +
        (show ? ' ' + styles['show'] + ' ' + styles['d-block'] : '')
      }
      tabindex='-1'
      role='dialog'
      data-key={dataKey}
    >
      <div
        onClick={stopPropagation}
        className={styles['modal-dialog'] + ' ' + styles['modal-dialog-centered']}
      >
        <div className={styles['modal-content']}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const ModalHeader = ({ onClose = null, closeIcon }: PropsModalHeader, children) => {
  return (
    <div className={'modal-header ' + styles['modal-header'] + ' ' + styles['align-items-center']}>
      <h3>{children}</h3>
      {onClose && <button onClick={onClose} type='button' className={styles['close']}>
        {closeIcon && <Icon src={closeIcon} color='primary' size='md' />}
        {!closeIcon && <span>&times;</span>}
      </button>}
    </div>
  )
}

export const ModalBody = ({ }, children) => {
  return (
    <div className={'modal-body ' + styles['modal-body']}>
      {children}
    </div>
  )
}

export const ModalFooter = ({ }, children) => {
  return (
    <div className={'modal-footer ' + styles['modal-footer']}>
      {children}
    </div>
  )
}
