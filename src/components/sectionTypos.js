import { Heading } from "@chakra-ui/layout"
import React from "react"

export function SectionHeader({ children, ...props }) {
  return (
    <Heading
      as="h2"
      color="brandColor"
      fontWeight="medium"
      fontSize="48px"
      mb="60px"
      {...props}
    >
      {children}
    </Heading>
  )
}
