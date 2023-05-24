import React, { useState } from "react";
import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from 'native-base'
import { Colors } from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavParamsList } from "../Navigations/StackNav";

type SingleScreenProp = NativeStackNavigationProp<StackNavParamsList,'Single'>

function SingleProductScreen({ route }:any) {
    const navigation = useNavigation<SingleScreenProp>()
    const product = route.params

    const [value, setValue] = useState(0);

    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={{ uri: product.image }} alt="Image" w="full" h={300} resizeMode="contain" />
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    {product.name}
                </Heading>
                <Rating value={product.rating} text="" />
                <HStack space={2} alignItems={'center'} my={5}>
                    {product.countInStock > 0 ? (
                        <>
                            <NumericInput
                                value={value}
                                totalWidth={140}
                                totalHeight={30}
                                iconSize={25}
                                step={1}
                                maxValue={product.countInStock}
                                minValue={0}
                                borderColor={Colors.gray}
                                rounded
                                textColor={Colors.black}
                                iconStyle={{ color: Colors.white }}
                                rightButtonBackgroundColor={Colors.green}
                                leftButtonBackgroundColor={Colors.green}
                            />

                        </>
                    ) : (
                        <Heading bold color={Colors.red} fontSize={12} italic>Fora de Estoque</Heading>
                    )
                    }
                <Spacer />
                <Heading bold color={Colors.black} fontSize={19}>${product.price}</Heading>
                </HStack>
                <Text>{product.description}</Text>
                <Buttone bg={Colors.green} color={Colors.white} mt={10}
                    onPress={() => navigation.navigate("Cart")}
                >
                    ADICIONAR
                </Buttone>
                {/* Review  */}
                <Review />

            </ScrollView>
        </Box>
    )
}

export default SingleProductScreen;
