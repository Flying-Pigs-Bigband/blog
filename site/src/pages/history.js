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
          <div className="mt-4 -mb-3 max-w-2xl">
            <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-600">
              <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden my-8">
                  <table className="border-collapse table-fixed w-full text-sm">
                    <thead>
                      <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-500 dark:text-slate-400 text-left">Name</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-500 dark:text-slate-400 text-left">Place</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-500 dark:text-slate-400 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800">
                      {data.allMicrocmsHistory.nodes.map((node, index) => (
                        <tr key={index}>
                          <td className="border-b border-slate-100 dark:border-slate-700 p-2 pl-8 text-slate-500 dark:text-slate-400">
                            <Link to={"/live/" + node.slug}>{node.title}</Link>
                          </td>
                          <td className="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">{node.place}</td>
                          <td className="border-b border-slate-100 dark:border-slate-700 p-2 pr-8 text-slate-500 dark:text-slate-400">
                            {format(Date.parse(node.postDate), "yyyy年M月d日", {
                              locale: ja,
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
    }
  }
}
`

export default HistoryPage