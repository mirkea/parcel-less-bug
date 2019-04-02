import { h, app } from 'hyperapp'
import { Form, FormGroup, Input,Label, InputError, RadioButton,Checkbox } from '../../src/components/core/Form'
import { Switch } from '../../src/components/core/Switch'
import '../../src/styles/styles.less';

const ButtonClick = () => {
  console.log('ButtonClick')
}

app({
  init: {},
  view: state => (
    <div style={{ padding: '100px'}}>
    <Form>
      <FormGroup>
        <Input type='text' placeholder='name@example.com' />
      </FormGroup>
      <FormGroup>
        <Label>With label</Label>
        <Input type='password' />
      </FormGroup>
      <FormGroup>
        <Label>Disabled</Label>
        <Input type='text' disabled/>
      </FormGroup>
      <FormGroup>
        <Input type='text' placeholder='name@example.com' invalid />
        <InputError>Ooops</InputError>
      </FormGroup>
      <FormGroup>

      <RadioButton id='haha2' align='right' disabled={state.disabled} checked={false}  >aaaaa checked</RadioButton>


      </FormGroup>
      <br/>
      <RadioButton id='haha3' onClick={ButtonClick}  >aaaaa checked</RadioButton>
      <br/>
      <br/>
      <Checkbox id='haha4' onClick={ButtonClick} >aaaaa checked</Checkbox><br/>
      <br/>
      <br/>
      <Switch id='haha5' onClick={ButtonClick} >aaaaa checked</Switch>
      <br/>
      <br/>
      <Switch id='haha6' onChange={ButtonClick} />
      <Label htmlFor='haha6'> tot eu baaaa</Label>
    </Form>
  </div>
  ),
  container: document.body
})
