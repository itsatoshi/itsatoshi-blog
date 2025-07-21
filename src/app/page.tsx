"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxW="4xl" py={8} mx="auto">
      <Heading size="4xl">@itsatoshi</Heading>
      <Box
        boxShadow="md"
        bgColor="forest.300"
        border="8px solid white"
        position="relative"
        w="200px"
        h="200px"
        borderRadius="full"
        bgImage="url(/images/backgrounds/topography-forest.svg)"
      >
        <Image src="/images/memoji.png" fill sizes="200px" alt="" />
      </Box>
      <Text>Welcome to my site.</Text>
    </Container>
  );
}
