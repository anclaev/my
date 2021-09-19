import { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <main>Привет, мир!</main>
    </Layout>
  )
}

export default IndexPage
