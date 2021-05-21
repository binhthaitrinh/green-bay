import { Heading } from "@chakra-ui/react"
import React from "react"

export function SectionHeader({ children, ...props }) {
  return (
    <Heading
      as="h2"
      color="brandColor"
      fontWeight="medium"
      fontSize="48px"
      mb="60px"
      _before={{
        display: "block",
        content: '""',
        width: "50px",
        height: "4px",
        backgroundColor: "#367639",
        mb: 2,
      }}
      {...props}
    >
      {children}
    </Heading>
  )
}
