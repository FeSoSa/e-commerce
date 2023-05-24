import { Box, FormControl, Heading, Text, VStack, Select, CheckIcon, TextArea, Pressable } from "native-base";
import React, { useState } from "react";
import { Colors } from "../color";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import Buttone from "./Buttone";
import { useNavigation } from "@react-navigation/native";
import { StackNavParamsList } from "../Navigations/StackNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SingleScreenProp = NativeStackNavigationProp<StackNavParamsList,'Single'>
function Review() {
    const navigation = useNavigation<SingleScreenProp>()
    const [ratings, setRatings] = useState('');
    let reviews = false
    let logado = false
    return (
        <Box my={9}>
            <Heading bold fontSize={16} mb={2}>
                Avaliações
            </Heading>
            {!reviews
                ? 
                <Message
                    bold="bold"
                    color={Colors.green}
                    bg={Colors.sub_gray}
                    size={14}
                    children={"Sem Avaliações"}
                />

                :
                <Box p={3} bg={Colors.sub_gray} mt={5} rounded={5}>
                    <Heading fontSize={15} color={Colors.black}>User Doe</Heading>
                    <Rating value={4.9} text="" />
                    <Text my={2} fontSize={11}>May 15 2023</Text>
                    <Message
                        color={Colors.black}
                        bg={Colors.white}
                        size={12}
                        children={"Queria demais"}
                    />
                </Box>

            }

            {/* Escrever Review */}
            {logado 
            ?
            <Box mt={6}>
            <Heading pt={1} bold fontSize={16} mb={4} borderTopWidth={"0.5"} borderTopColor={Colors.black}>
                Avalie o produto
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>
                        Nota
                    </FormControl.Label>
                    <Select
                        fontWeight={'bold'}
                        bg={Colors.sub_gray}
                        borderWidth={0}
                        rounded={5}
                        py={4}
                        placeholder="Escolha sua nota"
                        _selectedItem={{
                            bg: Colors.sub_gray,
                            endIcon: <CheckIcon size={3} />
                        }}
                        selectedValue={ratings}
                        value={ratings}
                        onValueChange={(e) => setRatings(e)}
                    >
                        <Select.Item label="1 - Horrível" value="1" />,
                        <Select.Item label="2 - Ruim" value="2" />,
                        <Select.Item label="3 - Legal" value="3" />,
                        <Select.Item label="4 - Muito Bom" value="4" />,
                        <Select.Item label="5 - Perfeito" value="5" />
                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>
                        Comentário
                    </FormControl.Label>
                    <TextArea
                        autoCompleteType={Text}
                        h={24}
                        w="full"
                        placeholder="Escreva sobre o Produto..."
                        borderWidth={0}
                        bg={Colors.sub_gray}
                        py={4}
                        _focus={{
                            bg:Colors.sub_gray
                        }} />
                </FormControl>
                <Buttone bg={Colors.green} color={Colors.white}>
                    ENVIAR
                </Buttone>
                </VStack>
            </Box>
            :    <Box mt={6}>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Message size={10} bg={Colors.black} color={Colors.white} children="Faça Login para poder avaliar"/>
                </Pressable>
                </Box>
            }


        </Box>
    )
}

export default Review;
