import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'
import React from "react";

export default function Blog() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title> مجله تصویری</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <p> مجله تصویری</p>
                </main>
            </div>
        </DefaultLayout>
    )
}
