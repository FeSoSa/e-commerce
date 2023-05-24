import React from "react";
import { Box, Heading, ScrollView} from 'native-base'
import { Colors } from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";

function OrderScreen() {
    return (
        <Box bg={Colors.sub_gray} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <OrderInfo
                        title="SHIPPING INFO"
                        sucess
                        subTitle="Best Buy"
                        text="Pay Method PicPay"
                        icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Address:"
                        danger
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
                <OrderModel/>
            </Box>
        </Box>
    )
}

export default OrderScreen;
