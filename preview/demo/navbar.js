import { h, app } from "hyperapp"
import { Navbar, NavbarGroup, NavbarButton, NavbarDropdown, NavbarDropdownToggle } from '../../src/components/navigation/Navbar';
import { DropdownMenu, DropdownItem, DropdownDivider } from '../../src/components/core/Dropdown';
import { Button } from '../../src/components/core/Button';
import "../../src/styles/styles.less";

const ToggleNavbar = state => ({ ...state, navbarCollapsed: !state.navbarCollapsed })
const ToggleDropdown = state => ({ ...state, dropdownCollapsed: !state.dropdownCollapsed })
const kk = () => ( console.log("aaaa"))

app({
  init: {
    navbarCollapsed: true,
    dropdownCollapsed: true
  },
  view: state => (
    <div>
      <Navbar ></Navbar>
      <DropdownMenu  ></DropdownMenu>
      
      <br/>
      <br/>
      
      <Navbar role="secondary" collapsed={state.navbarCollapsed} toggle={ToggleNavbar}>
        <NavbarGroup  >
          <NavbarButton href="#" active>Dashboard</NavbarButton> 
          <NavbarButton href="#">Archive</NavbarButton> 
          <NavbarButton href="#">Templates</NavbarButton> 
        </NavbarGroup>
        <NavbarGroup align="right">
          <NavbarDropdown>
            <NavbarDropdownToggle onClick={ToggleDropdown}>EN</NavbarDropdownToggle>
            <DropdownMenu  right collapsed={state.dropdownCollapsed}>
              <DropdownItem>My settings</DropdownItem>
              <DropdownItem>Company settings</DropdownItem>
              <DropdownDivider/>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </NavbarDropdown>
          <NavbarButton href="#">Help</NavbarButton> 
        </NavbarGroup>
      </Navbar>

      <br/>
      <br/>


      <Navbar role="primary" collapsed={state.navbarCollapsed} toggle={ToggleNavbar}>
        <NavbarGroup>
          <Button>aaaa</Button>
        </NavbarGroup>
        <NavbarGroup right>
          <Button role="primary" rounded>NEXT</Button>
        </NavbarGroup>
      </Navbar>

    </div>
  ),
  container:document.body
})