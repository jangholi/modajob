import React from "react";
import Head from 'next/head'
import DefaultLayout from '../layout/default-layout'

export default function Login() {
    return (
        <DefaultLayout>
            <div>
                <Head>
                    <title>ثبت‌نام مداجاب</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <p>ثبت‌نام</p>
                </main>
             </div>
        </DefaultLayout>
    )
}
