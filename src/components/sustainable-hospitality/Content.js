import { Box, Grid, Heading, Text } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Section from "../Section"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/sustainable-hospitality/" }) {
        frontmatter {
          architecture
          energy
        }
      }
    }
  `)
  return (
    <Section textAlign="center">
      <SectionTitle title="Architecture & design" />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        textAlign="left"
        gridColumnGap={8}
        gridRowGap={2}
        mb={16}
      >
        {data.markdownRemark.frontmatter.architecture.map(point => (
          <Box
            key={point}
            border="1px solid var(--chakra-colors-gray-400)"
            borderLeft="8px solid var(--chakra-colors-brandColor)"
            px={6}
            py={4}
          >
            <Text>{point}</Text>
          </Box>
        ))}
      </Grid>
      <SectionTitle title="Energy" />
      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        textAlign="left"
        gridColumnGap={8}
        gridRowGap={2}
      >
        {data.markdownRemark.frontmatter.energy.map(point => (
          <Box
            key={point}
            border="1px solid var(--chakra-colors-gray-400)"
            borderLeft="8px solid var(--chakra-colors-brandColor)"
            px={6}
            py={4}
          >
            <Text>{point}</Text>
          </Box>
        ))}
      </Grid>
    </Section>
  )
}

function SectionTitle({ title }) {
  return (
    <Heading
      as="h2"
      fontWeight="medium"
      color="gray.500"
      textTransform="uppercase"
      my={6}
      fontSize="32px"
    >
      {title}
    </Heading>
  )
}
