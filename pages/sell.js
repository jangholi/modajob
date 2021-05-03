import Head from 'next/head'
import styles from '../styles/sell.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";

export default function Sell() {
    return (
        <DefaultLayout headerImg='/images/about/header.jpg' title={['SELL your property', 'WITH CARRINGTONS']} >
            <div>
                <Head>
                    <title>Sell</title>
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
                                    From the outset, it was clear that our property would be a unique sale due to the fact that it was both commercial and residential. Despite this, Carringtons were open and honest with us and helped us to find a suitable buyer. Every step along the way, Alex and his team have spent hours of time in chasing paperwork, ringing buyers and giving us sound advice so that we would get the best possible outcome. As a family, we feel that Carringtons really couldn't have done anymore for us and we are exceptionally grateful. We feel that the team, especially Alex, went above and beyond what was expected of them. Thank you once again for your professionalism, swiftness and commitment.
                                </p>
                            </div>
                            <div className={"col-lg-1 col-md-1 col-sm-12 order-first order-md-last d-flex justify-content-end mt-3"}>
                                <Navbar />
                            </div>
                        </div>
                    </div>

                    {/*video section*/}
                    <div className='full-width'>
                        <div className={"d-flex row m0 " + styles["about"]}>
                            <div className={"col-lg-1 col-md-2 col-sm-3 " + styles["about-sub-header"]}>
                                <img src="/images/logo-icon.png" />
                            </div>
                            <div className={"col-lg-5 col-md-5 col-sm-9 d-flex align-self-center " + styles['about-left-section']}>
                                <div>
                                    <p>
                                        Inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.Volorem ossuntibus plam, si optatias es molores toreritat enest ipit, busam dolupturione alit
                                    </p>
                                    <p>
                                        Quid ut vendae. Et lam et ut alitassum restion severum ad mi, simus eriam fugiae qui consed et quam volorendio. Equatque voloriossim dolorum reperitas.
                                    </p>
                                    <p>
                                        Rectass inullab orepta nulpa velendigenet laboria nonse re serum in pos autempo repellab incipsa nducia qui con nonsequi volest, is dolende re pres molla alignisincit od que precum eri sus.
                                    </p>
                                </div>
                            </div>
                            <div className={"col-lg-6 col-md-5 col-sm-12 " + styles["about-right-section"]}>
                                <img src="/images/home/about.jpg" className='pt30' />
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </DefaultLayout>
    )
}
