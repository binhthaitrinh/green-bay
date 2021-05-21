import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Offers from "../components/Offers"
import AboutUs from "../components/about-us"
import Discover from "../components/Discover"
import Favorites from "../components/Favorites"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Offers />
    <AboutUs />
    <Discover />
    <Favorites />
  </Layout>
)

export default IndexPage
