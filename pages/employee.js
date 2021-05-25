import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Employee() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title> ویژه کارجویان</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <p> ویژه کارجویان</p>
                </main>
            </div>
        </DefaultLayout>
    )
}
