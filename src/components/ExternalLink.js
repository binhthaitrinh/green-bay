import Icon from "@chakra-ui/icon"
import { Box } from "@chakra-ui/layout"
import React from "react"

export default function ExternalLink({ href, children, ...props }) {
  return (
    <Box
      as="a"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      {...props}
    >
      {children}
    </Box>
  )
}

export function IconWithLink({ IconComp, href, ...props }) {
  return (
    <ExternalLink href={href}>
      <Icon as={IconComp} w={6} h={6} {...props} />
    </ExternalLink>
  )
}
