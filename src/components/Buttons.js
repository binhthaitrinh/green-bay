import { Button } from "@chakra-ui/button"
import React from "react"
import ExternalLink from "./ExternalLink"

export function OutlineLink({ href, children, ...props }) {
  return (
    <ExternalLink href={href}>
      <Button
        variant="outline"
        borderRadius={0}
        {...props}
        _hover={{ bg: "white", color: "green.600" }}
      >
        {children}
      </Button>
    </ExternalLink>
  )
}

export function PrimaryLink({ href, children, ...props }) {
  return (
    <ExternalLink href={href}>
      <Button variant="solid" colorScheme="green" borderRadius={0} {...props}>
        {children}
      </Button>
    </ExternalLink>
  )
}
