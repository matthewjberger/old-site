import { Box } from "@chakra-ui/react"
import React from "react"
import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

const Index = () => {
  return (
    <Container height="100vh">
      <NavBar />
      <Box
        mx="auto"
        px={["1rem", "1rem", "1rem", "1rem"]}
        py={["0.5rem", "1rem", "2rem", "2rem"]}
        my="2rem"
        width={["full", "34rem", "48rem", "48rem"]}
        display="flex"
        flexDirection="column"
      />
      <Footer alignText="center">Footer!</Footer>
    </Container>
  )
}

export default Index
