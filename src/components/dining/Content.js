import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import Section from "../Section"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/dining/" }
          frontmatter: { role: { ne: "overview" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              subTitle
              type
              capacity
              themeMenu
              serviceHour
              breakfastBuffet
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
            html
          }
        }
      }
      markdownRemark(
        fileAbsolutePath: { regex: "/dining/" }
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
      <VStack mt="56px" width="100%">
        {data.allMarkdownRemark.edges.map(edge => {
          const image = getImage(edge.node.frontmatter.cover)
          const bgImage = convertToBgImage(image)
          console.log(bgImage)
          return (
            <Box key={edge.node.frontmatter.title} width="100%">
              <BackgroundImage
                {...bgImage}
                preserveStackingContext
                style={{
                  backgroundPosition: "center 20%",
                  height: "70vh",
                  width: "100%",
                  boxShadow: "rgba(0 0 0 / 80%) 480px 0px 350px inset",
                  color: "white",
                }}
              >
                <VStack
                  alignItems="flex-start"
                  justifyContent="center"
                  height="100%"
                  pl={10}
                >
                  {edge.node.frontmatter.title.split(" ").map(word => (
                    <Heading
                      as="h2"
                      fontWeight="medium"
                      fontSize="48px"
                      key={word}
                      lineHeight={0.8}
                    >
                      {word}
                    </Heading>
                  ))}
                  <Text fontSize="24px" border="1px solid white" px={4}>
                    "{edge.node.frontmatter.subTitle}"
                  </Text>
                </VStack>
              </BackgroundImage>
              <Box
                width="90%"
                border="1px solid var(--chakra-colors-gray-300)"
                mx="auto"
                px={24}
                py={12}
              >
                <Grid
                  gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  gridGap={8}
                >
                  <GridItem
                    title="Type:"
                    subTitle={edge.node.frontmatter.type}
                  ></GridItem>
                  <GridItem
                    title="Capacity:"
                    subTitle={edge.node.frontmatter.capacity}
                  ></GridItem>
                  <GridItem
                    title="Theme Menu:"
                    subTitle={edge.node.frontmatter.themeMenu}
                  ></GridItem>
                  <GridItem
                    title="Service Hour:"
                    subTitle={edge.node.frontmatter.serviceHour}
                  ></GridItem>
                  <GridItem
                    title="Breakfast buffet"
                    subTitle={edge.node.frontmatter.breakfastBuffet}
                  ></GridItem>
                </Grid>
                <Box
                  as="article"
                  textAlign="center"
                  mt={12}
                  dangerouslySetInnerHTML={{
                    __html: edge.node.html,
                  }}
                ></Box>
              </Box>
            </Box>
          )
        })}
      </VStack>
    </Section>
  )
}

function GridItem({ title, subTitle }) {
  return (
    <Box
      border="1px solid var(--chakra-colors-gray-300)"
      px={4}
      py={2}
      borderLeft="6px solid var(--chakra-colors-gray-400)"
    >
      <Text fontWeight="bold" color="gray.500" textTransform="capitalize">
        {title}
      </Text>
      <Text textTransform="capitalize">{subTitle}</Text>
    </Box>
  )
}
