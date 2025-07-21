# Color Palette

This document provides a complete reference for the custom color palette and usage guidelines.

## 🎨 Color Overview

The theme features a carefully curated color palette with 5 main colors, each paired with black for contrast and accessibility.

### Primary Colors

| Color      | Hex Code  | Usage                                  |
| ---------- | --------- | -------------------------------------- |
| **Blush**  | `#be8d7e` | Primary brand color, warm and inviting |
| **Amber**  | `#bea14e` | Secondary color, energy and warmth     |
| **Lime**   | `#b2bb40` | Accent color, fresh and modern         |
| **Forest** | `#679744` | Success states, nature-inspired        |
| **Sage**   | `#5a8e74` | Informational, calm and balanced       |
| **Black**  | `#000000` | Text, borders, high contrast           |

## 🏷️ Color Tokens

### Individual Color Scales

Each color has a complete scale from 100 (lightest) to 900 (high contrast black):

#### Blush - Warm, primary brand color

```tsx
blush.100   // #f5f0ee - Very light blush
blush.200   // #e8d5d0 - Light blush
blush.300   // #dbbab1 - Light-medium blush
blush.400   // #ce9f93 - Medium-light blush
blush.500   // #be8d7e - Base blush (primary)
blush.600   // #a67766 - Medium-dark blush
blush.700   // #8e614e - Dark blush
blush.800   // #764b36 - Very dark blush
blush.900   // #000000 - High contrast black
```

#### Amber - Energetic secondary color

```tsx
amber.100   // #f7f4e8 - Very light amber
amber.200   // #ebe1c4 - Light amber
amber.300   // #dfce9f - Light-medium amber
amber.400   // #d3bb7b - Medium-light amber
amber.500   // #bea14e - Base amber (secondary)
amber.600   // #a68a42 - Medium-dark amber
amber.700   // #8e7336 - Dark amber
amber.800   // #765c2a - Very dark amber
amber.900   // #000000 - High contrast black
```

#### Lime - Fresh accent color

```tsx
lime.100    // #f4f5e9 - Very light lime
lime.200    // #e5e8c6 - Light lime
lime.300    // #d6dba3 - Light-medium lime
lime.400    // #c7ce80 - Medium-light lime
lime.500    // #b2bb40 - Base lime (accent)
lime.600    // #9ba036 - Medium-dark lime
lime.700    // #84852c - Dark lime
lime.800    // #6d6a22 - Very dark lime
lime.900    // #000000 - High contrast black
```

#### Forest - Natural success color

```tsx
forest.100  // #eef2eb - Very light forest
forest.200  // #d1dcc9 - Light forest
forest.300  // #b4c6a7 - Light-medium forest
forest.400  // #97b085 - Medium-light forest
forest.500  // #679744 - Base forest (success)
forest.600  // #58833a - Medium-dark forest
forest.700  // #496f30 - Dark forest
forest.800  // #3a5b26 - Very dark forest
forest.900  // #000000 - High contrast black
```

#### Sage - Calming info color

```tsx
sage.100    // #eef3f1 - Very light sage
sage.200    // #d0ddd7 - Light sage
sage.300    // #b2c7bd - Light-medium sage
sage.400    // #94b1a3 - Medium-light sage
sage.500    // #5a8e74 - Base sage (info)
sage.600    // #4e7a64 - Medium-dark sage
sage.700    // #426654 - Dark sage
sage.800    // #365244 - Very dark sage
sage.900    // #000000 - High contrast black
```

### Brand Semantic Colors

For easier semantic usage across the application:

```tsx
brand.primary; // #be8d7e (Blush)
brand.secondary; // #bea14e (Amber)
brand.accent; // #b2bb40 (Lime)
brand.success; // #679744 (Forest)
brand.info; // #5a8e74 (Sage)
brand.dark; // #000000 (Black)
```

## 💡 Usage Examples

### Basic Color Application

```tsx
// Using various shades for depth and hierarchy
<Box bg="blush.100" borderColor="blush.300" p={4}>
  <Text color="blush.800">Light background with dark text</Text>
</Box>

<Button bg="amber.500" color="amber.900" _hover={{ bg: "amber.600" }}>
  Hover effect with darker shade
</Button>

<VStack spacing={2}>
  <Text color="sage.300">Light informational text</Text>
  <Text color="sage.500">Medium informational text</Text>
  <Text color="sage.700">Strong informational text</Text>
</VStack>

// Gradient backgrounds using multiple shades
<Box bg={`linear-gradient(135deg, var(--colors-blush-200), var(--colors-blush-400))`}>
  Subtle gradient content
</Box>

// High contrast combinations
<Box bg="forest.500" color="forest.900">
  Primary content with high contrast
</Box>
```

### Brand Colors for Semantic Meaning

```tsx
// Primary actions
<Button bg="brand.primary" color="brand.dark">
  Primary Button
</Button>

// Success states
<Alert status="success" bg="brand.success">
  Operation completed successfully
</Alert>

// Informational content
<Box borderLeft="4px solid" borderColor="brand.info" p={4}>
  <Text color="brand.info">Important information</Text>
</Box>
```

### Color Palettes for Components

```tsx
// Using colorPalette prop with Chakra UI components
<Button colorPalette="blush" variant="solid">
  Blush Button
</Button>

<Badge colorPalette="forest" variant="solid">
  Success Badge
</Badge>

<Progress colorPalette="lime" value={75} />
```

## 🎯 Color Guidelines

### Semantic Usage

| Color      | Best Used For                                | Avoid Using For             |
| ---------- | -------------------------------------------- | --------------------------- |
| **Blush**  | Primary CTAs, hero sections, branding        | Error states, warnings      |
| **Amber**  | Secondary actions, highlights                | Success messages            |
| **Lime**   | Accents, call-outs, features                 | Error states                |
| **Forest** | Success states, confirmations, nature themes | Error states, warnings      |
| **Sage**   | Information, calm sections, secondary text   | Urgent actions              |
| **Black**  | Text, borders, high contrast elements        | Backgrounds (use sparingly) |

### Accessibility Considerations

- All colors provide adequate contrast when paired with black (`#000000`)
- Use the 900 variants (black) for text over colored backgrounds
- Ensure proper contrast ratios for WCAG compliance
- Test color combinations in both light and dark modes

### Color Combinations

#### Recommended Pairings

```tsx
// High contrast for readability
bg="blush.500" color="blush.900"    // ✅ Excellent contrast
bg="forest.500" color="forest.900"  // ✅ Great for success states
bg="sage.500" color="sage.900"      // ✅ Perfect for info sections

// Light backgrounds with dark text
bg="blush.100" color="blush.800"    // ✅ Subtle with good contrast
bg="sage.200" color="sage.700"      // ✅ Soft informational look
bg="lime.100" color="lime.700"      // ✅ Fresh accent style

// Medium contrast combinations
bg="amber.300" color="amber.700"    // ✅ Balanced warmth
bg="forest.200" color="forest.600"  // ✅ Natural, calming

// Subtle combinations
bg="lime.500" color="forest.500"    // ✅ Natural, complementary
bg="amber.500" color="blush.500"    // ✅ Warm, harmonious
bg="blush.100" color="sage.600"     // ✅ Soft with calm accent
```

#### Avoid These Combinations

```tsx
// Poor contrast
bg="lime.500" color="amber.500"     // ❌ Poor contrast
bg="blush.300" color="sage.400"     // ❌ Too subtle
bg="forest.500" color="lime.500"    // ❌ Competing colors

// Light on light
bg="blush.100" color="blush.200"    // ❌ Insufficient contrast
bg="sage.200" color="lime.300"      // ❌ Very poor readability
```

## 🌈 Color Variations

### Creating Lighter/Darker Variants

For additional color variations, you can use CSS color functions:

```tsx
// Lighter variants using opacity
<Box bg="blush.500/20">  {/* 20% opacity */}
  Light blush background
</Box>

// Using CSS color-mix (modern browsers)
style={{
  backgroundColor: "color-mix(in srgb, var(--colors-blush-500) 50%, white)"
}}
```

### Gradient Combinations

```tsx
// Beautiful gradient combinations
background: linear-gradient(135deg, var(--colors-blush-500), var(--colors-amber-500))
background: linear-gradient(to right, var(--colors-sage-500), var(--colors-forest-500))
background: linear-gradient(45deg, var(--colors-lime-500), var(--colors-amber-500))
```

## 🔧 Custom Color Extensions

### Adding New Colors

To extend the palette, follow this pattern:

```tsx
// In your theme provider
colors: {
  // Existing colors...

  // New color following the same pattern
  coral: {
    "500": { value: "#ff7f7f" },
    "900": { value: "#000000" },
  },

  // Add to brand colors if needed
  brand: {
    // Existing brand colors...
    danger: { value: "#ff7f7f" },
  },
}
```

## 🎨 Design System Integration

### Figma/Design Tools

Use these hex codes in your design tools:

- Blush: `#be8d7e`
- Amber: `#bea14e`
- Lime: `#b2bb40`
- Forest: `#679744`
- Sage: `#5a8e74`
- Black: `#000000`

### Color Naming Convention

- **500**: Main color variant
- **900**: High contrast variant (black)
- **Brand**: Semantic naming for specific use cases

---

_For more information on implementing these colors, see the [Theme System](./theme.md) documentation._
