import { h, app } from 'hyperapp'
import { Loader } from '../../src/components/default-flow/Loader'
import { icons, illustrations } from 've-ui-theme'
import { Icon } from '../../src/components/core/Icon'
import { Illustration } from '../../src/components/core/Illustration'
import '../../src/components/core/Tooltip/Tooltip.less'
import '../../src/components/core/Icon/Icon.less'
import { spawn } from 'child_process'

app({
  init: {},
  view: state => (
    <div>
      <Loader type='ring' progress={75} />
      <Icon src={icons.officeBuilding} color='primary' />
      [{illustrations.document.width}]
      <Illustration src={illustrations.document} />
      <div>
        [
        <Icon src={icons.bulletsContextMenu} color='muted' size='lg' />
        <Icon src={icons.bulletsContextMenu} color='primary' />
        ]
      </div>
      {/*   />
        <br/><br/><br/><br/>
        <Switch id="hehe" checked>asasas</Switch>
        <br/>
        <Switch id="hehe3" disabled>disabled</Switch>
        <br/>
        <Switch id="hehe4" align="right"/>
        <br/>
        <Switch id="hehe2"></Switch>
        {/* ---------------------------------------------------------------- */}
      {/* <br/><br/><br/>
        <Switch id="hehe5">disabled</Switch>
        <br/>
        <Switch id="hehe5"></Switch>
        <br/>
        <Switch id="hehe5"><span>aaaaa</span></Switch>
        <br/>
        <Switch id="hehe5"><span>aaaaa</span><span>aaaaa</span></Switch> */}
      <span> ioshdf <span tooltip='sfdsf'>top tooltip</span> <span tooltip='sfdsf' tooltip-position='bottom'>bottom tooltip</span>isdhfasd fiasu hfioasfhiuasd fiash dfoiasd hfi</span>
    </div>
  ),
  container: document.body
})
