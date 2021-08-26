import { Box } from "@chakra-ui/react"
import React, { Component } from "react"
import { Container } from "./Container"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const BlogPost = (props) => {
  return (
    <Container>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        maxWidth="2xl"
        mx="auto"
        mb="16"
        width="full"
      >
        <Box fontWeight="700" fontSize="1.875rem" lineHeight="2.25rem">
          <h1>Cool blog title!</h1>
        </Box>
        <Box {...props} />
      </Box>
      <Footer>Footer!</Footer>
    </Container>
  )
}
