// @ts-ignore
import * as style from './TagInput.less'
import { app, h } from 'hyperapp'
import { Icon } from '../../core/Icon'
const SVGCancel = require('../../../assets/cancel.svg')

export interface TagProps {
  key: string
  toggled?: boolean
  onClick? (...args: any[])
}

export const Tag = ({ key, toggled, onClick }: TagProps, children) => (
	<div key={key} onClick={onClick} className={style['tag'] + (toggled ? ' ' + style['toggled'] : '')}>
		<span className={style['name']}>{children}</span>
		<span className={style['remove']}>
		  <Icon src={SVGCancel} color='white' role='cancel' size='xs' />
		</span>
	</div>
)
