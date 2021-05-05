import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import Navbar from "../components/navbar";
import React from "react";
import {FaBed, FaBath, FaHeart} from 'react-icons/fa'
import {GiSofa} from 'react-icons/gi'
import {IconContext} from "react-icons";
import ImageGallery from 'react-image-gallery';
import styles from '../styles/property-info.module.scss'

export default function PropertyInfo() {
    const [images, setImages] = React.useState([]);

    React.useEffect(() =>{

        const images = [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];
        setImages(images)
    }, []);

    let renderLeftNav = (onClick, disabled) => {
        return (
            <div
                className= {"image-gallery-icon image-gallery-left-nav " + styles["triangle-left"]}
                disabled={disabled}
                onClick={onClick}
            />
        )
    }

    let renderRightNav = (onClick, disabled) => {
        return (
            <div
                className= {"image-gallery-icon image-gallery-right-nav " + styles["triangle-right"]}
                disabled={disabled}
                onClick={onClick}
            />
        )
    }


    return (
        <DefaultLayout headerImg='/images/property-info/header.jpg' >
            <div>
                <Head>
                    <title>Home Page</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    {/* sub header */}
                    <div className="sub-header pl40">
                        <div className={"row m0"}>
                            <div className={"col-md-8 d-flex " + styles.header}>
                                <a href='/' className='mr-5'>
                                    <img src="/images/left-arrow.png" width='25'/>
                                    BACK TO RESULTS
                                </a>
                                <span className='align-self-center'>
                                    <IconContext.Provider
                                        value={{
                                            color: '#fcb336',
                                            size: '1rem'}}
                                    >
                                        <FaHeart />
                                    </IconContext.Provider>
                                    SHORTLIST
                                </span>
                            </div>
                            <div className={"col-md-3 order-first order-md-last  d-flex justify-content-end"}>
                                <Navbar />
                            </div>
                        </div>
                    </div>

                    {/* image gallery */}
                    <div className='full-width p40'>
                        <div className={"d-flex row m0"}>
                            <div className={"col-md-12 col-sm-12"}>
                                <ImageGallery
                                    items={images}
                                    showPlayButton = {false}
                                    showFullscreenButton = {false}
                                    renderLeftNav={renderLeftNav}
                                    renderRightNav={renderRightNav}
                                 />
                            </div>
                        </div>
                    </div>

                    {/* detaile section */}
                    <div className='full-width'>
                        <div className={"d-flex row m0 " + styles["detail"]}>
                            <div className={"col-md-7 col-sm-12 " + styles['detail-left-section']}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className={styles.title}>
                                            DERWENT AVENUE<br/>
                                            <span className='orange-color'>
                                            LONDON SW15
                                            </span>

                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
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
                                    </div>
                                </div>
                                <div className={"row " + styles["description"]}>
                                    <div className="col-md-2">
                                        <p className={styles["title"]}>OVERVIEW</p>
                                    </div>
                                    <div className="col-md-10">
                                        <p>
                                            <span> 5 </span>
                                            Bedrooms
                                        </p>
                                        <p>
                                            <span> 2 </span>
                                            Reception rooms
                                        </p>
                                        <p>
                                            <span> 3 </span>
                                            Bathrooms
                                        </p>
                                        <p>
                                            <span> 2681 </span>
                                            sq/feet
                                        </p>
                                        <p className='mb70'>
                                            A rare opportunity to acquire this stunning five bedroom family home with spacious accommodation arranged over four floors. A superb location, ideal for Richmond Park, Norbiton Station and Kingston.
                                        </p>
                                        <div className="col-md-12 p-0">
                                            <button type="submit" className={"btn gray-btn mr15"}>FLOORPLAN</button>
                                            <button type="submit" className={"btn yellow-btn mr15"}>BROCHURE</button>
                                            <button type="submit" className={"btn gray-btn"}>EPC</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-4 offset-md-1 " + styles["detail-right-section"]}>
                                <p className={styles["add-to-list"]}>
                                    <span className='mr15'>
                                        <FaHeart />
                                    </span>
                                    <span>
                                        ADD TO SHORTLIST
                                    </span>
                                </p>
                                <p className={styles["price"]}>
                                    <span>
                                        Guide Price
                                    </span>
                                    <span className={'pull-right'}>
                                        £1,350,000
                                    </span>
                                </p>
                                <div className={styles["map-container"]}>
                                    dddd
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </DefaultLayout>
    )
}
