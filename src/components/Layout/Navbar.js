import { Box, ListItem, Stack, UnorderedList, VStack } from "@chakra-ui/layout"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "./index"
import { Link } from "gatsby"
import { Button } from "@chakra-ui/button"
import { useLocation } from "@reach/router"
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Accomodations",
    href: "/accomodations",
  },
  {
    name: "Destination",
    href: "/destination",
  },
  {
    name: "Dining",
    href: "/dining",
  },

  {
    name: "Experiences",
    href: "/experiences",
  },
  {
    name: "Terms & Policy",
    href: "/terms",
  },
]

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false)
  const location = useLocation()
  return (
    <Box as="nav" bg="white">
      <Container>
        <Box
          zIndex={999997}
          position="fixed"
          right={[8, 8, 12]}
          top={[12, 12, 16]}
          bg="white"
          borderRadius="50%"
          w={16}
          h={16}
          display={["inline", "inline", "inline", "none"]}
          transform={showMenu && "scale(30)"}
          transition="all 0.25s"
        ></Box>

        <Button
          position="fixed"
          zIndex={999999}
          right={[8, 8, 12]}
          top={[12, 12, 16]}
          bg="white"
          variant="unstyled"
          borderRadius="50%"
          w={16}
          h={16}
          onClick={() => setShowMenu(show => !show)}
          display={["inline", "inline", "inline", "none"]}
          border="1px solid var(--chakra-colors-gray-200)"
          aria-label="menu toggle"
        >
          <VStack spacing={1}>
            <Box height="4px" width={8} backgroundColor="gray.600" />
            <Box height="4px" width={8} backgroundColor="gray.600" />
            <Box height="4px" width={8} backgroundColor="gray.600" />
          </VStack>
        </Button>
        <Stack
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          display={[
            showMenu ? "flex" : "none",
            showMenu ? "flex" : "none",
            showMenu ? "flex" : "none",
            "flex",
          ]}
          visibility={[
            showMenu ? "visible" : "hidden",
            showMenu ? "visible" : "hidden",
            showMenu ? "visible" : "hidden",
            "visible",
          ]}
          position={["fixed", "fixed", "fixed", "relative"]}
          left="50%"
          transform="translate(-50%, 0)"
          zIndex={999998}
        >
          <Link to="/">
            <StaticImage
              src="../../images/logo.png"
              alt="Greenbay"
              width={100}
              height={100}
            />
          </Link>
          <UnorderedList styleType="none">
            <Stack
              direction={["column", "column", "column", "row"]}
              alignItems="center"
              spacing="24px"
            >
              {links.map(link => (
                <Link key={link.name} to={link.href}>
                  <ListItem
                    color={
                      location.pathname === link.href ? "green.500" : "gray.600"
                    }
                    _hover={{ color: "var(--chakra-colors-green-500)" }}
                  >
                    {link.name}
                  </ListItem>
                </Link>
              ))}
              <Link to="/book">
                <Button colorScheme="green" variant="solid" borderRadius={0}>
                  Book now
                </Button>
              </Link>
            </Stack>
          </UnorderedList>
        </Stack>
      </Container>
    </Box>
  )
}
