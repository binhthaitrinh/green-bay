import { Box, Heading } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"
import { AiOutlineArrowDown } from "react-icons/ai"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(
        fileAbsolutePath: { regex: "/experiences/" }
        frontmatter: { role: { eq: "overview" } }
      ) {
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const image = getImage(data.markdownRemark.frontmatter.cover)
  const bgImage = convertToBgImage(image)
  return (
    <Box
      as={BackgroundImage}
      {...bgImage}
      preserveStackingContext
      style={{ height: "80vh", width: "100%" }}
    >
      <Box
        content='""'
        postition="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity={0.4}
        zIndex={2}
      ></Box>
      <Box
        zIndex={3}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        border="1px solid white"
        p="8px 16px"
      >
        <Heading
          as="h1"
          color="white"
          fontWeight="medium"
          fontSize={["24px", "56px"]}
          textTransform="uppercase"
        >
          Experiences
        </Heading>
      </Box>
      <Box
        w="75px"
        h="75px"
        backgroundColor="white"
        position="absolute"
        bottom={0}
        left="50%"
        transform="translate(-50%, 37px)"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={AiOutlineArrowDown} h="30px" w="30px" />
      </Box>
    </Box>
  )
}
