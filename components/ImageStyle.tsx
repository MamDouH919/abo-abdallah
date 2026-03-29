import { Stack } from "@mui/material";
import Image from "next/image";

type ImageStyleProps = {
  src: string;
  alt: string;
};

const ImageStyle = ({ src, alt }: ImageStyleProps) => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height={{lg: 500, md: 400, sm: 300, xs: 200}}
      width={{lg: 500, md: 400, sm: 300, xs: 200}}
      position={"relative"}
      overflow={"hidden"}
      borderRadius={20}
    >
      <Image
        loading="lazy"
        alt={alt}
        src={src}
        fill
        style={{ objectFit: "contain" }}
      />
    </Stack>
  );
};

export default ImageStyle;
