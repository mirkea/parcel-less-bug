import { h, app } from "hyperapp"
import { Button, ButtonGroup } from '../../src/components/core/Button';
import "./buttons-view.less"; 


app({
  init: {},
  view: state => (
    <div> 
        <Button role="primary" >primary</Button>
        <Button role="danger" key="rejectEnvelope">danger</Button>
        <Button role="secondary">secondary</Button>
        <Button key="noRole">No role</Button>
        <Button role="secondary" dropdownToggle>dropdown</Button>

        <br/><br/>
        
        <Button role="secondary" block>Block</Button>
        
        <br/><br/>

        
        <ButtonGroup key="round">
          <Button role="secondary" active>round</Button>
          <Button role="secondary">round</Button>
          <Button role="secondary">round</Button>
        </ButtonGroup>

        <br/><br/>

        <ButtonGroup block>
          <Button role="secondary" active>hahaha</Button>
          <Button role="secondary">hahaha</Button>
          <Button role="secondary">hahaha</Button>
        </ButtonGroup>

        <br/><br/>

        <ButtonGroup key="outline">
          <Button active>hahaha</Button>
          <Button>hahaha</Button>
          <Button>hahaha</Button>
        </ButtonGroup>
        <br/><br/>

        <ButtonGroup key="boss">
          <Button active>hahaha</Button>
          <Button>hahaha</Button>
          <Button>hahaha</Button>
        </ButtonGroup>


    </div>
  ),
  container:document.body
})


