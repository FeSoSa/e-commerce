import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import { Colors } from "../color";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation()
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.green}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Hardware, Console, Smartphone..."
        w="85%"
        h={12}
        variant="filled"
        bg={Colors.white}
        borderWidth={0}
        type="text"
        _focus={{
          bg:Colors.white
        }}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bgColor={Colors.red}
          _text={{
            color: Colors.red,
            fontSize: "11px" 
          }}
        >
          5
        </Box>
      </Pressable>

    </HStack>
  )
}

export default HomeSearch;
