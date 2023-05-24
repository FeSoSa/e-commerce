import React from "react";
import { Box, Button, Heading, Input, Pressable, Text, VStack, Image } from 'native-base'
import { Colors } from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { StackNavParamsList } from "../Navigations/StackNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RegisterScreenProp = NativeStackNavigationProp<StackNavParamsList,'Register'>

function RegisterScreen(navigation:RegisterScreenProp) {
    return (
        <Box flex={1} bg={"#0000"}>
            <Image
                flex={1}
                alt="logo"
                source={require("../../assets/Cover-W.png")}
                resizeMode="cover"
                size="lg"
                w="full"
            />
            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
            >

                <Heading>SIGN UP</Heading>
                <VStack space={5} pt="6">
                    {/*Username */}
                    <Input
                        InputLeftElement={<FontAwesome name="user" size={24} color={Colors.green} />}
                        variant="underlined"
                        placeholder="Felipe"
                        pl={2}
                        w="70%"
                        size={10}
                        color={Colors.black}
                        borderBottomColor={Colors.gray} />
                    {/*Login */}
                    <Input
                        InputLeftElement={<MaterialIcons name="email" size={24} color={Colors.green} />}
                        variant="underlined"
                        placeholder="user@gmail.com"
                        pl={2}
                        w="70%"
                        size={10}
                        type="text"
                        color={Colors.black}
                        borderBottomColor={Colors.gray} />
                    {/*Password */}
                    <Input
                        InputLeftElement={<Ionicons name="eye" size={24} color={Colors.green} />}
                        variant="underlined"
                        placeholder="*********"
                        pl={2}
                        size={10}
                        type="password"
                        w="70%"
                        color={Colors.black}
                        borderBottomColor={Colors.gray} />
                </VStack>
                <Button
                    _pressed={{
                        bg: Colors.gray
                    }}
                    my={30}
                    w="40%"
                    rounded={50}
                    bg={Colors.green}
                    onPress={() => navigation.navigate('Bottom')}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text color={Colors.gray}>LOGIN</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default RegisterScreen;
