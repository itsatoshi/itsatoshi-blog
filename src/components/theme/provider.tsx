"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            "var(--font-sora), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        },
        body: {
          value:
            "var(--font-zen-maru-gothic), -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        },
      },
      colors: {
        // Custom color palette with full scales (100-800 + 900 for high contrast)
        blush: {
          "100": { value: "#f5f0ee" },
          "200": { value: "#e8d5d0" },
          "300": { value: "#dbbab1" },
          "400": { value: "#ce9f93" },
          "500": { value: "#be8d7e" },
          "600": { value: "#a67766" },
          "700": { value: "#8e614e" },
          "800": { value: "#764b36" },
          "900": { value: "#000000" },
        },
        amber: {
          "100": { value: "#f7f4e8" },
          "200": { value: "#ebe1c4" },
          "300": { value: "#dfce9f" },
          "400": { value: "#d3bb7b" },
          "500": { value: "#bea14e" },
          "600": { value: "#a68a42" },
          "700": { value: "#8e7336" },
          "800": { value: "#765c2a" },
          "900": { value: "#000000" },
        },
        lime: {
          "100": { value: "#f4f5e9" },
          "200": { value: "#e5e8c6" },
          "300": { value: "#d6dba3" },
          "400": { value: "#c7ce80" },
          "500": { value: "#b2bb40" },
          "600": { value: "#9ba036" },
          "700": { value: "#84852c" },
          "800": { value: "#6d6a22" },
          "900": { value: "#000000" },
        },
        forest: {
          "100": { value: "#eef2eb" },
          "200": { value: "#d1dcc9" },
          "300": { value: "#b4c6a7" },
          "400": { value: "#97b085" },
          "500": { value: "#679744" },
          "600": { value: "#58833a" },
          "700": { value: "#496f30" },
          "800": { value: "#3a5b26" },
          "900": { value: "#000000" },
        },
        sage: {
          "100": { value: "#eef3f1" },
          "200": { value: "#d0ddd7" },
          "300": { value: "#b2c7bd" },
          "400": { value: "#94b1a3" },
          "500": { value: "#5a8e74" },
          "600": { value: "#4e7a64" },
          "700": { value: "#426654" },
          "800": { value: "#365244" },
          "900": { value: "#000000" },
        },
        // Brand colors for easy access
        brand: {
          primary: { value: "#be8d7e" },
          secondary: { value: "#bea14e" },
          accent: { value: "#b2bb40" },
          success: { value: "#679744" },
          info: { value: "#5a8e74" },
          dark: { value: "#000000" },
        },
      },
    },
  },
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
