import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export type AvatarStickerProps = {
  width: BoxProps["width"];
  height: BoxProps["height"];
  imageSizes: string;
  borderWidth?: BoxProps["borderWidth"];
};

export function AvatarSticker({
  width,
  height,
  imageSizes,
  borderWidth = "4px",
}: AvatarStickerProps) {
  return (
    <Box
      boxShadow="md"
      bgColor="forest.300"
      borderColor="white"
      borderStyle="solid"
      borderWidth={borderWidth}
      position="relative"
      w={width}
      h={height}
      borderRadius="full"
      bgImage="url(/images/backgrounds/topography-forest.svg)"
    >
      <Image
        src="/images/memoji.png"
        fill
        sizes={imageSizes}
        alt=""
        quality={80}
      />
    </Box>
  );
}
