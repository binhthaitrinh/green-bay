import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Header from "../components/sustainable-hospitality/Header"
import Content from "../components/sustainable-hospitality/Content"

export default function Experiences() {
  return (
    <Layout>
      <Seo title="Sustainable Hospitality"></Seo>
      <header>
        <Navbar />
        <Header />
      </header>
      <Content />
    </Layout>
  )
}
