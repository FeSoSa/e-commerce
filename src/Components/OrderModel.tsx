import React, { useState } from "react";
import { Button, Center, HStack, Modal, VStack, Text, Pressable ,Image} from "native-base";
import Buttone from "./Buttone";
import { Colors } from "../color";
import { useNavigation } from "@react-navigation/native";

export default function OrderModel() {
    const navigation = useNavigation()
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
            <Buttone onPress={() => setShowModel(true)} bg={Colors.green} color={Colors.white} mt={5}>
                SHOW PAYMENT & TOTAL
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
                        <Pressable 
                        w='full' 
                        justifyContent='center' 
                        bg={Colors.orange} 
                        h={45} 
                        onPress={() => setShowModel(false)}
                        rounded={2} overflow={"hidden"}
                        >
                            <Image 
                            source={require("../../assets/Images/paypal_logo.png")} 
                            alt="paypal"
                            resizeMode="contain" w="full" h={34}/>
                        </Pressable>
                        <Button 
                        w={'full'}
                        mt={2}
                        bg={Colors.black} 
                        h={45}
                        _text={{color:Colors.white}}
                        onPress={() => {
                            setShowModel(false),
                            navigation.navigate("Home")
                        }}
                        _pressed={{bg:Colors.black}}
                        >
                            FINISH
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}
