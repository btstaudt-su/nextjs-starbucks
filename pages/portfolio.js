// next.js components
import Head from 'next/head'

// custom components
import Layout from '../components/layout'

export default function Portfolio() {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Ben Staudt</title>
                <meta name="description" content="A robust portfolio of web design projects"/>
            </Head>
            <h1>Portfolio</h1>
        </Layout>
    )
}