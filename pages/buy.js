import Head from 'next/head'
import styles from '../styles/buy.module.scss'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";
import Link from 'next/link'
import {FaBed, FaBath, FaRegHeart, FaHeart} from 'react-icons/fa'
import {GiSofa} from 'react-icons/gi'
import {IconContext} from "react-icons";

export default function Buy() {
    return (
        <DefaultLayout headerImg='/images/buy/header.jpg' title={['FIND YOUR DREAM HOME', 'WITH CARRINGTONS']} >
            <div>
                <Head>
                    <title>Buy</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    {/* sub header */}
                    <div className="sub-header pt15 pb15 pl40">
                        <div className={"row m0 " + styles.header}>
                            <div className={"col-md-1 col-sm-12"}>
                                <p className={"orange-color " + styles.title}>
                                    Buy
                                </p>
                            </div>
                            <div className={"col-md-10 d-flex"}>
                                <form className="row g-3 full-width align-self-center">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Location or Postcode"
                                        />
                                    </div>
                                    <div className="col">
                                        <select
                                            type="text"
                                            className="form-control"
                                        >
                                            <option value="">This area only</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className={"btn " + styles.button}>SEARCH</button>
                                    </div>
                                </form>
                            </div>
                            <div className={"col-lg-1 col-md-1 col-sm-12 order-first order-md-last d-flex justify-content-end"}>
                                <Navbar />
                            </div>
                        </div>
                    </div>

                    {/* filter */}
                    <div className={"pt15 pb15 pl40 " + styles.filter}>
                        <div className={"row m0"}>
                            <div className={"col-md-2 col-sm-12 d-flex"}>
                                <p className='align-self-center'>
                                    <IconContext.Provider
                                        value={{
                                            color: '#fcb336',
                                            size: '1rem'}}
                                    >
                                        <FaHeart />
                                    </IconContext.Provider>
                                    SHORTLIST
                                </p>
                            </div>
                            <div className={"col-md-6 d-flex"}>
                                <form className="row g-3 full-width align-self-center">
                                    <div className="col">
                                        <select
                                            type="text"
                                            className="form-control"
                                        >
                                            <option value="">MIN.BEDS</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select
                                            type="text"
                                            className="form-control"
                                        >
                                            <option value="">TYPE</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select
                                            type="text"
                                            className="form-control"
                                        >
                                            <option value="">MAX.PRICE</option>
                                            <option value="">2</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* list */}
                    <div className='full-width'>
                        <div className={"d-flex row m0 " + styles["about"]}>
                            <div className={"col-md-4 col-sm-12 " + styles['about-left-section']}>
                                <p>
                                    KINGSTON HILL<br/>
                                    <span className='orange-color'>
                                        KINGSTON UPON THAMES
                                    </span>

                                </p>
                                <p className='ml-0'>
                                    <IconContext.Provider value={{ color: 'gray', size: '1.3rem' }}>
                                        <div className={styles['icon-container']}>
                                            <FaBed />
                                            <span>5</span>
                                        </div>
                                        <div className={styles['icon-container']}>
                                            <GiSofa />
                                            <span>4</span>
                                        </div>
                                        <div className={styles['icon-container']}>
                                            <FaBath />
                                            <span>4</span>
                                        </div>
                                    </IconContext.Provider>
                                </p>
                                <p>
                                    A rare opportunity to acquire this stunning five bedroom family home with spacious accommodation arranged over four floors. A superb location, ideal for Richmond Park, Norbiton Station and Kingston.
                                </p>
                                <Link href="/">
                                    <a>
                                        View More &raquo;
                                    </a>
                                </Link>
                                <p>
                                    <span>
                                        Guide Price
                                    </span>
                                    <span>
                                        £1,350,000
                                    </span>
                                    <span className='pull-right'>
                                        <FaRegHeart />
                                    </span>
                                </p>
                            </div>
                            <div className={"col-md-7 offset-md-1 col-sm-0 " + styles["about-right-section"]}>
                                <img src="/images/home/about.jpg" />
                            </div>
                        </div>
                        <div className={"d-flex row m0 " + styles["about"]}>
                            <div className={"col-md-4 col-sm-12 " + styles['about-left-section']}>
                                <p>
                                    KINGSTON HILL<br/>
                                    <span className='orange-color'>
                                        KINGSTON UPON THAMES
                                    </span>

                                </p>
                                <p className='ml-0'>
                                    <IconContext.Provider value={{ color: 'gray', size: '1.3rem' }}>
                                        <div className={styles['icon-container']}>
                                            <FaBed />
                                            <span>5</span>
                                        </div>
                                        <div className={styles['icon-container']}>
                                            <GiSofa />
                                            <span>4</span>
                                        </div>
                                        <div className={styles['icon-container']}>
                                            <FaBath />
                                            <span>4</span>
                                        </div>
                                    </IconContext.Provider>
                                </p>
                                <p>
                                    A rare opportunity to acquire this stunning five bedroom family home with spacious accommodation arranged over four floors. A superb location, ideal for Richmond Park, Norbiton Station and Kingston.
                                </p>
                                <Link href="/">
                                    <a>
                                        View More &raquo;
                                    </a>
                                </Link>
                                <p>
                                    <span>
                                        Guide Price
                                    </span>
                                    <span>
                                        £1,350,000
                                    </span>
                                    <span className='pull-right'>
                                        <FaHeart />
                                    </span>
                                </p>
                            </div>
                            <div className={"col-md-7 offset-md-1 col-sm-0 " + styles["about-right-section"]}>
                                <img src="/images/home/about.jpg" />
                            </div>
                        </div>
                    </div>

                    {/* quote */}
                    <div className={styles["quote-section"]}>
                        <div className='row m0'>
                            <div className={"col-md-1 col-sm-12 " + styles["quote"]}>
                                <img src="/images/quotation.png" />
                            </div>
                            <div className={"col-md-9 col-sm-12 " + styles["quote"]}>
                                <p>
                                    Just a little note to thank you very warmly for your precious help to find an apartment. The lettings team has been wonderful.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </DefaultLayout>
    )
}
