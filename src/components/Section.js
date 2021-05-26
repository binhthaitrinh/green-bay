import { Box } from "@chakra-ui/layout"
import React from "react"
import { Container } from "./Layout"

export default function Section({ children, ...props }) {
  return (
    <Box
      as="section"
      py="96px"
      borderBottom="1px solid var(--chakra-colors-gray-200)"
      {...props}
    >
      <Container>{children}</Container>
    </Box>
  )
}
