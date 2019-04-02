import { h, app } from 'hyperapp'
import { Alert } from '../../src/components/core/Alert'
import '../../src/styles/base.less'

const state = {}
const actions = {}

const ButtonClick = () => {
  console.log('ButtonClick')
}

app({
  init: {
    checked: false,
    step: 1,
    active: true
  },
  view: state => (
    <div>

      <Alert role='success'>This is a simple alert</Alert>

      <Alert role='danger' dismissable heading='Heading'>This is some heading content</Alert>

      <Alert role='warning' fixed dismissable>success fixed dismissable</Alert>

      <Alert role='success' fixed dismissable>success</Alert>
      <Alert fixed dismissable>default</Alert>
      <Alert fixed role='warning' dismissable onDismiss={ButtonClick}>warning dismissable!!!!!!!!!!</Alert>

      <Alert role='success' dismissable>success</Alert>
      <Alert dismissable>default</Alert>
      <Alert role='warning' dismissable>warning dismissable</Alert>
    </div>
  ),
  container: document.body
})
