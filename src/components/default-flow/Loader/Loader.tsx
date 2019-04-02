import * as style from './Loader.less'
import { PropsLoader } from './LoaderTypes'
import { h } from 'hyperapp'

export const Loader = ({ type, progress, size }: PropsLoader, children) => {

  if (type === 'ring') {
    const sizes = size === 'xs' ? [16, 1] : [120, 4] // Width, radiusWidth
    const c = sizes[0] / 2
    const stroke = sizes[1]
    const r = c - stroke
    const circumference = 2 * Math.PI * r
    const offset = circumference - progress / 100 * circumference
    const styleForeground = {
      strokeDasharray: [circumference, circumference],
      strokeDashoffset: offset
    }

    return (
      <div className={style['progress-ring'] + (size === 'xs' ? ' ' + style['progress-ring-xs'] : '')}>
        <svg>
          <circle class={style['progress-ring-background']} stroke-width={stroke} r={r} cx={c} cy={c}></circle>
          <circle class={style['progress-ring-foreground']} stroke-width={stroke} r={r} cx={c} cy={c} style={styleForeground}></circle>
        </svg>
        {children.length > 0 && <span className={style['progress-label']}>{children}</span>}
      </div>
    )
  }
}
