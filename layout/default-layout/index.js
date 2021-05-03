import React from "react"
import Header from './header/header'
import Footer from './footer/footer'

const DefaultLayout = ({children, headerImg, title}) => (
    <>
        <Header img={headerImg} title={title} />
        {children}
        <Footer />
    </>
)

export default DefaultLayout
