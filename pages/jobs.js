import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Jobs() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title>جستجوی مشاغل</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <p>جستجوی مشاغل</p>
                </main>
            </div>
        </DefaultLayout>
    )
}
