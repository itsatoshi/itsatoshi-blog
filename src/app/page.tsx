"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { AvatarSticker } from "@itsatoshi/components/avatar-sticker";
import { Footer } from "@itsatoshi/components/footer";
import { NavigationBar } from "@itsatoshi/components/navigation-bar";

export default function Home() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <NavigationBar />
      
      <Box flex="1">
        <Container maxW="6xl" py={8} mx="auto">
          <Heading size="4xl">@itsatoshi</Heading>
          <AvatarSticker width="100px" height="100px" imageSizes="100px" rotation="1deg" />
          <Text>Welcome to my site!</Text>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}
