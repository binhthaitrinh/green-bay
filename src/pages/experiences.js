import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Header from "../components/experiences/Header"
import Content from "../components/experiences/Content"

export default function Experiences() {
  return (
    <Layout>
      <Seo title="Experiences"></Seo>
      <header>
        <Navbar />
        <Header />
      </header>
      <Content />
    </Layout>
  )
}
