import Head from 'next/head'
import styles from '../styles/About.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";

export default function About() {
  return (
      <DefaultLayout headerImg='/headers/home-header.png' title={['ABOUT', 'CARRINGTONS']} >
        <div>
          <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>

            {/* sub header */}
            <div className="sub-header">
              <div className='row m0'>
                <div className={"col-md-1 col-sm-12 " + styles["about-sub-header"]}>
                  <img src="/about-images/logo-icon.png" />
                </div>
                <div className={"col-md-9 col-sm-12 " + styles["about-sub-header"]}>
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
                <div className={"col-md-2 d-flex justify-content-end"}>
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
                <div className={"col-md-4 col-sm-6 " + styles["list-container"]}>
                  <img src="/about-images/team1.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-header"]}></div>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["list-container"]}>
                  <img src="/about-images/team2.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-header"]}></div>
                </div>
                <div className={"col-md-4 col-sm-6 " + styles["list-container"]}>
                  <img src="/about-images/team3.jpg" alt=""/>
                  <div className={"d-flex full-height " + styles["blur-header"]}></div>
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

            {/* about description */}
            <div className="sub-header">
              <div className='row m0'>
                <div className={"col-md-1 col-sm-12 " + styles["about-sub-header"]}>
                  <img src="/about-images/quots.png" />
                </div>
                <div className={"col-md-9 col-sm-12 " + styles["about-sub-header"]}>
                  <p>
                    Carringtons recently dealt with the probate sale of a flat for me. Finding a buyer was made more difficult due to the difficulty in getting a mortgage for a flat in this particular building. However Callum was proactive in finding a buyer and was very diligent in following up the sale; dealing well with a few problems. All the other staff that I had dealings with were also very helpful.
                  </p>
                </div>
              </div>
            </div>

            {/* about process */}
            <div>
              <div className='row m0 p40'>
                <div className={"col-md-12 col-sm-12 " + styles["process-section"]}>
                  <p className='black-title text-left'>
                    <span className='orange-color'>
                      CARRINGTON'S <br/>
                    </span>
                    CORE VALUES
                  </p>
                  <img src="/about-images/process.png" />
                </div>
              </div>
            </div>

          </main>
        </div>
      </DefaultLayout>
  )
}
