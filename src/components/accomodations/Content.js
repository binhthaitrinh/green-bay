import Icon from "@chakra-ui/icon"
import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { BsPeople } from "react-icons/bs"
import { IoCarSportOutline } from "react-icons/io5"
import { OutlineGatsbyLink } from "../Link"
import Section from "../Section"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/accomodations/" }
          frontmatter: { role: { ne: "overview" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              numOfPeople
              feature
              description
              slug
              cover {
                childImageSharp {
                  gatsbyImageData(quality: 100, placeholder: BLURRED)
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
      <SectionTitle title="Welcome to accomodations" textAlign="center" />
      <VStack spacing="60px">
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const {
            node: { frontmatter },
          } = edge
          return (
            <Stack
              key={frontmatter.slug}
              flexDirection={["column", "column", "column", "row"]}
              spacing={0}
              flexWrap="wrap"
              width="100%"
              mt={8}
            >
              <Box
                flexBasis="40%"
                height={["300px", "300px", "300px", "600px"]}
              >
                <Link to={`/accomodations/${frontmatter.slug}`}>
                  <GatsbyImage
                    image={getImage(frontmatter.cover)}
                    alt={frontmatter.title}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Link>
              </Box>
              <VStack
                flexBasis="60%"
                order={[1, 1, 1, index % 2 === 1 ? -1 : 1]}
                justifyContent="center"
                alignItems="flex-start"
              >
                <VStack
                  padding={["30px 15px", "30px 15px", "80px 60px"]}
                  border="1px solid var(--chakra-colors-gray-200)"
                  width="100%"
                  alignItems="flex-start"
                >
                  <Link to={`/accomodations/${frontmatter.slug}`}>
                    <Heading
                      as="h4"
                      fontWeight="medium"
                      color="brandColor"
                      fontSize="32px"
                    >
                      {frontmatter.title}
                    </Heading>
                  </Link>
                  <HStack>
                    <HStack>
                      <Icon as={BsPeople} w="20px" h="20px" />
                      <Text>{frontmatter.numOfPeople}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={IoCarSportOutline} w="20px" h="20px" />
                      <Text>{frontmatter.feature}</Text>
                    </HStack>
                  </HStack>
                  <Text>{frontmatter.description}</Text>
                  <OutlineGatsbyLink to={`/accomodations/${frontmatter.slug}`}>
                    Read more
                  </OutlineGatsbyLink>
                </VStack>
              </VStack>
            </Stack>
          )
        })}
      </VStack>
    </Section>
  )
}

function SectionTitle({ title, ...props }) {
  return (
    <Heading
      as="h2"
      fontWeight="medium"
      color="gray.500"
      textTransform="uppercase"
      my={6}
      fontSize={["24px", "32px"]}
      {...props}
    >
      {title}
    </Heading>
  )
}
