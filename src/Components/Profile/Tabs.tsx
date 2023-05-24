import {Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView,SceneRendererProps, NavigationState} from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";
import { Colors } from "../../color";

type Route = {key:string,title:string}
type State = NavigationState<Route>

export default function Tabs() {
    const [index, setIndex] = useState(0)
    const [routes] = useState<Route[]>([
        {
            key: "first", title: "PROFILE"
        },
        {
            key: "second", title: "ORDERS"
        }
    ])

    const renderScene = SceneMap({
        first: Profile,
        second: Orders
    })

    const renderTabBar = (props:SceneRendererProps & {navigationState:State})  => (
        <TabBar 
            {...props}
            style={styles.tabStyle}
            indicatorStyle={styles.indicator}
            activeColor={Colors.green}
            inactiveColor={Colors.white}
            renderLabel={
                ({ route }) => (
                    <Text style={{...styles.text }}>{route.title}</Text>
                )
            }
        />)


    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
        />
    );
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor:Colors.white,
    },
    indicator:{
        backgroundColor:Colors.green
    },
    text: {
        color:Colors.black,
        fontSize: 13,
        fontWeight: "bold"
    }
})