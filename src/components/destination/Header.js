import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default function Header() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(
        fileAbsolutePath: { regex: "/destination/" }
        frontmatter: { role: { eq: "overview" } }
      ) {
        frontmatter {
          title
          excerpt
          cover {
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  console.log(data)
  const { excerpt, title, cover } = data.markdownRemark.frontmatter
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="60vh">
      <Box gridColumn="1 / 3">
        <GatsbyImage
          image={getImage(cover)}
          alt="Destination cover"
          objectFit="cover"
          width="100%"
          style={{ maxHeight: "100%" }}
        />
      </Box>
      <VStack
        justifyContent="center"
        alignItems="flex-start"
        gridColumn="3/-1"
        p="0px 180px 0px 60px"
      >
        <Heading as="h1" color="brandColor" fontWeight="medium" fontSize="48px">
          {title}
        </Heading>
        <Text>{excerpt}</Text>
      </VStack>
    </Grid>
  )
}
