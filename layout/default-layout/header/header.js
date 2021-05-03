import React from "react"
import styles from './header.module.scss'

const Header = ({img, title}) => (
    <div className={styles['header-container']}>
        <img className={styles.header} src={img} alt=""/>
        <div className={"d-flex flex-column " + styles['blur-header']}>
            <img src="/images/logo.png" alt=""/>
            <div className="d-flex full-height">
                <p className='align-self-center'>
                    {title.map((e) => (
                        <>
                            {e} <br />
                        </>
                    ))}
                </p>
            </div>
        </div>
    </div>
)

export default Header
