import React from "react";
import { Button } from "native-base";

interface ButtoneProps {
  mt?:number,
  bg?:string,
  color?:string,
  children?:React.ReactNode
  onPress?:any
}

function Buttone({mt,bg,color,children,onPress}:ButtoneProps) {
  return <Button w="full" mt={mt} rounded="full" bg={bg} _text={{
    color:color,fontWeight:'bold'
  }}
  _pressed={{bg:bg}}
  onPress={onPress}>
    {children}
  </Button>
}

export default Buttone;
