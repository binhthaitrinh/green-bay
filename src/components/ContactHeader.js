import { Box, HStack, Text, Icon } from "@chakra-ui/react"
import React from "react"
import { Container } from "./Layout"
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"
import { AiTwotonePhone } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { Link } from "gatsby"
import ExternalLink from "./ExternalLink"
export default function ContactHeader() {
  return (
    <Box backgroundColor="brandColor">
      <Container>
        <HStack
          color="white"
          justifyContent="space-between"
          py="16px"
          alignItems="center"
        >
          <HStack
            alignItems="center"
            spacing="24px"
            justifyContent="flex-start"
          >
            <Text textTransform="capitalize">Welcome to green by phu quoc</Text>
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
                href="https://www.instagram.com/greenbayphuquocresort/"
              />
              <IconWithLink
                IconComp={FaYoutube}
                href="https://www.instagram.com/greenbayphuquocresort/"
              />
            </HStack>
          </HStack>
          <HStack justifyContent="flex-end" spacing="24px" alignItems="center">
            <ExternalLink href="tel:+842976267799">
              <HStack justifyContent="flex-end" alignItems="center">
                <Icon as={AiTwotonePhone} w={6} h={6} />
                <Text>(+84 297) 626 7799</Text>
              </HStack>
            </ExternalLink>
            <ExternalLink href="mailto:info@greenbayphuquocresort.com">
              <HStack justifyContent="flex-end" alignItems="center">
                <Icon as={IoMdMail} w={6} h={6} />
                <Text>info@greenbayphuquocresort.com</Text>
              </HStack>
            </ExternalLink>
            <HStack justifyContent="flex-end" alignItems="center">
              <Link to="/">
                <Text>EN</Text>
              </Link>
              <Text>/</Text>
              <Link to="/vn">
                <Text color="gray.400">VN</Text>
              </Link>
            </HStack>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

function IconWithLink({ IconComp, href, ...props }) {
  return (
    <ExternalLink href={href}>
      <Icon as={IconComp} w={6} h={6} {...props} />
    </ExternalLink>
  )
}
