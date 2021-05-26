import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Content from "../components/contact/Content"

export default function Experiences() {
  return (
    <Layout>
      <Seo title="Contact"></Seo>
      <header>
        <Navbar />
      </header>
      <Content />
    </Layout>
  )
}
