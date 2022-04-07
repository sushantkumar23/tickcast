import "../styles/globals.css"

import Head from "next/head"
import Layout from "../components/layout"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Layout>
      <Head>
        <title>Cryptik - Better way of Ticketing</title>
        <meta
          property="og:title"
          content="Cryptik - Better way of ticketing"
          key="title"
        />
        <meta
          property="og:description"
          content="Cryptik leverages the power of blockchain to enhance the ticketing experience for everyone"
          key="description"
        />
        <meta property="og:type" content="website" key="type" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
