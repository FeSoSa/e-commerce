import React, { useState } from "react";
import { Box, Center, Image, HStack, ScrollView, Text, VStack,Checkbox, Icon } from 'native-base'
import { Colors } from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavParamsList } from "../Navigations/StackNav";

type PaymentScreenProp = NativeStackNavigationProp<StackNavParamsList,'Payment'>

const PaymentMethods = [
    {
        image: require(`../../assets/Images/paypal_logo.png`), value: "Paypal", icon: "Ionicons"
    },
    {
        image: require(`../../assets/Images/picpay_logo.png`), value: "Picpac", icon: "FontAwesome"
    },
    {
        image: require(`../../assets/Images/boleto_logo.png`),name:"Boleto Bancário", value: "Boleto", icon: "FontAwesome"
    },
    {
        image: require(`../../assets/Images/card_logo.png`),name:"Cartão de Crédito/Debito", value:"Card", icon: "FontAwesome"
    },
]

function PaymentScreen() {
    const navigation = useNavigation<PaymentScreenProp>()
    const [Payment,setPayment] = useState("Paypal")

    return (
        <Box flex={1} safeAreaTop bg={Colors.green} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold >
                    PAYMENT METHOD
                </Text>
            </Center>
            {/* Selection */}
            <Box h="full" bg={Colors.sub_gray} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {PaymentMethods.map((i, index) => (
                            <HStack
                                key={index}
                                alignItems="center"
                                bg={Colors.white}
                                justifyContent="space-between"
                                px={3}
                                py={1}
                                rounded={10}
                            >
                            <HStack alignItems="center">
                                <Box>
                                    <Image
                                        source={i.image}
                                        alt={i.value}
                                        resizeMode="contain"
                                        justifyContent="space-between"
                                        w={60}
                                        h={50}
                                    />
                                </Box>
                                <Text pl={3} bold>{i.name || i.value}</Text>
                            </HStack>
                                <Checkbox
                                    id={i.value}
                                    rounded={50} 
                                    size="lg"
                                    borderColor={Colors.green}
                                    icon={<Icon 
                                        as={<Ionicons name="checkmark"/>}
                                        bg={Colors.green}
                                    />}
                                    _checked={{
                                        bg:Colors.green,
                                        borderColor:Colors.green,
                                        _pressed:{
                                            bg:Colors.green,
                                        }
                                    }}
                                    _pressed={{
                                        borderWidth:1,
                                        borderColor:Colors.green
                                    }}

                                    value={i.value}
                                    onChange={() => {
                                    setPayment(i.value)
                                    }}
                                    isChecked={Payment === i.value}
                                />

                            </HStack>
                        ))}
                        <Buttone bg={Colors.green} color={Colors.white} mt={5}
                            onPress={() => navigation.navigate("PlaceOrder")}
                        >
                            CONTINUE
                        </Buttone>
                        <Text italic textAlign="center">Payment method is <Text bold>Paypal</Text> by</Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default PaymentScreen;