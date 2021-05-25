import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Employer() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title> ویژه کارفرمایان</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <p> ویژه کارفرمایان</p>
                </main>
            </div>
        </DefaultLayout>
    )
}
