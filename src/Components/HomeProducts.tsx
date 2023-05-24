import { Collapse, Flex, Pressable, ScrollView, Text, Image, Box, Heading } from "native-base";
import React from "react";
import { Products } from "../data";
import { Colors } from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavParamsList } from "../Navigations/StackNav";

type HomeScreenProp = NativeStackNavigationProp<StackNavParamsList,'Home'>

function HomeProducts() {
  const navigation = useNavigation<HomeScreenProp>()
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>

        {Products.map((prod) => (
          <Pressable key={prod.id} w="47%" bg={Colors.white} rounded="md" shadow={2} pt={0.3}
            my={3} pb={2} overflow="hidden"
            onPress={() => navigation.navigate("Single",prod)}
          >
            <Image source={{uri:prod.image}} alt={prod.name} w="full" h={24} mt={1} resizeMode="contain" />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${prod.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">{prod.name}</Text>
          
              {/*Rating*/}
              <Rating value={prod.rating} text=""/>

            </Box>
          </Pressable>
        ))}

      </Flex>
    </ScrollView>
  )
}

export default HomeProducts;
