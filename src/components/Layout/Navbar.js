import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/layout"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "./index"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/button"
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destination",
    href: "/",
  },
  {
    name: "Dining",
    href: "/",
  },
  {
    name: "Offers & Packages",
    href: "/",
  },
  {
    name: "Experiences",
    href: "/",
  },
  {
    name: "Policy",
    href: "/",
  },
]

export default function Navbar() {
  return (
    <Box as="nav" bg="white">
      <Container>
        <HStack justifyContent="space-between">
          <Link to="/">
            <StaticImage
              src="../../images/logo.png"
              alt="Greenbay"
              width={100}
              height={100}
            />
          </Link>
          <HStack>
            <UnorderedList styleType="none">
              <HStack spacing="24px">
                {links.map(link => (
                  <Link key={link.name} to={link.href}>
                    <ListItem
                      color="gray.600"
                      _hover={{ color: "var(--chakra-colors-green-500)" }}
                    >
                      {link.name}
                    </ListItem>
                  </Link>
                ))}
                <Button colorScheme="green" variant="solid" borderRadius={0}>
                  Book now
                </Button>
              </HStack>
            </UnorderedList>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
