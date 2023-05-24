import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import ShippingScreen from "../Screens/ShippingScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
import { ItemProps } from "../Interfaces/IProducts";

export type StackNavParamsList = {
  Home:undefined,
  Single:ItemProps,
  Shipping:undefined,
  Checkout:undefined,
  PlaceOrder:undefined,
  Cart:undefined,
  Login:undefined,
  Bottom:undefined,
  Register:undefined,
  Payment:undefined,
  Order:undefined
}

const Stack = createNativeStackNavigator<StackNavParamsList>()

export default function StackNav() {
  return (
    <Stack.Navigator 
    initialRouteName='Home' 
    screenOptions={{headerShown:false,}}
    >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Single' component={SingleProductScreen}/>
        <Stack.Screen name='Shipping' component={ShippingScreen}/>
        <Stack.Screen name='Checkout' component={PaymentScreen}/>
        <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen}/>

    </Stack.Navigator>
  );
}
