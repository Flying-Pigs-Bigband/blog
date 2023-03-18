import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { graphql, Link, navigate } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">no fly, no pigs</h1>
                <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Pigs Can Fly: Experience the Magic of our Big Band</p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://images.microcms-assets.io/assets/5084b49f40dd4197ad075bb54f28547b/edc40e256e484652aee7d3ec45b40f03/flying-pigs.png" alt="flying-pigs" />
            </div>
        </div>
    </section>

<div className="bg-white pt-6 sm:pt-8 lg:pt-12">
  <div className="max-w-screen-2xl px-4 md:px-24 pb-4 mx-auto">
    <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-indigo-500 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 md:px-8 py-3">
        <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0">
        お知らせ：「横須賀トモダチジャズ2022」に出演しました。
        <a href="/" className="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2">詳細はこちら</a>
        </div>
    </div>
  </div>
</div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Live History</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-right">都内・横浜で年間1～2回のLive開催を目標に活動しています。</p>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      {data.allMicrocmsHistory.edges.map((edge, index) => (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={edge.node.eyeCatchImg.url} alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{edge.node.category[0]}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{edge.node.title}</h1>
              <p className="leading-relaxed mb-3">{edge.node.leadingText}</p>
                <div className="flex items-center flex-wrap ">
                <Link to={"/live/" + edge.node.slug} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                {format(Date.parse(edge.node.postDate), "yyyy年M月d日", {
                  locale: ja,
                })}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{navigate("/history")}}>View All</button>
</section>
</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Top" />

export default IndexPage

export const query = graphql`
{
    allMicrocmsStatic(filter: {pageId: {eq: "top"}}) {
      edges {
        node {
          pageId
          title
          author
          content
        }
      }
    }
    allMicrocmsHistory(limit: 3, sort: {postDate: DESC}) {
        edges {
          node {
            auther
            category
            place
            title
            postDate
            slug
            post
            leadingText
            eyeCatchImg {
              url
              height
              width
            }
          }
        }
    }
  }
`