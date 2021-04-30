import React from "react"
import Header from './header'
import Footer from './footer'
import styles from '../../styles/Home.module.scss'
import Navbar from '../../components/navbar'

const DefaultLayout = ({children, headerImg, title}) => (
    <>
        <Header img={headerImg} title={title} />
        {children}
        <Footer />
    </>
)

export default DefaultLayout
