import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Header from "../components/dining/Header"
import Content from "../components/dining/Content"

export default function Experiences() {
  return (
    <Layout>
      <Seo title="Dining"></Seo>
      <header>
        <Navbar />
        <Header />
      </header>
      <Content />
    </Layout>
  )
}
