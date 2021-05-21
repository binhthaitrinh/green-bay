import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "../Layout"
import Section from "../Section"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { OutlineGatsbyLink } from "../Link"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/destination/" }
          frontmatter: { role: { eq: "destination-detail" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              cover {
                childImageSharp {
                  gatsbyImageData(quality: 60, placeholder: BLURRED)
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
      <Container>
        <VStack spacing="60px">
          {data.allMarkdownRemark.edges.map((edge, index) => {
            const {
              node: { frontmatter },
            } = edge
            return (
              <Stack
                key={frontmatter.slug}
                key={index}
                flexDirection="row"
                flexWrap="wrap"
                width="100%"
              >
                <Box flexBasis="40%">
                  <Link to={`/destination/${frontmatter.slug}`}>
                    <GatsbyImage
                      image={getImage(frontmatter.cover)}
                      alt={frontmatter.name}
                      style={{ width: "100%", height: "500px" }}
                    />
                  </Link>
                </Box>
                <VStack
                  flexBasis="60%"
                  order={index % 2 === 1 ? -1 : 1}
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <VStack
                    padding="80px 60px"
                    border="1px solid var(--chakra-colors-gray-200)"
                    width="100%"
                    alignItems="flex-start"
                  >
                    <Link to={`/destination/${frontmatter.slug}`}>
                      <Heading
                        as="h4"
                        fontWeight="medium"
                        color="brandColor"
                        fontSize="32px"
                      >
                        {frontmatter.title}
                      </Heading>
                    </Link>

                    <Text>{frontmatter.description.split("\\n")[0]}</Text>
                    <OutlineGatsbyLink
                      to={`/destination/${frontmatter.slug}`}
                      rightIcon={<HiOutlineArrowNarrowRight />}
                    >
                      Read more
                    </OutlineGatsbyLink>
                  </VStack>
                </VStack>
              </Stack>
            )
          })}
        </VStack>
      </Container>
    </Section>
  )
}
