import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export type AvatarStickerProps = {
  width: BoxProps["width"];
  height: BoxProps["height"];
  imageSizes: string;
  borderWidth?: BoxProps["borderWidth"];
  rotation?: string;
};

export function AvatarSticker({
  width,
  height,
  imageSizes,
  borderWidth = "4px",
  rotation = "-2deg",
}: AvatarStickerProps) {
  return (
    <Box
      position="relative"
      w={width}
      h={height}
      transform={`rotate(${rotation})`}
    >
      {/* Outer sticker wrapper with glossy effect */}
      <Box
        position="relative"
        w="full"
        h="full"
        borderRadius="full"
        p="2px"
        bg="linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)"
        boxShadow="0 3px 6px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.08)"
        _before={{
          content: '""',
          position: "absolute",
          top: "4px",
          left: "4px",
          right: "4px",
          bottom: "4px",
          borderRadius: "full",
          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 25%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: "-1px",
          right: "-1px",
          width: "8px",
          height: "8px",
          background: "linear-gradient(45deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)",
          borderRadius: "0 100% 0 100%",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          zIndex: 3,
        }}
      >
        {/* Inner avatar content */}
        <Box
          position="relative"
          w="full"
          h="full"
          bgColor="forest.300"
          borderColor="white"
          borderStyle="solid"
          borderWidth={borderWidth}
          borderRadius="full"
          bgImage="url(/images/backgrounds/topography-forest.svg)"
          overflow="hidden"
        >
          <Image
            src="/images/memoji.png"
            fill
            sizes={imageSizes}
            alt=""
            quality={80}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
