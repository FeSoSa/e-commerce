import React from "react";
import { Box, Heading, ScrollView} from 'native-base'
import { Colors } from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";

function PlaceOrderScreen() {
    return (
        <Box bg={Colors.sub_gray} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <OrderInfo
                        title="CUSTOMER"
                        subTitle="Admin Doe"
                        text="admin@exemple.com"
                        icon={<FontAwesome name="user" size={30} color={Colors.white} />}
                        danger={false}
                        sucess={true}
                    />
                    <OrderInfo
                        title="SHIPPING INFO"
                        subTitle="Best Buy"
                        text="Pay Method PicPay"
                        icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Address:"
                        text="Av.Paulista, São Paulo, SP - 275 "
                        icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
                    />
                </ScrollView>
            </Box>
            {/* Order Itens */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItem/>
                {/* Total */}
                <PlaceOrderModel/>
            </Box>
        </Box>
    )
}

export default PlaceOrderScreen;
