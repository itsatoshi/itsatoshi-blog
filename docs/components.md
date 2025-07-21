# Components

This document provides documentation for the component system and usage patterns.

## 🧱 Core Theme Components

### Provider Component

The main theme provider that wraps your entire application.

**Location**: `src/components/theme/provider.tsx`

```tsx
import { Provider } from "@/components/theme/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

**Props**: Inherits all `ColorModeProviderProps`

### ColorModeProvider

Manages light/dark mode state and persistence.

**Location**: `src/components/theme/color-mode.tsx`

```tsx
import { useColorMode } from "@/components/theme/color-mode";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
```

## 🎨 Styled Components with Theme

### Using Color Palette in Components

#### Basic Button Variations

```tsx
import { Button } from "@chakra-ui/react";

// Primary button with brand colors
<Button bg="brand.primary" color="brand.dark">
  Primary Action
</Button>

// Success button
<Button bg="brand.success" color="brand.dark">
  Confirm
</Button>

// Secondary button
<Button bg="brand.secondary" color="brand.dark">
  Secondary
</Button>

// Info button
<Button bg="brand.info" color="brand.dark">
  Learn More
</Button>
```

#### Cards with Theme Colors

```tsx
import { Box, Card, Text, Heading } from "@chakra-ui/react";

function ThemeCard({
  title,
  content,
  variant = "primary",
  intensity = "medium",
}) {
  const colorMap = {
    primary: {
      light: { bg: "blush.100", color: "blush.700", border: "blush.300" },
      medium: { bg: "blush.200", color: "blush.800", border: "blush.400" },
      strong: { bg: "blush.500", color: "blush.900", border: "blush.600" },
    },
    secondary: {
      light: { bg: "amber.100", color: "amber.700", border: "amber.300" },
      medium: { bg: "amber.200", color: "amber.800", border: "amber.400" },
      strong: { bg: "amber.500", color: "amber.900", border: "amber.600" },
    },
    success: {
      light: { bg: "forest.100", color: "forest.700", border: "forest.300" },
      medium: { bg: "forest.200", color: "forest.800", border: "forest.400" },
      strong: { bg: "forest.500", color: "forest.900", border: "forest.600" },
    },
    info: {
      light: { bg: "sage.100", color: "sage.700", border: "sage.300" },
      medium: { bg: "sage.200", color: "sage.800", border: "sage.400" },
      strong: { bg: "sage.500", color: "sage.900", border: "sage.600" },
    },
    accent: {
      light: { bg: "lime.100", color: "lime.700", border: "lime.300" },
      medium: { bg: "lime.200", color: "lime.800", border: "lime.400" },
      strong: { bg: "lime.500", color: "lime.900", border: "lime.600" },
    },
  };

  const colors = colorMap[variant][intensity];

  return (
    <Card.Root
      p={6}
      bg={colors.bg}
      color={colors.color}
      borderWidth="1px"
      borderColor={colors.border}
    >
      <Card.Header>
        <Heading size="md">{title}</Heading>
      </Card.Header>
      <Card.Body>
        <Text>{content}</Text>
      </Card.Body>
    </Card.Root>
  );
}

// Usage examples:
// <ThemeCard title="Light Card" content="Subtle background" variant="primary" intensity="light" />
// <ThemeCard title="Strong Card" content="High contrast" variant="success" intensity="strong" />
```

#### Alert Components

```tsx
import { Alert } from "@chakra-ui/react";

// Success alert
<Alert.Root status="success" bg="brand.success" color="brand.dark">
  <Alert.Icon />
  <Alert.Title>Success!</Alert.Title>
  <Alert.Description>Operation completed successfully.</Alert.Description>
</Alert.Root>

// Info alert
<Alert.Root bg="brand.info" color="brand.dark">
  <Alert.Icon />
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>Here's some important information.</Alert.Description>
</Alert.Root>
```

### Navigation Components

```tsx
import { Box, HStack, Link } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="brand.primary" p={4}>
      <HStack spacing={6}>
        <Link
          color="brand.dark"
          _hover={{ color: "brand.secondary" }}
          fontWeight="bold"
        >
          Home
        </Link>
        <Link color="brand.dark" _hover={{ color: "brand.accent" }}>
          About
        </Link>
        <Link color="brand.dark" _hover={{ color: "brand.info" }}>
          Services
        </Link>
        <Link color="brand.dark" _hover={{ color: "brand.success" }}>
          Contact
        </Link>
      </HStack>
    </Box>
  );
}
```

## 🎯 Common Patterns

### Color Palette Components

Create a consistent system for applying colors:

```tsx
// Color-aware box component
function ColorBox({ color = "primary", children, ...props }) {
  const colorMapping = {
    primary: "blush.500",
    secondary: "amber.500",
    accent: "lime.500",
    success: "forest.500",
    info: "sage.500",
  };

  return (
    <Box
      bg={colorMapping[color]}
      color={`${colorMapping[color].split(".")[0]}.900`}
      {...props}
    >
      {children}
    </Box>
  );
}

// Usage
<ColorBox color="primary" p={4} borderRadius="md">
  Primary content
</ColorBox>;
```

### Form Components

```tsx
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  VStack,
} from "@chakra-ui/react";

function ThemedForm() {
  return (
    <VStack spacing={4} as="form">
      <FormControl>
        <FormLabel color="brand.dark">Email</FormLabel>
        <Input
          borderColor="brand.info"
          _focus={{
            borderColor: "brand.primary",
            boxShadow: `0 0 0 1px var(--colors-brand-primary)`,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel color="brand.dark">Message</FormLabel>
        <Input
          borderColor="brand.info"
          _focus={{
            borderColor: "brand.accent",
            boxShadow: `0 0 0 1px var(--colors-brand-accent)`,
          }}
        />
      </FormControl>

      <Button
        bg="brand.success"
        color="brand.dark"
        _hover={{ bg: "forest.500", transform: "translateY(-1px)" }}
        type="submit"
      >
        Submit
      </Button>
    </VStack>
  );
}
```

### Progress & Status Components

```tsx
import { Progress, Badge, HStack, Text } from "@chakra-ui/react";

function StatusIndicators() {
  return (
    <VStack spacing={4} align="stretch">
      {/* Progress bars with theme colors */}
      <Progress colorPalette="blush" value={75} />
      <Progress colorPalette="forest" value={100} />
      <Progress colorPalette="amber" value={50} />

      {/* Status badges with various intensities */}
      <HStack spacing={2} wrap="wrap">
        {/* Light badges */}
        <Badge bg="forest.200" color="forest.800">
          Light Success
        </Badge>
        <Badge bg="sage.200" color="sage.800">
          Light Info
        </Badge>
        <Badge bg="amber.200" color="amber.800">
          Light Warning
        </Badge>

        {/* Medium badges */}
        <Badge bg="forest.400" color="forest.900">
          Medium Success
        </Badge>
        <Badge bg="sage.400" color="sage.900">
          Medium Info
        </Badge>
        <Badge bg="amber.400" color="amber.900">
          Medium Warning
        </Badge>

        {/* Strong badges */}
        <Badge bg="brand.success" color="brand.dark">
          Strong Success
        </Badge>
        <Badge bg="brand.info" color="brand.dark">
          Strong Info
        </Badge>
        <Badge bg="brand.secondary" color="brand.dark">
          Strong Warning
        </Badge>
      </HStack>
    </VStack>
  );
}
```

## 🎨 Layout Components

### Hero Section

```tsx
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box
      bg={`linear-gradient(135deg, var(--colors-blush-500), var(--colors-amber-500))`}
      py={20}
      px={8}
      textAlign="center"
    >
      <VStack spacing={6} maxW="2xl" mx="auto">
        <Heading size="4xl" color="brand.dark" fontFamily="heading">
          Welcome to Our Platform
        </Heading>
        <Text size="xl" color="brand.dark" fontFamily="body">
          Experience the power of our beautifully themed interface
        </Text>
        <Button
          size="lg"
          bg="brand.dark"
          color="brand.primary"
          _hover={{
            bg: "sage.500",
            color: "sage.900",
            transform: "scale(1.05)",
          }}
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}
```

### Grid Layout with Theme

```tsx
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";

function ColorGrid() {
  const colors = [
    { name: "Blush", bg: "blush.500", color: "blush.900" },
    { name: "Amber", bg: "amber.500", color: "amber.900" },
    { name: "Lime", bg: "lime.500", color: "lime.900" },
    { name: "Forest", bg: "forest.500", color: "forest.900" },
    { name: "Sage", bg: "sage.500", color: "sage.900" },
  ];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
      {colors.map((color) => (
        <GridItem key={color.name}>
          <Box
            bg={color.bg}
            color={color.color}
            p={8}
            borderRadius="lg"
            textAlign="center"
            _hover={{ transform: "translateY(-2px)" }}
            transition="transform 0.2s"
          >
            <Text fontWeight="bold" fontSize="lg">
              {color.name}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}
```

## 🔧 Custom Component Patterns

### Theme-Aware HOC

```tsx
import { forwardRef } from "react";

function withThemeColor(Component, defaultColor = "primary") {
  return forwardRef(function ThemedComponent(props, ref) {
    const { themeColor = defaultColor, ...rest } = props;

    const colorMap = {
      primary: { bg: "brand.primary", color: "brand.dark" },
      secondary: { bg: "brand.secondary", color: "brand.dark" },
      accent: { bg: "brand.accent", color: "brand.dark" },
      success: { bg: "brand.success", color: "brand.dark" },
      info: { bg: "brand.info", color: "brand.dark" },
    };

    return <Component ref={ref} {...colorMap[themeColor]} {...rest} />;
  });
}

// Usage
const ThemedBox = withThemeColor(Box);
<ThemedBox themeColor="success" p={4}>
  Success themed box
</ThemedBox>;
```

## 🎭 Animation & Transitions

### Hover Effects with Theme Colors

```tsx
function AnimatedButton({ children, variant = "primary", ...props }) {
  const variants = {
    primary: {
      bg: "brand.primary",
      _hover: { bg: "blush.500", transform: "translateY(-2px)" },
    },
    success: {
      bg: "brand.success",
      _hover: { bg: "forest.500", transform: "scale(1.05)" },
    },
  };

  return (
    <Button transition="all 0.2s" {...variants[variant]} {...props}>
      {children}
    </Button>
  );
}
```

## 📱 Responsive Design

### Mobile-First Theme Components

```tsx
function ResponsiveCard({ children }) {
  return (
    <Box
      bg={{ base: "brand.primary", md: "brand.secondary" }}
      color="brand.dark"
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius={{ base: "md", md: "lg" }}
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
    >
      {children}
    </Box>
  );
}
```

## 🎨 Color Scale Showcase

### Using All Shades Effectively

```tsx
function ColorScaleDemo() {
  const scales = [
    { name: "Blush", color: "blush", label: "Primary" },
    { name: "Amber", color: "amber", label: "Secondary" },
    { name: "Lime", color: "lime", label: "Accent" },
    { name: "Forest", color: "forest", label: "Success" },
    { name: "Sage", color: "sage", label: "Info" },
  ];

  return (
    <VStack spacing={8}>
      {scales.map(({ name, color, label }) => (
        <Box key={name} w="full">
          <Text fontWeight="bold" mb={2}>
            {name} Scale ({label})
          </Text>
          <HStack spacing={2}>
            {/* Light shades for backgrounds */}
            <Box bg={`${color}.100`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.800`} fontSize="xs">
                100
              </Text>
            </Box>
            <Box bg={`${color}.200`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.800`} fontSize="xs">
                200
              </Text>
            </Box>
            <Box bg={`${color}.300`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.800`} fontSize="xs">
                300
              </Text>
            </Box>

            {/* Medium shades for UI elements */}
            <Box bg={`${color}.400`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.900`} fontSize="xs">
                400
              </Text>
            </Box>
            <Box bg={`${color}.500`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.900`} fontSize="xs" fontWeight="bold">
                500
              </Text>
            </Box>
            <Box bg={`${color}.600`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.100`} fontSize="xs">
                600
              </Text>
            </Box>

            {/* Dark shades for depth */}
            <Box bg={`${color}.700`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.100`} fontSize="xs">
                700
              </Text>
            </Box>
            <Box bg={`${color}.800`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.100`} fontSize="xs">
                800
              </Text>
            </Box>
            <Box bg={`${color}.900`} p={4} borderRadius="md" minW="60px">
              <Text color={`${color}.100`} fontSize="xs">
                900
              </Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}
```

### Layered Design Patterns

```tsx
function LayeredCard() {
  return (
    <Box
      bg="blush.100" // Light base
      p={6}
      borderRadius="lg"
      borderWidth="1px"
      borderColor="blush.300"
    >
      {/* Header with medium shade */}
      <Box bg="blush.200" p={4} borderRadius="md" mb={4}>
        <Heading size="md" color="blush.800">
          Card Header
        </Heading>
      </Box>

      {/* Content with subtle background */}
      <Box
        bg="white"
        p={4}
        borderRadius="md"
        border="1px solid"
        borderColor="blush.300"
      >
        <Text color="blush.700" mb={3}>
          Card content with layered backgrounds using different shades.
        </Text>

        {/* Action button with strong shade */}
        <Button bg="blush.600" color="blush.100" _hover={{ bg: "blush.700" }}>
          Take Action
        </Button>
      </Box>
    </Box>
  );
}
```

---

_For more information on theme configuration and color usage, see the [Theme System](./theme.md) and [Color Palette](./colors.md) documentation._
