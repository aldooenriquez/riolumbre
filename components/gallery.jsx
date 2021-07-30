import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Center,
  Divider,
  Grid,
} from "@chakra-ui/layout";
import React from "react";

export default function Gallery() {
  return (
    <Grid
      templateColumns={[
        "1fr",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gridAutoRows="auto"
      columnGap={[6, 3, 4, 6]}
      rowGap={[6, 3, 4, 6]}
      p="0px 20px"
    >
      <Image
        src="/assets/muestras/muestra1.jpeg"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra2.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra3.jpeg"
        gridColumn={["1", "3", "3", "3"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra4.jpeg"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra5.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
    </Grid>
  );
}
