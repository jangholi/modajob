import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styles from '../../styles/navbar-component.module.scss'

function NavbarMenu() {
   return(
       <Navbar className = {styles.navbar} expand="xs">
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse className={styles.collapse} id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Nav.Link href="#home">HOME</Nav.Link>
                   <Nav.Link href="#link">ABOUT US</Nav.Link>
                   <Nav.Link href="#link">BUY</Nav.Link>
                   <Nav.Link href="#link">RENT</Nav.Link>
                   <Nav.Link href="#link">SELL</Nav.Link>
                   <Nav.Link href="#link">LOG IN</Nav.Link>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
   )
}

export default NavbarMenu