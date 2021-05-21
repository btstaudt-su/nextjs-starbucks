import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'



export async function getStaticPaths() {

    const allSlugs = await getAllLocationSlugs()

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

    const LocationData = await getLocationBySlug(params.id)

    return {
        props : {
            LocationData
        }
    }

}

export default function Location({ LocationData }) {

    const { title, featuredImage, content } = LocationData;

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
            <Link href="/locations">
                <a>Back to locations</a>
            </Link>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </Layout>
    )
}