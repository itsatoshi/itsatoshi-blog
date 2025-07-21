"use client";

import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export type FooterProps = {
  brandName?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  year?: number;
};

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Footer({
  brandName = "@itsatoshi",
  email = "hello@itsatoshi.com",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  twitterUrl = "https://twitter.com",
  year = new Date().getFullYear(),
}: FooterProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: githubUrl,
    },
    {
      name: "LinkedIn", 
      icon: FaLinkedin,
      href: linkedinUrl,
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: twitterUrl,
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: `mailto:${email}`,
    },
  ];

  return (
    <Box
      as="footer"
      bg="bg.subtle"
      borderTop="1px"
      borderColor="border.subtle"
      mt="auto"
    >
      <Container maxW="6xl" py={12}>
        <Flex direction="column" gap={8}>
          {/* Main Footer Content */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={8}
            align={{ base: "center", md: "flex-start" }}
            justify="space-between"
            w="full"
          >
            {/* Brand Section */}
            <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                fontFamily="heading"
                color="brand.primary"
              >
                {brandName}
              </Text>
              <Text
                fontSize="sm"
                color="fg.muted"
                textAlign={{ base: "center", md: "left" }}
                maxW="300px"
              >
                Building digital experiences with passion and precision. 
                Welcome to my corner of the internet.
              </Text>
            </Flex>

            {/* Quick Links */}
            <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Quick Links
              </Text>
              <Flex direction="column" gap={2} align={{ base: "center", md: "flex-start" }}>
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    as={NextLink}
                    href={link.href}
                    fontSize="sm"
                    color="fg.muted"
                    _hover={{
                      color: "brand.primary",
                      textDecoration: "none",
                      transform: "translateX(2px)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Flex>
            </Flex>

            {/* Social Links */}
            <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Connect
              </Text>
              <Flex gap={3}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    _hover={{
                      color: "brand.primary",
                      transform: "translateY(-2px)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <IconButton
                      aria-label={social.name}
                      variant="ghost"
                      size="sm"
                      color="fg.muted"
                      _hover={{
                        color: "brand.primary",
                        bg: "bg.emphasized",
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Stack>

          {/* Divider */}
          <Box height="1px" bg="border.subtle" />

          {/* Copyright */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            w="full"
            gap={4}
          >
            <Text fontSize="sm" color="fg.muted" textAlign="center">
              © {year} {brandName}. All rights reserved.
            </Text>
            <Text fontSize="sm" color="fg.muted" textAlign="center">
              Built with ❤️ using Next.js & Chakra UI
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
} 