import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Link from 'next/link'
import styles from "./Navbar.module.scss";

function NavbarMenu() {
   return(
       <Navbar expand="lg">
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className={"mr-auto d-flex justify-content-between full-width " + styles['navbar']} >
                   <Link href="/">
                       <a>
                           صفحه اصلی
                       </a>
                   </Link>
                   |
                   <Link href="/jobs">
                       <a>
                           جستجوی مشاغل
                       </a>
                   </Link>
                   |
                   <Link href="/cv">
                       <a>
                           رزومه‌ساز
                       </a>
                   </Link>
                   |
                   <Link href="/employee">
                       <a>
                           ویژه کارجویان
                       </a>
                   </Link>
                   |
                   <Link href="/employer">
                       <a>
                           بخش کارفرمایان
                       </a>
                   </Link>
                   |
                   <Link href="/blog">
                       <a>
                           مجله تصویری
                       </a>
                   </Link>
                   |
                   <Link href="https://modaacademy.ir" >
                       <a target='_blank'>
                           آموزش تخصصی
                       </a>
                   </Link>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
   )
}

export default NavbarMenu