import React from "react"
import styles from './header.module.scss'

const Header = () => (
    <div className={styles['header-container']}>
        <img className={styles.header}  alt=""/>
        <div className={"d-flex flex-column " + styles['blur-header']}>
            <img src="/images/logo.png" alt=""/>
            <div className="d-flex full-height">
                ddd
            </div>
        </div>
    </div>
)

export default Header
