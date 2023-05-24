import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text} from 'native-base'
import { Colors } from "../color";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavParamsList } from "../Navigations/StackNav";

type CartScreenProp = NativeStackNavigationProp<StackNavParamsList,'Cart'>

function CartScreen() {
    const navigation = useNavigation<CartScreenProp>()
    return (
        <Box flex={1} safeAreaTop bg={Colors.sub_gray}>
            {/* Header */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Carrinho
                </Text>
            </Center>
            {/* Se estiver vazio 
            <CartEmpty/>*/}
            {/* Carrinho de itens */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItems />
                {/* Botões */}
                <Center mt={5}>
                    <HStack rounded={50} justifyContent='space-between' bg={Colors.white} shadow={2} w='90%' pl={5} h={45} alignItems='center'>
                        <Text>Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={50}
                            bg={Colors.green}
                            _text={{ color: Colors.white,fontWeight:'semibold' }}
                            _pressed={{
                                bg:Colors.green
                            }}
                        >
                            $356
                        </Button>
                    </HStack>
                </Center>
                {/* Checkout */}
                <Center px={5}>
                    <Buttone bg={Colors.black} color={Colors.white} mt={10}
                        onPress={() => navigation.navigate("Shipping")}
                    >
                        CHECKOUT
                    </Buttone>

                </Center>
            </ScrollView>
        </Box>
    )
}

export default CartScreen;
