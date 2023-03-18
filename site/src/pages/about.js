import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {graphql} from "gatsby"

const AboutPage = ({data}) => (
    <Layout>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">About</h1>
                    </div>
                    <div
                            dangerouslySetInnerHTML={{ __html: data.allMicrocmsStatic.edges[0].node.content }}
                        />
                </div>
            </div>
        </section>
    </Layout>
)

export const Head = () => <Seo title="About" />

export const query = graphql`
    {
        allMicrocmsStatic(filter: {pageId: {eq: "about"}}) {
            edges {
            node {
                title
                content
            }
        }
    }
}
`

export default AboutPage