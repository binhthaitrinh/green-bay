import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Section from "../Section"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/experiences/" }
          frontmatter: { role: { ne: "overview" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              cover {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                  )
                }
              }
            }
          }
        }
      }
      markdownRemark(
        fileAbsolutePath: { regex: "/experiences/" }
        frontmatter: { role: { eq: "overview" } }
      ) {
        frontmatter {
          title
          description
        }
      }
    }
  `)
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Section>
      <VStack>
        <Heading
          as="h2"
          fontSize="32px"
          fontWeight="medium"
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <VStack mt="56px">
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <VStack>
              <Box width="80%" m="auto">
                <GatsbyImage image={getImage(edge.node.frontmatter.cover)} />
              </Box>
              <Grid
                gridTemplateColumns="repeat(12, 1fr)"
                transform="translateY(-100px)"
              >
                <Box
                  gridColumn={index % 2 === 0 ? "1/10" : "3/-1"}
                  backgroundColor="white"
                  p="40px 60px"
                  border="1px solid var(--chakra-colors-gray-200)"
                >
                  <Heading
                    as="h3"
                    fontWeight="normal"
                    mb="8px"
                    color="gray.500"
                  >
                    {edge.node.frontmatter.title}
                  </Heading>
                  {edge.node.frontmatter.description.split("\\n").map(para => (
                    <Text key={para} mb="16px">
                      {para}
                    </Text>
                  ))}
                </Box>
              </Grid>
            </VStack>
          )
        })}
      </VStack>
    </Section>
  )
}
