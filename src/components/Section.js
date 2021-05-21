import { Box } from "@chakra-ui/layout"
import React from "react"
import { Container } from "./Layout"

export default function Section({ children }) {
  return (
    <Box
      as="section"
      py="96px"
      borderBottom="1px solid var(--chakra-colors-gray-200)"
    >
      <Container>{children}</Container>
    </Box>
  )
}
