import * as styles from './Illustration.less'
import { h } from 'hyperapp'
import { PropsIllustration } from './IllustrationTypes'

export const Illustration = ({ className, dataKey, src }: PropsIllustration) => (
  <span
    className={'illustration ' + styles['illustration'] + ' ' + (className ? className : '')}
    innerHTML={src.file}
    style={{ width: src.width, height: src.height }}
    data-key={dataKey}
  />
)
