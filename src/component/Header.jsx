import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input,setinput]=useState('')

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className='mt-2 mr-2'>
              <Link to={`/login/${input}`} style={{textDecoration:'none',color:'black'}}>Login</Link>
            </NavItem>
            <NavItem className='mt-2'>
              <Link to='/register' style={{textDecoration:'none',color:'black'}}>Register</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <input type='text' value={input} onChange={(e)=>setinput(e.target.value)}/>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;