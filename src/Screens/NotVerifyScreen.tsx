import React from "react";
import { Box, Center,Image, VStack} from 'native-base'
import { Colors } from "../color";
import Buttone from "../Components/Buttone";

function NotVerifyScreen() {
    return (
        <Box flex={1} bg={Colors.green} safeAreaTop>
            <Center w="full" h={250}>
                <Image
                    source={require("../../assets/icon.png")}
                    alt="logo"
                    size="lg"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone bg={Colors.black} color={Colors.white}>
                        REGISTER
                </Buttone>
                <Buttone bg={Colors.white} color={Colors.black}>
                        LOGIN
                </Buttone>
        </VStack>
        </Box >
    )
}

export default NotVerifyScreen;
