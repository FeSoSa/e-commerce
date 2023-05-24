import React from "react";
import { Center,Text } from "native-base";

interface MessageProps{
    bg:string,color:string,children:React.ReactNode,size:number,bold?:string
}

export default function Message({bg,bold,color,children,size}:MessageProps) {
  return (
    <Center bg={bg} p={4} rounded={5}>
        <Text fontWeight={bold} color={color} fontSize={size}>{children}</Text>
    </Center>
  );
}
