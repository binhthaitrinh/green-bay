import { Box, Heading, Text, VStack } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Section from "../Section"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/terms/" }) {
        frontmatter {
          intro
          earlyCheckOut
          earlyCheckIn
          disclaimers
        }
      }
    }
  `)

  const {
    intro,
    earlyCheckOut,
    earlyCheckIn,
    disclaimers,
  } = data.markdownRemark.frontmatter
  return (
    <Section lineHeight="1.6">
      <Heading
        mb={8}
        fontWeight="medium"
        color="brandColor"
        textAlign="center"
        textTransform="uppercase"
        fontSize="40px"
      >
        Terms & Conditions
      </Heading>
      {intro.split("\\n").map(part => (
        <Text as="h1" key={part}>
          {part}
        </Text>
      ))}
      <Accordion allowToggle>
        <VStack spacing={6} alignItems="stretch" mt={8}>
          <AccordionItem>
            <Text as="h2">
              <AccordionButton
                py={4}
                border="1px solid var(--chakra-colors-gray-300)"
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  pl={6}
                  fontWeight="bold"
                  color="gray.600"
                >
                  Early Check-out
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel py={8} px={[4, 16]}>
              {earlyCheckOut}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text as="h2">
              <AccordionButton
                py={4}
                border="1px solid var(--chakra-colors-gray-300)"
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  pl={6}
                  fontWeight="bold"
                  color="gray.600"
                >
                  Early Check-in
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel py={8} px={[4, 16]}>
              {earlyCheckIn}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text as="h2">
              <AccordionButton
                py={4}
                border="1px solid var(--chakra-colors-gray-300)"
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  pl={6}
                  fontWeight="bold"
                  color="gray.600"
                >
                  Disclaimers
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel py={8} px={[4, 16]}>
              {disclaimers}
            </AccordionPanel>
          </AccordionItem>
        </VStack>
      </Accordion>
    </Section>
  )
}
