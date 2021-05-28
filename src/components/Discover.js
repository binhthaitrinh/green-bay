import { Button } from "@chakra-ui/button"
import { Box, Grid, Heading, Text } from "@chakra-ui/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Section from "./Section"
import { SectionHeader } from "./sectionTypos"

export default function Discover() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/discover/" }
          frontmatter: { role: { eq: "overview" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              excerpt
              cover {
                childImageSharp {
                  gatsbyImageData(quality: 40, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section>
      <SectionHeader>Discover</SectionHeader>
      <Grid
        gridTemplateColumns={[
          "1fr",
          "1fr",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gridAutoRows="400px auto auto"
        gap={["20px", "20px", "20px", "40px"]}
      >
        {data.allMarkdownRemark.edges.map(edge => {
          const {
            node: { frontmatter },
          } = edge
          return (
            <Grid
              key={frontmatter.title}
              gridTemplateRows="400px auto auto"
              gridRow="span 3 / auto"
              padding={["15px", "30px"]}
              border="1px solid var(--chakra-colors-gray-200)"
            >
              <Link to={`/${frontmatter.slug}`} style={{ display: "inherit" }}>
                <GatsbyImage
                  image={getImage(frontmatter.cover)}
                  alt={frontmatter.title}
                />
              </Link>
              <Link to={`/${frontmatter.slug}`}>
                <Heading
                  as="h4"
                  color="brandColor"
                  fontWeight="medium"
                  fontSize="32px"
                  my="16px"
                >
                  {frontmatter.title}
                </Heading>
              </Link>
              <Box>
                <Text>{frontmatter.excerpt}</Text>
                <Link to={`/${frontmatter.slug}`}>
                  <Button
                    width="100%"
                    variant="outline"
                    colorScheme="gray"
                    borderRadius={0}
                    fontWeight="light"
                    mt="16px"
                  >
                    Check this out!
                  </Button>
                </Link>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
