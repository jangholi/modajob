import Head from 'next/head'
import styles from '../styles/about.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";

export default function About() {
  return (
      <DefaultLayout headerImg='/images/about/header.jpg' title={['ABOUT', 'CARRINGTONS']} >
        <div>
          <Head>
            <title>About Us</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>

            {/* sub header */}
            <div className="sub-header">
              <div className='row m0'>
                <div className={"col-lg-1 col-md-2 col-sm-3 " + styles["about-section"]}>
                  <img src="/images/logo-icon.png" />
                </div>
                <div className={"col-lg-10 col-md-9 col-sm-9 " + styles["about-section"]}>
                  <p>
                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.Volorem ossuntibus plam, si optatias es molores toreritat enest ipit, busam dolupturione alit <br/>
                  </p>
                  <p>
                    Quid ut vendae. Et lam et ut alitassum restion sequis doluptat aut laborupta volupid qui quodissi verum ad mi, simus eriam fugiae qui consed et quam volorendio. Equatque voloriossim dolorum quiam ne autem acia inum, nis cuptasi mporeperitas.<br/>
                  </p>
                  <p>
                    Rectass inullab orepta nulpa velendigenet laboria nonse re serum in pos autempo repellab incipsa nducia qui con nonsequi volest, is dolende volorio reprem cum inum faccabores venitatur rae entiore pres molla alignisincit od que precum eri sus.
                  </p>
                </div>
                <div className={"col-lg-1 col-md-1 col-sm-12 order-first order-md-last d-flex justify-content-end mt-3"}>
                  <Navbar />
                </div>
              </div>
            </div>

            {/* Meat Team */}
            <div>
              <div className='row m0'>
                <div className={"col-md-11 col-sm-12 " + styles["meat-team"]}>
                  <p className="black-title">
                        <span className='orange-color'>
                            MEET <br/>
                        </span> THE TEAM
                  </p>
                  <p >
                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.
                  </p>
                </div>
              </div>
            </div>

            {/* team vidoe */}
            <div className='full-width'>
              <div className='row m0'>
                <div className={"col-md-4 col-sm-6 " + styles["video-container"]}>
                  <img src="/images/about/team1.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-div"]}></div>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["video-container"]}>
                  <img src="/images/about/team2.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-div"]}></div>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["video-container"]}>
                  <img src="/images/about/team3.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-div"]}></div>
                </div>
              </div>
            </div>

            {/* team description */}
            <div className='full-width mt2 mb2'>
              <div className='row m0'>
                <div className={"col-md-4 col-sm-6 " + styles["team-description"]}>
                  <p>NAME</p>
                  <p>
                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.
                  </p>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["team-description"]}>
                  <p>NAME</p>
                  <p>
                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.
                  </p>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["team-description"]}>
                  <p>NAME</p>
                  <p>
                    About usTum lam, as inctur, eiumquae venisquae. Nam non cus ma quunt pe pro conse landit repratia que nonsectate nis enia dolorep.
                  </p>
                </div>
              </div>
            </div>

            {/* about */}
            <div className="sub-header">
              <div className='row m0'>
                <div className={"col-lg-1 col-md-2 col-sm-3 " + styles["about-section"]}>
                  <img src="/images/quotation.png" />
                </div>
                <div className={"col-lg-11 col-md-10 col-sm-9 " + styles["about-section"]}>
                  <p>
                    Carringtons recently dealt with the probate sale of a flat for me. Finding a buyer was made more difficult due to the difficulty in getting a mortgage for a flat in this particular building. However Callum was proactive in finding a buyer and was very diligent in following up the sale; dealing well with a few problems. All the other staff that I had dealings with were also very helpful.
                  </p>
                </div>
              </div>
            </div>

            {/* process */}
            <div>
              <div className='row m0 p40'>
                <div className={"col-md-12 col-sm-12 " + styles["process-section"]}>
                  <p className='black-title text-left'>
                    <span className='orange-color'>
                      CARRINGTON'S <br/>
                    </span>
                    CORE VALUES
                  </p>
                  <img src="/images/about/process.png" />
                </div>
              </div>
            </div>

          </main>
        </div>
      </DefaultLayout>
  )
}
