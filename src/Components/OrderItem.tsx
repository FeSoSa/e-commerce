import React from "react";
import { Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from "native-base";
import { Products } from "../data";
import { Colors } from "../color";

export default function OrderItem() {
  return (
    <FlatList 
        showsVerticalScrollIndicator={false} 
        data={Products.slice(0,3)}
        keyExtractor={(item) => item.id} 
        renderItem={(item) => (
            <Pressable>
                <Box mb={3}>
                    <Box>
                        <HStack 
                        alignItems="center" 
                        bg={Colors.white} 
                        shadow={1} 
                        rounded={10} 
                        overflow="hidden">
                            <Center w="25%" bg={Colors.white}>
                                <Image source={{uri:item.item.image}} alt={item.item.name} w="full" h={24} resizeMode="contain"/>
                            </Center>
                            <VStack w="60%" px={2}>
                                <Text isTruncated color={Colors.black} bold fontSize={14}>
                                    {item.item.name}
                                </Text>
                                <Text isTruncated color={Colors.dark_gray} mt={2} bold>
                                    ${item.item.price}
                                </Text>
                            </VStack>
                            <Center><Button bg={Colors.green} _pressed={{bg:Colors.green}}>$</Button></Center>
                        </HStack>
                    </Box>
                </Box>
            </Pressable>
        )}
    />
  );
}
