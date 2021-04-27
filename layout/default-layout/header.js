import React from "react"
import styles from '../../styles/Header.module.scss'

const Header = ({img}) => (
    <div className={styles['header-container']}>
        <img className={styles.header} src={img} alt=""/>
        <div className={"d-flex flex-column " + styles['blur-header']}>
            <img src="/logo.png" alt=""/>
            <div className="d-flex full-height">
                <p className='align-self-center'>Properties in KingSton <br/>
                    & surrounding areas</p>
            </div>
        </div>
    </div>
)

export default Header
