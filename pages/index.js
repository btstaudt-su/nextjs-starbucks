// next.js components
import Head from 'next/head'


//custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

// styles


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <h1>Ben Staudt</h1>
        <p>Its me</p>
        <Button 
          label="View menu" 
          path="/menu"
          type="primary"
        />
         <Button 
          label="View locations" 
          path="/locations"
          type="primary"
        />
        <Button 
          label="View people" 
          path="/people"
          type="primary"
        />
        <Button 
          label="View portfolio" 
          path="/portfolio"
          type="primary"
        />
        <Button 
          label="About me" 
          path="/about"
          type="secondary"
        />
      </section>
    </Layout>
  )
}