"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ColorModeButton } from "@itsatoshi/components/theme/color-mode";
import NextLink from "next/link";

export type NavigationBarProps = {
  brandName?: string;
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function NavigationBar({ brandName = "@itsatoshi" }: NavigationBarProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="bg"
      borderBottom="1px"
      borderColor="border.subtle"
      backdropFilter="blur(10px)"
      bgColor="bg/80"
    >
      <Container maxW="6xl" py={4}>
        <Flex align="center" justify="space-between">
          {/* Brand/Logo */}
          <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
            <Heading
              size="lg"
              fontFamily="heading"
              color="brand.primary"
              _hover={{
                color: "brand.secondary",
                transform: "scale(1.05)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {brandName}
            </Heading>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Flex gap={8} align="center">
              <Flex gap={6}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    as={NextLink}
                    href={item.href}
                    fontSize="md"
                    fontWeight="medium"
                    color="fg.muted"
                    _hover={{
                      color: "brand.primary",
                      textDecoration: "none",
                      transform: "translateY(-1px)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Flex>
              <ColorModeButton />
            </Flex>
          )}

          {/* Mobile Navigation - simplified for now */}
          {isMobile && (
            <Flex gap={2} align="center">
              <ColorModeButton />
              {/* Simple mobile nav with all links visible */}
              <Flex gap={4} display={{ base: "none", sm: "flex" }}>
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.name}
                    as={NextLink}
                    href={item.href}
                    fontSize="sm"
                    fontWeight="medium"
                    color="fg.muted"
                    _hover={{
                      color: "brand.primary",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
} 