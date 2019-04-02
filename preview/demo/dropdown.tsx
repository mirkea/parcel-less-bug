import { h, app } from "hyperapp"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownDivider } from '../../src/components/core/Dropdown';
import "../../src/styles/styles.less";

const ToggleDropdown = state => ({ ...state, dropdownCollapsed: !state.dropdownCollapsed })


app({
  init: {
    dropdownCollapsed: false
  },
  view: state => (
    <div>
      <Dropdown fullWidth>
        <DropdownToggle onClick={ToggleDropdown}>asas</DropdownToggle>
        <DropdownMenu collapsed={state.dropdownCollapsed} >
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
  ),
  container:document.body
})


