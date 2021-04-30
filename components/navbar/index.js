import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styles from '../../styles/navbar-component.module.scss'
import Link from 'next/link'

function NavbarMenu() {
   return(
       <Navbar className = {"align-self-center " + styles.navbar} expand="xs">
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse className={styles.collapse} id="basic-navbar-nav">
               <Nav className="mr-auto">
                   <Link href="/">
                       <a>
                           HOME
                       </a>
                   </Link>
                   <Link href="/about">
                       <a>
                           ABOUT US
                       </a>
                   </Link>
                   <Link href="/buy">
                       <a>
                           BUY
                       </a>
                   </Link>
                   <Link href="/rent">
                       <a>
                           RENT
                       </a>
                   </Link>
                   <Link href="/sell">
                       <a>
                           SELL
                       </a>
                   </Link>
                   <Link href="/login">
                       <a>
                           LOG IN
                       </a>
                   </Link>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
   )
}

export default NavbarMenu