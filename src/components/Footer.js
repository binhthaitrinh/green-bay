import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/layout"
import { Icon, Link as ChakraLink } from "@chakra-ui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container } from "./Layout"
import { AiFillPhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { RiRoadMapFill } from "react-icons/ri"
import ExternalLink, { IconWithLink } from "./ExternalLink"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
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
    <Box as="footer" color="gray.500">
      <VStack
        alignItems="center"
        justifyContent="center"
        // py="24px"
        borderBottom="1px solid var(--chakra-colors-gray-200)"
      >
        <Box width={["300px", "300px", "450px"]}>
          <Link to="/">
            <StaticImage
              src="../images/logo-horizontal.png"
              alt="Logo Footer"
              //   height="250px"
              objectFit="cover"
              layout="fullWidth"
            />
          </Link>
        </Box>
      </VStack>
      <Box py="40px">
        <Container>
          <Stack
            direction={["column-reverse", "column-reverse", "row"]}
            justifyContent="space-between"
            spacing={8}
          >
            <Box>
              <VStack alignItems="flex-start" spacing={4}>
                <Heading
                  as="h4"
                  fontSize="24px"
                  fontWeight="medium"
                  color="gray.500"
                >
                  RESORT INFORMATION
                </Heading>
                <HStack>
                  <Icon as={AiFillPhone} color="gray.500" w={6} h={6} />
                  <Text>
                    <ExternalLink
                      href={`tel:${data.allMarkdownRemark.edges[0].node.frontmatter.phoneNumber}`}
                    >
                      {
                        data.allMarkdownRemark.edges[0].node.frontmatter
                          .phoneNumber
                      }
                    </ExternalLink>
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={MdEmail} color="gray.500" w={6} h={6} />
                  <Text>
                    <ExternalLink
                      href={`mailto:${data.allMarkdownRemark.edges[0].node.frontmatter.email}`}
                    >
                      {data.allMarkdownRemark.edges[0].node.frontmatter.email}
                    </ExternalLink>
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={RiRoadMapFill} color="gray.500" w={6} h={6} />
                  <Text>
                    {data.allMarkdownRemark.edges[0].node.frontmatter.address}
                  </Text>
                </HStack>
              </VStack>
              <HStack spacing={8} textDecor="underline" my={8}>
                <ChakraLink
                  as={Link}
                  to="/privacy-notice"
                  _hover={{ color: "brandColor" }}
                >
                  Privacy Policy
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/terms"
                  _hover={{ color: "brandColor" }}
                >
                  Terms and Conditions
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/safe-travel-program"
                  _hover={{ color: "brandColor" }}
                >
                  Safe Travel Program
                </ChakraLink>
              </HStack>
              <Box w="250px">
                <StaticImage
                  src="../images/best-resort-2019.png"
                  alt="Best resort 2019"
                />
              </Box>
            </Box>
            <VStack alignItems="flex-start" spacing={4}>
              <Heading
                as="h4"
                fontSize="24px"
                fontWeight="medium"
                color="gray.500"
              >
                HCM REP. OFFICE
              </Heading>
              <HStack>
                <Icon as={AiFillPhone} color="gray.500" w={6} h={6} />
                <Text>
                  <ExternalLink
                    href={`tel:${data.allMarkdownRemark.edges[1].node.frontmatter.phoneNumber}`}
                  >
                    {
                      data.allMarkdownRemark.edges[1].node.frontmatter
                        .phoneNumber
                    }
                  </ExternalLink>
                </Text>
              </HStack>

              <HStack>
                <Icon as={RiRoadMapFill} color="gray.500" w={6} h={6} />
                <Text>
                  {data.allMarkdownRemark.edges[1].node.frontmatter.address}
                </Text>
              </HStack>
              <HStack
                justifyContent="flex-start"
                alignItems="center"
                spacing="8px"
              >
                <IconWithLink
                  IconComp={FaInstagram}
                  href="https://www.instagram.com/greenbayphuquocresort/"
                />
                <IconWithLink
                  IconComp={FaFacebook}
                  href="https://www.facebook.com/greenbayphuquoc"
                />
                <IconWithLink
                  IconComp={FaYoutube}
                  href="https://www.youtube.com/channel/UCziHTBwGje08vZZw3iRkJmQ"
                />
              </HStack>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
