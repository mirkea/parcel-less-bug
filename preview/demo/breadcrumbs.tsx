import { h, app } from 'hyperapp'
import '../../src/styles/base.less'

import { Breadcrumbs } from '../../src/components/default-flow/Breadcrumbs'
import { icons } from 've-ui-theme'

const kk = (state, step, event) => {
  return { ...state, step: step }
}

const crumbs = [
  {
    label: 'Client',
    icon: icons.officeBuilding,
    onClick: null
  },
  {
    label: 'Documents',
    icon: icons.user,
    onClick: null
  },
  {
    label: 'Documents',
    icon: icons.user,
    onClick: null
  },
  {
    label: 'Recipients',
    icon: icons.doc,
    onClick: null
  }
]

app({
  init: {
    navbarCollapsed: true,
    dropdownCollapsed: true,
    step: 1
  },
  view: state => (
    <div>
      <Breadcrumbs
        step={state.step}
        maxStep={3}
        items={crumbs}
        onItemClick={kk}
      />
    </div>
  ),
  container: document.body
})
