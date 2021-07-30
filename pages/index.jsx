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
import {
  useDisclosure,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import Head from "next/head";
import React from "react";
import Gallery from "../components/gallery";

export default function Home() {
  const { isOpen: openDesayuno, onToggle: toggleDesayuno } = useDisclosure();
  const { isOpen: openGladiador, onToggle: toggleGladiador } = useDisclosure();
  const { isOpen: openRoomService, onToggle: toggleRoomService } =
    useDisclosure();
  const { isOpen: openGallery, onToggle: toggleGallery } = useDisclosure();

  return (
    <>
      <Head>
        <title>Rio Lumbre</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex
        flexDir="column"
        w="100%"
        minH="100vh"
        bgColor="#000006"
        color="white"
        alignItems="center"
      >
        <Flex flexDir="row" w="100%" h="100px">
          <Divider alignSelf="center" borderTop="2px solid #FFFFFF" ml="50px" />
          <Center h="100%" w="auto">
            <a href="/">
              <Image
                src="/assets/logoBlanco.png"
                w="500px"
                h="auto"
                alignSelf="center"
                justifySelf="center"
                verticalAlign="middle"
              />
            </a>
          </Center>
          <Divider alignSelf="center" borderTop="2px solid #FFFFFF" mr="50px" />
        </Flex>
        <Center w="100%" h="full" flexDir="column">
          <Center
            w={["90%", "90%", "50%", "50%"]}
            h="auto"
            m="20px 0px"
            cursor="pointer"
            onClick={toggleDesayuno}
          >
            <Image src="/assets/Artboard_Desayunos.png" w="100%" h="auto" />
          </Center>
          <Collapse in={openDesayuno} animateOpacity w="50%" h="auto">
            <Flex
              flexDir="column"
              h="auto"
              w="100%"
              align="center"
              justify="center"
            >
              <Text
                fontSize="48px"
                fontFamily="josefin sans"
                textAlign="center"
              >
                DESAYUNOS
              </Text>
              <Grid
                gridTemplateColumns="10% 70% 20%"
                gridTemplateRows="auto"
                w="100%"
              >
                <Box gridColumn="1/4" gridRow="1">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Entradas
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="2">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Jocoque <br />
                    Infladitas de requeson <br />
                    Frijoles puercos
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="2">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $85 <br />
                    $60 <br />
                    $100
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="3" h="50px" />
                <Box gridColumn="1/4" gridRow="4">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Ligeros
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="5">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Plato de fruta <br />
                    Hot cakes <br />
                    Hot cakes con elote criollo <br />
                    Ensalada de hojas frescas <br />
                    Ensalada tibia
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="5">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $55 <br />
                    $85 <br />
                    $120 <br />
                    $110 <br />
                    $135
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="6" h="50px" />
                <Box gridColumn="1/4" gridRow="7">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Sopes y Tacos
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="8">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Sope de jocoque <br />
                    Sope de asada <br />
                    Tacos la cofradía <br />
                    Tacos de alambre
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="8">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $35 <br />
                    $60 <br />
                    $145 <br />
                    $120
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="9" h="50px" />
                <Box gridColumn="1/4" gridRow="10">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Huevos
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="11">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Huevos al gusto <br />
                    Huevos benedictinos
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="11">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $85 <br />
                    $130
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="12" h="50px" />
                <Box gridColumn="1/4" gridRow="13">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Chilaquiles
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="14">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Sencillos <br />
                    Con proteína <br />
                    &emsp; Verdes <br />
                    &emsp; Rojos <br />
                    &emsp; Proteínas: <br />
                    &emsp; Huevo, machaca o pollo
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="14">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $85 <br />
                    $100
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="15" h="50px" />
                <Box gridColumn="1/4" gridRow="16">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Machaca
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="17">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Burritos de machaca <br />
                    Machaca a la mexicana
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="17">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $65 <br />
                    $130
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="18" h="50px" />
              </Grid>
            </Flex>
          </Collapse>
          <Center
            w={["90%", "90%", "50%", "50%"]}
            h="auto"
            m="20px 0px"
            cursor="pointer"
            onClick={toggleGladiador}
          >
            <Image src="/assets/Artboard_Gladiador.png" w="100%" h="auto" />
          </Center>
          <Collapse in={openGladiador} animateOpacity w="50%" h="auto">
            <Flex
              flexDir="column"
              h="auto"
              w="100%"
              align="center"
              justify="center"
            >
              <Text
                fontSize="48px"
                fontFamily="josefine sans"
                textAlign="center"
              >
                GLADIADOR
              </Text>
              <Grid
                gridTemplateColumns="10% 70% 20%"
                gridTemplateRows="auto"
                w="100%"
              >
                <Box gridColumn="2/4" gridRow="1">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Vegetales al rescoldo <br />
                    Ensalada de hojas frescas y deshidratadas <br />
                    Papa troceada
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="2" h="50px" />
                <Box gridColumn="1/4" gridRow="3">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    PROTEÍNAS
                  </Text>
                </Box>
                <Box gridColumn="2/4" gridRow="4">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Mollejas <br />
                    Codorniz <br />
                    Pollo madurado <br />
                    Chistorra <br />
                    Chorizo artesanal <br />
                    Tomahawk <br />
                    Rib eye <br />
                    Vacío <br />
                    Arrachera <br />
                    Short rib
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="5" h="50px" />
                <Box gridColumn="1/4" gridRow="6">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    POSTRE DEL ASADOR
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="7" h="50px" />
              </Grid>
            </Flex>
          </Collapse>
          <Center
            w={["90%", "90%", "50%", "50%"]}
            h="auto"
            m="20px 0px"
            cursor="pointer"
            onClick={toggleRoomService}
          >
            <Image src="/assets/Artboard_RoomService.png" w="100%" h="auto" />
          </Center>
          <Collapse in={openRoomService} animateOpacity w="50%" h="auto">
            <Flex
              flexDir="column"
              h="auto"
              w="100%"
              align="center"
              justify="center"
            >
              <Text
                fontSize="48px"
                fontFamily="josefine sans"
                textAlign="center"
              >
                ROOM SERVICE
              </Text>
              <Grid
                gridTemplateColumns="10% 70% 20%"
                gridTemplateRows="auto"
                w="100%"
              >
                <Box gridColumn="1/4" gridRow="1">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Ensaladas
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="2">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Ensalada fresca
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="2">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $110
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="3" h="50px" />
                <Box gridColumn="1/4" gridRow="4">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Molletes
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="5">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Frijol <br />
                    Pollo <br />
                    Chorizo
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="5">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $85 <br />
                    $100 <br />
                    $100
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="6" h="50px" />
                <Box gridColumn="1/4" gridRow="7">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Hamburguesas
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="8">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Hamburguesa de la casa <br />
                    &emsp; Tiritas de papa frita, curtidas de la casa
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="8">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $135
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="9" h="50px" />
                <Box gridColumn="1/4" gridRow="10">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Gringas
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="11">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Carne <br />
                    Vegetales
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="11">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $125 <br />
                    $125
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="12" h="50px" />
                <Box gridColumn="1/4" gridRow="13">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="2xl"
                    color="red"
                    pl="25px"
                  >
                    Sándwich
                  </Text>
                </Box>
                <Box gridColumn="2" gridRow="14">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    Jamón de la casa <br />
                    Pollo <br />
                    Vegetales <br />
                    Quesos
                  </Text>
                </Box>
                <Box gridColumn="3" gridRow="14">
                  <Text
                    fontFamily="josefin sans"
                    fontSize="lg"
                    color="white"
                    pt="10px"
                  >
                    $145 <br />
                    $145 <br />
                    $130 <br />
                    $145 <br />
                  </Text>
                </Box>
                <Box gridColumn="1/4" gridRow="15" h="50px" />
              </Grid>
            </Flex>
          </Collapse>
          <Center
            w={["90%", "90%", "50%", "50%"]}
            h="auto"
            m="20px 0px"
            cursor="pointer"
            onClick={toggleGallery}
          >
            <Image src="/assets/Artboard_Galeria.png" w="100%" h="auto" />
          </Center>
          <Collapse in={openGallery} animateOpacity w="50%" h="auto">
            <Gallery />
          </Collapse>
        </Center>
        <Flex flexDir="column" w="100%" h="auto" textAlign="center" m="30px">
          <Text fontFamily="josefin sans" fontSize={["sm", "md", "lg", "lg"]}>
            Carretera Comala San Antonio - Colima México s/n Kilometro 11.5
            <br />
            Cofradía de Suchitlán, 28460 Comala, Col.
          </Text>
          <Flex flexDir="row" justifyContent="space-evenly" pt="30px">
            <a href="https://www.facebook.com/riolumbre" target="_blank">
              <Icon fontSize="24px" as={AiOutlineFacebook} />
            </a>
            <a href="https://www.instagram.com/riolumbre/" target="_blank">
              <Icon fontSize="24px" as={FiInstagram} />
            </a>
          </Flex>
        </Flex>
        <Center w="100%" h="50px">
          <Divider border="2px solid" m="50px" />
          <object data="/assets/Icono_Asador.svg" width="50px" />
          <Divider border="2px solid" m="50px" />
        </Center>
      </Flex>
    </>
  );
}
