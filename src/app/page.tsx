"use client";

import { Container, Heading, Text } from "@chakra-ui/react";
import { AvatarSticker } from "@itsatoshi/components/avatar-sticker";

export default function Home() {
  return (
    <Container maxW="4xl" py={8} mx="auto">
      <Heading size="4xl">@itsatoshi</Heading>
      <AvatarSticker width="100px" height="100px" imageSizes="100px" />
      <Text>Welcome to my site!</Text>
    </Container>
  );
}
