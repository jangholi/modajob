import Head from 'next/head'
import styles from '../styles/property-management.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";
import Link from 'next/link'

export default function PropertyManagement() {
    return (
        <DefaultLayout headerImg='/images/property-management/header.jpg' title={['PROPERTY MANAGEMENT', 'WITH CARRINGTONES']} >
            <div className={styles.container}>
                <Head>
                    <title>Property Management</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>

                    {/* sub header */}
                    <div className="sub-header">
                        <div className='row m0'>
                            <div className={"col-lg-1 col-md-2 col-sm-3 " + styles["about-sub-header"]}>
                                <img src="/images/quotation.png" />
                            </div>
                            <div className={"col-lg-10 col-md-9 col-sm-9 " + styles["about-sub-header"]}>
                                <p>
                                    As a landlord I can certainly say that Carringtons have provided an extremely professional and personal service. I have used larger agents with several offices previously, but would certainly recommend Carringtons in preference to them in the Kingston Hill/Norbiton/Ham area.
                                </p>
                            </div>
                            <div className={"col-lg-1 col-md-1 col-sm-12 order-first order-md-last d-flex justify-content-end mt-3"}>
                                <Navbar />
                            </div>
                        </div>
                    </div>

                    {/* how it works */}
                    <div className='full-width'>
                        <div className={"d-flex row m0 " + styles["property-description"]}>
                            <div className={"col-md-6 col-sm-12 " + styles['property-description-left-section']}>
                                <p>
                              <span className='orange-color'>
                                HOW
                                </span>
                                    <br/>
                                    IT WORKS
                                </p>
                                <p className={styles["how-works-text"]}>
                                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.Aquis volupta consequate velit essimus dis ex earia derunt, temperum volorep ratem. Itae volenducia soluptatur re sed ut que nost fugiass imincipit mo tem is vel idit adit omnis enesequiate volo occum ius cum re voluptatent debit miliquae delenis am
                                </p>
                            </div>
                            <div className={"col-md-6 col-sm-0 " + styles["property-description-right-section"]}>
                                <img src="/images/property-management/how-work.jpg" />
                            </div>
                        </div>
                    </div>

                    {/* what landlords needs */}
                    <div className={'full-width ' + styles["gray-bg"]}>
                        <div className={"d-flex row m0 " + styles["property-description"]}>
                            <div className={"col-md-6 col-sm-0 " + styles["property-description-right-section"]}>
                                <img src="/images/property-management/what-need.jpg" />
                            </div>
                            <div className={"col-md-6 col-sm-12 " + styles['property-description-left-section']}>
                                <p>
                              <span className='orange-color'>
                                WHAT
                                </span>
                                    <br/>
                                    LANDLORDS NEED
                                </p>
                                <p>
                                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.Axima senihilla cum harum de nobitatus mostia dolesto molores voloriat eum, omnimpo rioreperita debit min ne volorrum sunt ipsum a corporem quat aliquunt eatus ut mi, niet aciet que perios quodiatem ut adi tem hilles estem utecto eiunt.
                                    Minveru ntioruptis re aut int eos aboribe rferiae nis aceaquo ommo est et ut adiorec eptatur?
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </DefaultLayout>
    )
}
