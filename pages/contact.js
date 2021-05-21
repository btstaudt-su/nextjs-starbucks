// next.js components
import Head from 'next/head'

// custom components
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact Information</title>
                <meta name="description" content="Exactly what it says"/>
            </Head>
            <h1>Contact Information</h1>
            <p>Welcome to contact information</p>
        </Layout>
    )
}