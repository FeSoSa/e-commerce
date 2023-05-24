import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable, Text } from "native-base";
import { Entypo, AntDesign,FontAwesome,FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../color";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import StackNav from "./StackNav";

interface customTabProps {
    children: React.ReactNode, onPress():void
}

const Tab = createBottomTabNavigator()
const CustomTab = ({ children, onPress }: customTabProps) => (
<Pressable onPress={onPress} h={70} w={70} rounded='full' bg={Colors.green} top={-30} shadow={2}>
    {children}
</Pressable>)

export default function BottomNav() {
    return (
        <Tab.Navigator
            backBehavior='main'
            initialRouteName="Main"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tab },
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen name="Main" component={StackNav} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ? (
                            <Entypo name="home" size={24} color={Colors.green} />
                        ) : (
                            <AntDesign name="home" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }} />
            {/* Cart */}
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarButton:(props) => <CustomTab {...props} />,
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ? (
                            <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
                        ) : (
                            <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.white} />
                        )}
                    </Center>
                )
            }} />
            {/* Profile */}
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} color={Colors.green} />
                        ) : (
                            <AntDesign name="user" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
        
    }
})