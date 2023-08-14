import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link, graphql} from "gatsby"
import { format } from "date-fns"
import { ja } from "date-fns/locale"

const HistoryPage = ({data}) => (
  <Layout>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="md:flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">History</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.allMicrocmsStatic.edges[0].node.content }}
          />
          <div className="grid grid-cols-3 gap-4">
          {data.allMicrocmsHistory.nodes.map((node, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <Link to={"/live/" + node.slug}>
                <img className="rounded-t-lg" src={node.eyeCatchImg.url} alt="" />
              </Link>
              <div className="p-5">
                <Link to={"/live/" + node.slug}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{node.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">
                  {format(Date.parse(node.postDate), "yyyy年M月d日", {
                    locale: ja,
                  })}<br/>
                  {node.place}
                </p>
                <Link to={"/live/" + node.slug} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="History" />

export const query = graphql`
{
  allMicrocmsStatic(filter: {pageId: {eq: "history"}}) {
    edges {
      node {
        title
        content
      }
    }
  }
  allMicrocmsHistory(sort: {postDate: DESC}) {
    nodes {
      title
      place
      postDate
      slug
      eyeCatchImg {
        url
        height
        width
      }    }
  }
}
`

export default HistoryPage