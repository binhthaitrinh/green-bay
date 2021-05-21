import { Box, Heading, Text, VStack } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Layout/Navbar"
import { IoMdQuote } from "react-icons/io"
import Seo from "../components/seo"

export default function Discover({ data }) {
  const image = getImage(data.markdownRemark.frontmatter.cover)
  const bgImage = convertToBgImage(image)
  return (
    <Layout>
      <Seo title={data.markdownRemark.frontmatter.title} />
      <header>
        <Navbar />
        <VStack
          alignItems="center"
          justifyContent="center"
          as={BackgroundImage}
          {...bgImage}
          preserveStackingContext
          height="70vh"
        >
          <Heading as="h1" color="white" fontWeight="normal" fontSize="56px">
            {data.markdownRemark.frontmatter.title}
          </Heading>
        </VStack>
      </header>
      <Box
        transform="translateY(-50px)"
        bg="white"
        maxW="1140px"
        m="auto"
        border="1px solid var(--chakra-colors-gray-200)"
        p="60px 80px"
      >
        <VStack
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          spacing={8}
        >
          <Icon as={IoMdQuote} w={20} h={20} />
          <VStack spacing={8}>
            {data.markdownRemark.frontmatter.description
              .split("\\n")
              .map((para, index) => (
                <Text key={index}>{para}</Text>
              ))}
          </VStack>
        </VStack>
      </Box>
      <Box
        as="Section"
        paddingBottom={14}
        borderBottom="1px solid var(--chakra-colors-gray-200)"
      >
        <Box maxW="768px" m="auto">
          <Box
            as="article"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></Box>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/destination/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        description
        cover {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
        }
      }
      html
    }
  }
`
