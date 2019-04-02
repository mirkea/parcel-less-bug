import { h, app } from 'hyperapp'
import { Checkbox, RadioButton } from '../../src/components/core/Form';
import { Icon } from '../../src/components/core/Icon';
import { Illustration } from '../../src/components/core/Illustration';
import { icons, illustrations  } from 've-ui-theme';
import { Loader } from '../../src/components/default-flow/Loader'
import { size } from 'typescript'
import { DropdownMenu, Dropdown, DropdownItem, DropdownDivider, DropdownToggle } from '../../src/components/core/Dropdown'
import { Alert } from '../../src/components/core/Alert'
import { Button, ButtonGroup } from '../../src/components/core/Button'
import { Dropdown } from '../../.history/src/components/core/Dropdown_20190218174119'

const state = {}
const actions = {}

const ToggleCheckbox = state => ({ ...state, disabled: true, checked: false })

const ToggleDropdown = state => ({ ...state, active: !state.active })

const ButtonClick = () => {
  console.log('ButtonClick')
}

const txtChanged = (state, e) => {
  e.target.value = '222'
}

const kk = (e) => {
  console.log('aaaaaaaaaa', e)
  e.target.focus()
}

const txtBlur = (state, e) => {
  setTimeout(kk, 1000, e)


}

app({
  init: {
    checked: false,
    step: 1,
    active: true
  },
  view: state => (
    <div>
    <p>hahahahahaaaaa</p>

    <div>
      <Dropdown fullWidth>
        <DropdownToggle onClick={ToggleDropdown}>asas</DropdownToggle>
        <DropdownMenu collapsed={state.active} >
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem active={true}>Company settings</DropdownItem>
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem>My settings</DropdownItem>
          <DropdownDivider/>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

      <Alert role='success'>This is a simple alert</Alert>

      <Alert role='danger' dismissable heading='Heading'>This is some heading content</Alert>

      <Alert role='warning' fixed dismissable>success</Alert>

      <Alert role='success' fixed dismissable>success</Alert>
      <Alert fixed dismissable>default</Alert>
      <Alert fixed role='warning' dismissable onDismiss={ButtonClick}>warning dismissable!!!!!!!!!!</Alert>


      <Alert role='success' dismissable>success</Alert>
      <Alert dismissable>default</Alert>
      <Alert role='warning' dismissable>warning dismissable</Alert>

      <RadioButton id='haha2' align='right' disabled={state.disabled} checked={false} onClick={ToggleCheckbox} >aaaaa checked</RadioButton>
      <RadioButton id='haha3' >aaaaa checked</RadioButton>
      <br />
      checked={String(state.checked)}<br/>
      <Button role='primary' onClick={ButtonClick}>Bubuton</Button>
      <Icon src={icons.bell} size='lg' />
      <Icon src={icons.bell} color='muted' size='lg' />
      <Illustration src={illustrations.document}/>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div>
        <span>aaa</span>a
        <DropdownMenu collapsed={false} form>
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem>My settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </div>

      <input value='aaaa' type='text' onChange={txtChanged} onBlur={txtBlur} />

      <Loader type='ring' progress={99}>Loading</Loader>
      <Loader type='ring' size='xs' progress={75}/>
    </div>
  ),
  container: document.body
})
