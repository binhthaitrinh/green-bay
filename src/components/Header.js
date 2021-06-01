import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  VStack,
  Editable,
  EditablePreview,
  EditableInput,
  Stack,
} from "@chakra-ui/react"
import { Container } from "./Layout"
import { PrimaryLink } from "./Buttons"
import Navbar from "./Layout/Navbar"

function padding(input) {
  return parseFloat(input) < 9 ? `0${input + 1}` : input + 1
}

export default function Header() {
  const currentTime = `${new Date(Date.now()).getFullYear()}-${padding(
    new Date(Date.now()).getMonth()
  )}-${new Date(Date.now()).getDate()}`
  const [formData, setFormData] = React.useState({
    checkin: currentTime,
    checkout: currentTime,
    noGuests: 2,
  })
  const onInputChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/landing/" }) {
        frontmatter {
          title
          description
          cover {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const image = getImage(data.markdownRemark.frontmatter.cover)
  const bgImage = convertToBgImage(image)
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <BackgroundImage
      {...bgImage}
      preserveStackingContext
      style={{
        backgroundPosition: "center 20%",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box color="white" zIndex="3" position="relative" height="100%">
        <Navbar />
        <Container height="100%">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            transform="translateY(-50px)"
          >
            <VStack
              w="600px"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing="16px"
            >
              <Heading
                fontWeight="medium"
                fontSize={["40px", "64px"]}
                lineHeight={[1, 1.33]}
              >
                {title}
              </Heading>
              <Divider />
              <Text fontWeight="thin">{description}</Text>
            </VStack>
            <VStack
              w="250px"
              alignItems="stretch"
              justifyContent="center"
              spacing={0}
              display={["none", "flex"]}
            >
              <Box
                bg="white"
                color="gray.500"
                py="32px"
                px="16px"
                borderBottom="1px solid var(--chakra-colors-gray-200)"
              >
                <FormControl>
                  <VStack>
                    <FormLabel htmlFor="checkindate" color="brandColor">
                      Checkin
                    </FormLabel>
                    <Input
                      type="date"
                      id="checkin"
                      value={formData.checkin}
                      onChange={onInputChange}
                      borderRadius={0}
                    />
                  </VStack>
                </FormControl>
              </Box>
              <Box
                bg="white"
                color="gray.500"
                py="32px"
                px="16px"
                borderBottom="1px solid var(--chakra-colors-gray-200)"
              >
                <FormControl>
                  <VStack>
                    <FormLabel htmlFor="checkoutdate" color="brandColor">
                      Checkout
                    </FormLabel>
                    <Input
                      type="date"
                      id="checkout"
                      value={formData.checkout}
                      onChange={onInputChange}
                      borderRadius={0}
                    />
                  </VStack>
                </FormControl>
              </Box>
              <Box bg="white" color="gray.500" py="16px" px="16px">
                <VStack>
                  <Text color="brandColor">Number of guests</Text>
                  <Editable
                    defaultValue={formData.noGuests}
                    fontSize="36px"
                    onChange={nextValue =>
                      setFormData({ ...formData, noGuests: nextValue })
                    }
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </VStack>
              </Box>
              <PrimaryLink width="100%" href="/">
                Search
              </PrimaryLink>
            </VStack>
          </Stack>
        </Container>
      </Box>
      <Box
        height="100%"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        bg="rgba(0,0,0,0.3)"
        zIndex="2"
      ></Box>
    </BackgroundImage>
  )
}
