import React from "react";
import Head from 'next/head';
import EmployeeLayout from '../layout/employee-layout';


export default function About() {

    return (
        <EmployeeLayout>
            <div>

                <Head>
                    <title>جستجوی مشاغل</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>

                    <p>about</p>

                </main>

            </div>
        </EmployeeLayout>
    )
}
