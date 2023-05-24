import React from "react";
import { Box, Center, Text } from "native-base";
import { Colors } from "../color";
import { FontAwesome } from '@expo/vector-icons'
import Buttone from "./Buttone";

export default function CartEmpty() {
  return (
    <Box flex={1} px={4}>
      <Center h='90%'>
        <Center w={200} h={200} bg={Colors.white} rounded="full">
            <FontAwesome name="shopping-basket" size={64} color={Colors.green}/>
        </Center>
        <Text color={Colors.green} bold mt={5} fontSize={20}>CARRINHO VAZIO</Text>
      </Center>
      <Buttone bg={Colors.black} color={Colors.white}>
        Voltar as compras
      </Buttone>
    </Box>
  );
}
