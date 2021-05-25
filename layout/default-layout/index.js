import React from "react"
import Header from './header/header'
import Footer from './footer/footer'

const DefaultLayout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default DefaultLayout
