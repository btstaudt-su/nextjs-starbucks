import Layout from "../../components/layout";
import Section from "../../components/section"
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

import { getAllLocations } from '../../lib/api'

export async function getStaticProps() {

    const locations = await getAllLocations()

    return {
        props: { locations }
    }
}

export default function Location({ locations }) {
    return (
        <Layout>
            <h1>Locations</h1>
            <p>Where we keep our store locations.</p>
                    <Row justifyContentCenter>
                        {locations.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} parentPath = "locations" />
                        </Col>
                })}
                </Row>
            )
        </Layout>
    )
}