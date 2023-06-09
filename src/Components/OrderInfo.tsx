import { Center, Heading, Text } from "native-base";
import React, { ReactElement } from "react";
import { Colors } from "../color";

interface OderInfoProps{
    icon:ReactElement,title:string,subTitle:string,text:string,sucess?:boolean,danger?:boolean
}

export default function OrderInfo({ icon, title, subTitle, text, sucess, danger }:OderInfoProps) {
    return (
        <Center bg={Colors.white} w={200} py={2} rounded={10} shadow={4} mb={2} ml={5} mr={1} px={4}>
            <Center bg={Colors.green} w={60} h={60} rounded="full">
                {icon}
            </Center>
            <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={Colors.black}>
                {title}
            </Heading>
            <Text fontSize={13} color={Colors.black}>
                {subTitle}
            </Text>
            <Text fontSize={13} textAlign="center" italic color={Colors.black}>
                {text}
            </Text>
            {/* Status */}
            {sucess && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.green}>
                    <Text fontSize={12} color={Colors.white}>
                        Paid on May 12 2023
                    </Text>
                </Center>
            )}
            {danger && (
                <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
                    <Text fontSize={12} color={Colors.white}>
                        Not Deliver
                    </Text>
                </Center>
            )}
        </Center>
    );
}
