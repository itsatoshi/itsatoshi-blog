# Theme System

This document provides a comprehensive guide to the custom theme implementation using Chakra UI.

## 🏗️ Architecture

The theme system is built on top of Chakra UI v3 and consists of:

### Core Components

- **Provider** (`src/components/theme/provider.tsx`) - Main theme provider wrapper
- **ColorModeProvider** (`src/components/theme/color-mode.tsx`) - Dark/light mode management
- **System Configuration** - Custom token definitions and overrides

### File Structure

```
src/components/theme/
├── provider.tsx      # Main theme provider
└── color-mode.tsx    # Color mode functionality
```

## 🎨 Theme Configuration

### System Creation

```tsx
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        /* ... */
      },
      colors: {
        /* ... */
      },
    },
  },
});
```

### Font Configuration

The theme includes custom font stacks:

- **Heading Font**: Sora with system fallbacks
- **Body Font**: Zen Maru Gothic with system fallbacks

```tsx
fonts: {
  heading: {
    value: "var(--font-sora), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  body: {
    value: "var(--font-zen-maru-gothic), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  },
}
```

## 🔧 Usage

### Provider Setup

Wrap your application with the theme provider:

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

### Accessing Theme Values

```tsx
import { useTheme } from "@chakra-ui/react";

function MyComponent() {
  const theme = useTheme();

  // Access colors
  const primaryColor = theme.colors.brand.primary;

  // Access fonts
  const headingFont = theme.fonts.heading;

  return <div>Content</div>;
}
```

## 🌙 Color Mode

The theme supports both light and dark modes through the ColorModeProvider. Users can toggle between modes, and the preference is persisted.

### Color Mode Hook

```tsx
import { useColorMode } from "@/components/theme/color-mode";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      Switch to {colorMode === "light" ? "dark" : "light"} mode
    </button>
  );
}
```

## 🔀 Customization

### Adding New Colors

To add new colors to the theme:

```tsx
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // Existing colors...
        newColor: {
          "500": { value: "#your-color" },
          "900": { value: "#darker-variant" },
        },
      },
    },
  },
});
```

### Extending Typography

To add new font configurations:

```tsx
fonts: {
  heading: { /* ... */ },
  body: { /* ... */ },
  mono: {
    value: "var(--font-mono), 'SF Mono', Consolas, monospace",
  },
}
```

## 🎯 Best Practices

1. **Use Semantic Colors**: Prefer `brand.primary` over direct color values
2. **Consistent Color Scales**: Use 500 for main colors, 900 for dark variants
3. **Font Variables**: Always provide fallback fonts
4. **Theme Context**: Access theme values through hooks when possible
5. **Color Mode Aware**: Design components that work in both light and dark modes

## 🔍 Debugging

### Theme Inspector

Use Chakra UI's built-in theme inspector in development:

```tsx
import { ChakraProvider } from "@chakra-ui/react";

// Add this in development
if (process.env.NODE_ENV === "development") {
  console.log("Theme tokens:", system.theme.tokens);
}
```

### Common Issues

- **Font Loading**: Ensure font variables are defined in your CSS
- **Color Access**: Use the correct path (`brand.primary` not `brand.primary.value`)
- **Provider Order**: Ensure ChakraProvider wraps ColorModeProvider
