import React from "react";
import { Box, Center, FormControl, Input, ScrollView, Text, VStack} from 'native-base'
import { Colors } from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { StackNavParamsList } from "../Navigations/StackNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ShippingScreenProp = NativeStackNavigationProp<StackNavParamsList,'Shipping'>

const ShippingInputs = [
    {
        label: "ENTER CITY", type: "text"
    },
    {
        label: "ENTER COUNTRY", type: "text"
    },
    {
        label: "ENTER POSTAL CODE", type: "text"
    },
    {
        label: "ENTER ADDRESS", type: "text"
    },
]

function ShippingScreen() {
    const navigation = useNavigation<ShippingScreenProp>()
    return (
        <Box flex={1} safeAreaTop bg={Colors.green} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold >
                    DELIVERY ADDRESS
                </Text>
            </Center>
            {/* Inputs */}
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {ShippingInputs.map((i, index) => (
                            <FormControl key={index}>
                                <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
                                    {i.label}
                                </FormControl.Label>
                                <Input
                                    type={i.type}
                                    borderWidth={.2}
                                    borderColor={Colors.green}
                                    bg={Colors.sub_gray}
                                    py={4}
                                    color={Colors.green}
                                    _focus={{
                                        bg: Colors.sub_green,
                                        borderWidth: 1,
                                        borderColor: Colors.green
                                    }} />
                            </FormControl>

                        ))}
                        <Buttone bg={Colors.green} color={Colors.white} mt={5}
                            onPress={() => navigation.navigate("Checkout")}
                        >
                            CONTINUE
                        </Buttone>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen;
