import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import Icon from "@chakra-ui/icon"
import { Input } from "@chakra-ui/input"
import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout"
import { Textarea } from "@chakra-ui/textarea"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { AiFillPhone } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { RiRoadMapFill } from "react-icons/ri"
import { IconWithLink } from "../ExternalLink"
import Section from "../Section"

import { CgArrowLongRight } from "react-icons/cg"

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contact/" } }
        sort: { fields: id }
      ) {
        edges {
          node {
            frontmatter {
              phoneNumber
              email
              address
            }
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Heading
        fontWeight="medium"
        color="brandColor"
        textAlign="center"
        textTransform="uppercase"
        fontSize="40px"
      >
        Contact us
      </Heading>
      <Text textAlign="center">
        Any question or remarks? Just write us a message!
      </Text>
      <Stack
        direction="row"
        border="1px solid var(--chakra-colors-gray-300)"
        px={8}
        py={8}
        flexWrap="wrap"
        divider={<StackDivider borderColor="gray.300" />}
        mt={8}
      >
        <VStack
          alignItems="flex-start"
          flexBasis="40%"
          px={6}
          justifyContent="space-between"
        >
          <VStack alignItems="flex-start">
            <Text as="h2" fontSize="32px" color="gray.500" fontWeight="bold">
              Contact Information
            </Text>
            <Text>
              Fill in the form and our Team will get back to you within 24 hours
            </Text>
          </VStack>

          <VStack alignItems="flex-start" spacing={4}>
            <HStack>
              <Icon as={AiFillPhone} color="gray.500" w={6} h={6} />
              <Text>
                {data.allMarkdownRemark.edges[1].node.frontmatter.phoneNumber}
              </Text>
            </HStack>

            <HStack>
              <Icon as={RiRoadMapFill} color="gray.500" w={6} h={6} />
              <Text>
                {data.allMarkdownRemark.edges[1].node.frontmatter.address}
              </Text>
            </HStack>
            <HStack>
              <Icon as={RiRoadMapFill} color="gray.500" w={6} h={6} />
              <Text>
                {data.allMarkdownRemark.edges[0].node.frontmatter.address}
              </Text>
            </HStack>
          </VStack>
          <HStack justifyContent="flex-start" alignItems="center" spacing="8px">
            <IconWithLink
              IconComp={FaInstagram}
              href="https://www.instagram.com/greenbayphuquocresort/"
            />
            <IconWithLink
              IconComp={FaFacebook}
              href="https://www.instagram.com/greenbayphuquocresort/"
            />
            <IconWithLink
              IconComp={FaYoutube}
              href="https://www.instagram.com/greenbayphuquocresort/"
            />
          </HStack>
        </VStack>
        <Box pl={12} flexBasis="55%">
          <form style={{ width: "100%" }}>
            <VStack spacing={4} alignItems="flex-start">
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" borderRadius={0} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" borderRadius={0} />
              </FormControl>
              <FormControl id="mobile">
                <FormLabel>Mobile</FormLabel>
                <Input type="text" borderRadius={0} />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Your message</FormLabel>
                <Textarea type="text" borderRadius={0} />
              </FormControl>
              <Button
                variant="outline"
                borderRadius={0}
                rightIcon={<CgArrowLongRight />}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Stack>
    </Section>
  )
}
