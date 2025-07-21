# Quick Reference

A developer-friendly cheat sheet for the theme system.

## 🎨 Color Tokens

### Individual Colors

```tsx
// Complete color scales (100-900)

// Blush scale (Primary)
blush.100    // #f5f0ee  |  blush.600    // #a67766
blush.200    // #e8d5d0  |  blush.700    // #8e614e
blush.300    // #dbbab1  |  blush.800    // #764b36
blush.400    // #ce9f93  |  blush.900    // #000000
blush.500    // #be8d7e (base)

// Amber scale (Secondary)
amber.100    // #f7f4e8  |  amber.600    // #a68a42
amber.200    // #ebe1c4  |  amber.700    // #8e7336
amber.300    // #dfce9f  |  amber.800    // #765c2a
amber.400    // #d3bb7b  |  amber.900    // #000000
amber.500    // #bea14e (base)

// Lime scale (Accent)
lime.100     // #f4f5e9  |  lime.600     // #9ba036
lime.200     // #e5e8c6  |  lime.700     // #84852c
lime.300     // #d6dba3  |  lime.800     // #6d6a22
lime.400     // #c7ce80  |  lime.900     // #000000
lime.500     // #b2bb40 (base)

// Forest scale (Success)
forest.100   // #eef2eb  |  forest.600   // #58833a
forest.200   // #d1dcc9  |  forest.700   // #496f30
forest.300   // #b4c6a7  |  forest.800   // #3a5b26
forest.400   // #97b085  |  forest.900   // #000000
forest.500   // #679744 (base)

// Sage scale (Info)
sage.100     // #eef3f1  |  sage.600     // #4e7a64
sage.200     // #d0ddd7  |  sage.700     // #426654
sage.300     // #b2c7bd  |  sage.800     // #365244
sage.400     // #94b1a3  |  sage.900     // #000000
sage.500     // #5a8e74 (base)
```

### Brand Colors

```tsx
brand.primary; // #be8d7e (Blush)
brand.secondary; // #bea14e (Amber)
brand.accent; // #b2bb40 (Lime)
brand.success; // #679744 (Forest)
brand.info; // #5a8e74 (Sage)
brand.dark; // #000000 (Black)
```

## ⚡ Common Patterns

### Button Quick Reference

```tsx
// Primary
<Button bg="brand.primary" color="brand.dark">Primary</Button>

// Secondary
<Button bg="brand.secondary" color="brand.dark">Secondary</Button>

// Success
<Button bg="brand.success" color="brand.dark">Success</Button>

// With hover effects
<Button
  bg="brand.primary"
  color="brand.dark"
  _hover={{ bg: "blush.500", transform: "translateY(-2px)" }}
>
  Animated
</Button>
```

### Box/Container Patterns

```tsx
// Light backgrounds with good contrast
<Box bg="blush.100" color="blush.800" border="1px solid" borderColor="blush.300">
  Subtle container
</Box>

// Medium contrast containers
<Box bg="forest.200" color="forest.700">Soft success container</Box>
<Box bg="amber.300" color="amber.800">Warm medium container</Box>

// High contrast containers
<Box bg="blush.500" color="blush.900">Traditional high contrast</Box>
<Box bg="sage.600" color="sage.100">Dark container with light text</Box>

// Subtle gradient backgrounds
<Box bg="linear-gradient(135deg, var(--colors-blush-100), var(--colors-blush-300))">
  Light gradient
</Box>

// Rich gradient backgrounds
<Box bg="linear-gradient(135deg, var(--colors-forest-400), var(--colors-sage-500))">
  Nature gradient
</Box>
```

### Form Elements

```tsx
// Inputs with theme focus
<Input
  borderColor="brand.info"
  _focus={{
    borderColor: "brand.primary",
    boxShadow: "0 0 0 1px var(--colors-brand-primary)"
  }}
/>

// Labels
<FormLabel color="brand.dark">Label</FormLabel>
```

## 🎯 Color Usage Guide

| Use Case           | Recommended Color | Example                       |
| ------------------ | ----------------- | ----------------------------- |
| Primary CTA        | `brand.primary`   | Main action buttons           |
| Secondary actions  | `brand.secondary` | Secondary buttons             |
| Success states     | `brand.success`   | Confirmations, success alerts |
| Information        | `brand.info`      | Help text, info alerts        |
| Accents/highlights | `brand.accent`    | Call-outs, featured content   |
| Text/borders       | `brand.dark`      | Body text, borders            |

## 🔧 Theme Provider Setup

```tsx
// In your root layout
import { Provider } from "@/components/theme/provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

## 🌙 Color Mode

```tsx
import { useColorMode } from "@/components/theme/color-mode";

function Component() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
```

## 📱 Responsive Patterns

```tsx
// Responsive colors
<Box bg={{ base: "brand.primary", md: "brand.secondary" }}>
  Content
</Box>

// Responsive spacing with theme
<Box
  p={{ base: 4, md: 6, lg: 8 }}
  bg="brand.info"
  color="brand.dark"
>
  Responsive content
</Box>
```

## 🎨 CSS Variable Access

```tsx
// For advanced styling
style={{
  backgroundColor: "var(--colors-blush-500)",
  color: "var(--colors-blush-900)",
  borderColor: "var(--colors-brand-primary)"
}}

// In CSS files
.custom-class {
  background: var(--colors-sage-500);
  color: var(--colors-sage-900);
}
```

## 🚀 Component Recipes

### Alert Variants

```tsx
// Success
<Alert.Root bg="brand.success" color="brand.dark">
  <Alert.Icon />
  <Alert.Title>Success!</Alert.Title>
</Alert.Root>

// Info
<Alert.Root bg="brand.info" color="brand.dark">
  <Alert.Icon />
  <Alert.Title>Info</Alert.Title>
</Alert.Root>
```

### Card Variants

```tsx
<Card.Root bg="blush.500" color="blush.900">
  <Card.Header>Header</Card.Header>
  <Card.Body>Content</Card.Body>
</Card.Root>
```

### Progress Bars

```tsx
<Progress colorPalette="blush" value={75} />
<Progress colorPalette="forest" value={100} />
<Progress colorPalette="amber" value={50} />
```

## 🎭 Animation Helpers

```tsx
// Hover effects
_hover={{
  bg: "brand.accent",
  transform: "translateY(-2px)",
  transition: "all 0.2s"
}}

// Scale effects
_hover={{
  transform: "scale(1.05)",
  transition: "transform 0.2s"
}}
```

## 🔍 Debugging

```tsx
// Log theme in development
if (process.env.NODE_ENV === "development") {
  console.log("Theme tokens:", system.theme.tokens);
}

// Access theme programmatically
import { useTheme } from "@chakra-ui/react";

function Component() {
  const theme = useTheme();
  console.log(theme.colors.brand.primary);
}
```

---

_For detailed documentation, see [Theme System](./theme.md), [Color Palette](./colors.md), and [Components](./components.md)._
