import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Cv() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title>رزومه‌ساز</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <p>رزومه‌ساز</p>
                </main>
            </div>
        </DefaultLayout>
    )
}
