import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/layout"
import { FramerTreeLayoutContext } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Section from "./Section"
import { SectionHeader } from "./sectionTypos"
import { BsPeople } from "react-icons/bs"
import { IoCarSportOutline } from "react-icons/io5"
import Icon from "@chakra-ui/icon"
import { OutlineLink } from "./Buttons"

export default function Favorites() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/favorites/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              name
              guests
              feature
              cover {
                childImageSharp {
                  gatsbyImageData(quality: 60, placeholder: BLURRED)
                }
              }
            }
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  `)
  return (
    <Section>
      <SectionHeader>Guests' Favorite Rooms</SectionHeader>
      <VStack spacing="60px">
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const {
            node: { frontmatter, excerpt },
          } = edge
          return (
            <Stack
              key={frontmatter.slug}
              flexDirection="row"
              flexWrap="wrap"
              width="100%"
            >
              <Box flexBasis="40%">
                <GatsbyImage
                  image={getImage(frontmatter.cover)}
                  alt={frontmatter.name}
                  style={{ width: "100%", height: "600px" }}
                  // aspectRatio={16 / 12}
                />
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
                  <Heading
                    as="h4"
                    fontWeight="medium"
                    color="brandColor"
                    fontSize="32px"
                  >
                    {frontmatter.name}
                  </Heading>
                  <HStack>
                    <HStack>
                      <Icon as={BsPeople} w="20px" h="20px" />
                      <Text>{frontmatter.guests}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={IoCarSportOutline} w="20px" h="20px" />
                      <Text>{frontmatter.feature}</Text>
                    </HStack>
                  </HStack>
                  <Text>{excerpt}</Text>
                  <OutlineLink href={`/`}>Read more</OutlineLink>
                </VStack>
              </VStack>
            </Stack>
          )
        })}
      </VStack>
    </Section>
  )
}
