import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Content from "../components/privacy/Content"

export default function Experiences() {
  return (
    <Layout>
      <Seo title="Privacy Notice"></Seo>
      <header>
        <Navbar />
      </header>
      <Content />
    </Layout>
  )
}
