import React from "react"
import styles from '../../styles/Footer.module.scss'
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [enquiry, setEnquiry] = React.useState('');

    return(
        <div>
            <div className={'d-flex justify-content-center row m0 ' + styles.footer}>
                <div className="col-md-5 col-sm-12">
                    <p className={styles['form-title']}>
                        <span className='orange-color'>
                            CONTACT
                        </span> CARRINGTONS
                    </p>
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                            <textarea
                                className="form-control"
                                placeholder='Enquiry'
                                rows="3"
                                value={enquiry}
                                onChange={(e) => setEnquiry(e.target.value)}
                            />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 offset-md-1 col-sm-12 offset-sm-0">
                    <p className={styles['contact-info-title'] + 'mt30'}>Sales</p>
                    <p  className={styles['contact-info-text']}>0208 549 7788 <br/>
                        sales@carringtonsproperty.com
                    </p>

                    <p className={styles['contact-info-title']}>Lettings</p>
                    <p className={styles['contact-info-text']}>0208 549 3366 <br/>
                        lettings@carringtonsproperty.com
                    </p>

                    <IconContext.Provider value={{ color: 'black', size: '14px', backgroundColor: 'red' }}>
                        <div className={styles['icon-container']}>
                            <FaFacebookF />
                        </div>
                        <div className={styles['icon-container']}>
                            <FaTwitter />
                        </div>
                        <div className={styles['icon-container']}>
                            <FaLinkedinIn />
                        </div>
                        <div className={styles['icon-container']}>
                            <FaInstagram />
                        </div>
                        <div className={styles['icon-container']}>
                            <FaYoutube />
                        </div>
                    </IconContext.Provider>

                    <p className={styles['contact-info-text'] + ' '+ styles['address']}>
                        5-7 Kingston Hill  |  Kingston upon Thames  |  Surrey  |  KT2 7PW
                    </p>

                    <a href="/">
                        Click here to find us
                    </a>
                </div>
            </div>
            <div className={styles["sub-footer"]}>
                <div className='row'>
                    <div className={"col-md-6 " + styles['left-container']}>
                        <p>
                            Carrintons
                        </p>
                    </div>
                    <div className={"col-md-6 d-flex justify-content-end " + styles['right-container']}>
                       <p className='align-self-center'>
                           Copyright2021.Company Number.
                       </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
