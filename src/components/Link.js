import { Button } from "@chakra-ui/button"
import { Link } from "gatsby"
import React from "react"

export function OutlineGatsbyLink({ to, children, ...props }) {
  return (
    <Link to={to}>
      <Button
        variant="outline"
        borderRadius={0}
        {...props}
        _hover={{ bg: "white", color: "green.600" }}
      >
        {children}
      </Button>
    </Link>
  )
}
