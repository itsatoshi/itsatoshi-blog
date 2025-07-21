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
import { AvatarSticker } from "@itsatoshi/components/avatar-sticker";
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
      position="relative"
      mt="auto"
      pt={16}
      pb={8}
      background="linear-gradient(135deg, #f7f4e8 0%, #ebe1c4 100%)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(190, 141, 126, 0.1) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, rgba(103, 151, 68, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(178, 187, 64, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px, 30px 30px, 20px 20px",
        opacity: 0.6,
        pointerEvents: "none",
      }}
    >
      <Container maxW="6xl" position="relative" zIndex={1}>
        <Flex direction="column" gap={8}>
          {/* Main Footer Content - Construction Paper Cards */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={8}
            align={{ base: "center", md: "flex-start" }}
            justify="space-between"
            w="full"
          >
            {/* Brand Section - Orange Construction Paper */}
            <Box
              bg="linear-gradient(135deg, #dfce9f 0%, #d3bb7b 100%)"
              p={6}
              borderRadius="lg"
              transform="rotate(-1deg)"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                borderRadius: "lg",
                pointerEvents: "none",
              }}
              _hover={{
                transform: "rotate(-1deg) translateY(-2px)",
                transition: "all 0.3s ease",
              }}
            >
              <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
                <Flex
                  align="center"
                  gap={3}
                  direction={{ base: "column", sm: "row" }}
                >
                  <AvatarSticker 
                    width="50px" 
                    height="50px" 
                    imageSizes="50px"
                    borderWidth="3px"
                  />
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily="heading"
                    color="gray.800"
                    textShadow="0 1px 2px rgba(0,0,0,0.1)"
                  >
                    {brandName}
                  </Text>
                </Flex>
                <Text
                  fontSize="sm"
                  color="gray.700"
                  textAlign={{ base: "center", md: "left" }}
                  maxW="300px"
                  lineHeight="1.6"
                >
                  Building digital experiences with passion and precision. 
                  Welcome to my corner of the internet.
                </Text>
              </Flex>
            </Box>

            {/* Quick Links - Green Construction Paper */}
            <Box
              bg="linear-gradient(135deg, #b4c6a7 0%, #97b085 100%)"
              p={6}
              borderRadius="lg"
              transform="rotate(0.5deg)"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                borderRadius: "lg",
                pointerEvents: "none",
              }}
              _hover={{
                transform: "rotate(0.5deg) translateY(-2px)",
                transition: "all 0.3s ease",
              }}
            >
              <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.800"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  textShadow="0 1px 2px rgba(0,0,0,0.1)"
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
                      color="gray.700"
                      fontWeight="medium"
                      _hover={{
                        color: "gray.900",
                        textDecoration: "none",
                        transform: "translateX(2px)",
                        transition: "all 0.2s ease-in-out",
                        textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Box>

            {/* Social Links - Blue Construction Paper */}
            <Box
              bg="linear-gradient(135deg, #b2c7bd 0%, #94b1a3 100%)"
              p={6}
              borderRadius="lg"
              transform="rotate(-0.5deg)"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)",
                borderRadius: "lg",
                pointerEvents: "none",
              }}
              _hover={{
                transform: "rotate(-0.5deg) translateY(-2px)",
                transition: "all 0.3s ease",
              }}
            >
              <Flex direction="column" gap={4} align={{ base: "center", md: "flex-start" }}>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.800"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  textShadow="0 1px 2px rgba(0,0,0,0.1)"
                >
                  Connect
                </Text>
                <Flex gap={3} justify={{ base: "center", md: "flex-start" }}>
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      _hover={{
                        transform: "translateY(-3px) rotate(5deg)",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <IconButton
                        aria-label={social.name}
                        variant="ghost"
                        size="sm"
                        color="gray.700"
                        bg="rgba(255, 255, 255, 0.3)"
                        borderRadius="full"
                        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                        _hover={{
                          color: "gray.900",
                          bg: "rgba(255, 255, 255, 0.5)",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <social.icon />
                      </IconButton>
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Box>
          </Stack>

          {/* Copyright Section - Paper Tape Look */}
          <Box
            bg="rgba(255, 255, 255, 0.8)"
            mx={-4}
            px={8}
            py={4}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              left: "20px",
              right: "20px",
              top: 0,
              bottom: 0,
              background: "repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(0,0,0,0.05) 8px, rgba(0,0,0,0.05) 9px)",
              borderRadius: "sm",
            }}
            _after={{
              content: '""',
              position: "absolute",
              left: "10px",
              right: "10px",
              top: "50%",
              height: "1px",
              bg: "rgba(0,0,0,0.1)",
              transform: "translateY(-50%)",
            }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
              w="full"
              gap={4}
              position="relative"
              zIndex={1}
            >
              <Text fontSize="sm" color="gray.600" textAlign="center" fontWeight="medium">
                © {year} {brandName}. All rights reserved.
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center" fontWeight="medium">
                Built with ❤️ using Next.js & Chakra UI
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
} 