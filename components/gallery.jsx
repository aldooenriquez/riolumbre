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
        src="/assets/muestras/muestra1-min.jpeg"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra2-min.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra3-min.jpeg"
        gridColumn={["1", "3", "3", "3"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra4-min.jpeg"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra12-min.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra7-min.JPG"
        gridColumn={["1", "3", "3", "3"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra8-min.JPG"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra9-min.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra10-min.jpeg"
        gridColumn={["1", "3", "3", "3"]}
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra11-min.jpeg"
        gridColumn="1"
        w="100%"
        h="auto"
      />
      <Image
        src="/assets/muestras/muestra5-min.jpeg"
        gridColumn={["1", "2", "2", "2"]}
        w="100%"
        h="auto"
      />
    </Grid>
  );
}
