import React from "react"
import Header from './header'
import Footer from './footer'

const DefaultLayout = ({children, headerImg, title}) => (
    <>
        <Header img={headerImg} title={title} />
        {children}
        <Footer />
    </>
)

export default DefaultLayout
