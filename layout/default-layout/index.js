import React from "react"
import Header from './header'
import Footer from './footer'
import styles from '../../styles/Home.module.scss'
import Navbar from '../../components/navbar'

const DefaultLayout = ({children, headerImg}) => (
    <>
        <Header img={headerImg} />
        <div className={styles['sub-header']}>
            <div className='row'>
                <div className={"col-md-6"}>
                    <p>
                        left div
                    </p>
                </div>
                <div className={"col-md-6"}>
                    <Navbar />
                </div>
            </div>
        </div>
        this is DefaultLayout
        {children}
        <Footer />
    </>
)

export default DefaultLayout
