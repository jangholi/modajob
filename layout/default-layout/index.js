import React from "react"
import Header from './header'
import Footer from './footer'

const DefaultLayout = ({children, headerImg}) => (
    <>
        <Header img={headerImg} />
        this is DefaultLayout
        {children}
        <Footer />
    </>
)

export default DefaultLayout
