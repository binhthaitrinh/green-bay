import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import Seo from "../components/seo"
import Header from "../components/destination/Header"

export default function Destination() {
  return (
    <Layout>
      <Seo title="Destination"></Seo>
      <header>
        <Navbar />
        <Header />
      </header>
    </Layout>
  )
}
