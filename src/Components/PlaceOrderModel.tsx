import React, { useState } from "react";
import { Button, Center, HStack, Modal, VStack, Text } from "native-base";
import Buttone from "./Buttone";
import { Colors } from "../color";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavParamsList } from "../Navigations/StackNav";

type PlaceOrderScreenProp = NativeStackNavigationProp<StackNavParamsList,'PlaceOrder'>

export default function PlaceOrderModel() {
    const navigation = useNavigation<PlaceOrderScreenProp>()
    const OrdersInfos = [
        {
            title: "Products",
            price: 125.77,
            color: "black"
        },
        {
            title: "Shipping",
            price: 34.00,
            color: "black"
        }, {
            title: "Tax",
            price: 23.34,
            color: "black"
        }, {
            title: "Total Amount",
            price: 3458.00,
            color: "green"
        }
    ]

    const [showModel, setShowModel] = useState(false)
    return (
        <Center>
            <Buttone onPress={() => setShowModel(true)} bg={Colors.black} color={Colors.white} mt={5}>
                SHOW TOTAL
            </Buttone>
            <Modal isOpen={showModel} onClose={() => setShowModel(false)} size='lg'>
                <Modal.Content maxWidth='350'>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfos.map((i, index) => (
                                <HStack key={index} alignItems="center" justifyContent='space-between'>
                                    <Text fontWeight="medium">{i.title}</Text>
                                    <Text
                                        color={i.color === "green" ? Colors.green : Colors.black}
                                        bold
                                        fontSize={14}
                                    >
                                        ${i.price}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                        flex={1} 
                        bg={Colors.green} 
                        h={45}
                        _text={{color:Colors.white}}
                        onPress={() => {
                            setShowModel(false),
                            navigation.navigate("Order")
                        }}
                        _pressed={{bg:Colors.green}}
                        >
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}
