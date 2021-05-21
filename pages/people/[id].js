import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

import { getAllPeopleSlugs, getPersonBySlug } from '../../lib/api'



export async function getStaticPaths() {

    const allSlugs = await getAllPeopleSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {

    const PersonData = await getPersonBySlug(params.id)

    return {
        props : {
            PersonData
        }
    }

}

export default function Location({ PersonData }) {

    const { title, featuredImage, content } = PersonData;

    const { sourceUrl, mediaDetails, altText} = featuredImage.node;
    const { width, height } = mediaDetails;

    return (
        <Layout>
            
            <Image 
                src ={sourceUrl}
                width = {width}
                height = {height}
                alt = {altText}
            />
            <Link href="/people">
                <a>Back to people</a>
            </Link>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}