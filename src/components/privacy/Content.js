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
      markdownRemark(fileAbsolutePath: { regex: "/privacy/" }) {
        frontmatter {
          whatInfo
          marketing
          earlyCheckIn
          earlyCheckOut
        }
        html
      }
    }
  `)

  const {
    frontmatter: { whatInfo, marketing, earlyCheckIn, earlyCheckOut },
    html,
  } = data.markdownRemark
  return (
    <Section lineHeight="1.6" py={["32px", "96px"]}>
      <Heading
        mb={8}
        fontWeight="medium"
        color="brandColor"
        textAlign="center"
        textTransform="uppercase"
        fontSize="40px"
      >
        Privacy Notice
      </Heading>
      <Box dangerouslySetInnerHTML={{ __html: html }}></Box>
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
              {earlyCheckOut.split("\\n").map(part => (
                <Text key={part}>{part}</Text>
              ))}
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
              {earlyCheckIn.split("\\n").map(part => (
                <Text key={part}>{part}</Text>
              ))}
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
                  What information we collect about you
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel py={8} px={[4, 16]}>
              {whatInfo.split("\\n").map(part => (
                <Text key={part}>{part}</Text>
              ))}
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
                  Marketing
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel py={8} px={[4, 16]}>
              {marketing.split("\\n").map(part => (
                <Text key={part}>{part}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </VStack>
      </Accordion>
    </Section>
  )
}
