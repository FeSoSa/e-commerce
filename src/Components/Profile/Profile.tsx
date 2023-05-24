import React from "react";
import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import { Colors } from "../../color";
import Buttone from "../Buttone";

const Inputs = [
  {
    label: "USERNAME",
    type:'text',
  },
  {
    label: "EMAIL",
    type:'text',
  },
  {
    label: "NEW PASSWORD",
    type:'password',
  },
  {
    label: "CONFIRM PASSWORD",
    type:'password',
  },
]

export default function Profile() {
  return (
    <Box h='full' bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i,index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                  {i.label}
                </FormControl.Label>
                <Input
                  bgColor={Colors.sub_gray}
                  borderColor={Colors.green}
                  borderWidth={0.2}
                  py={3}
                  type={i.type}
                  color={Colors.green}
                  fontSize={15}
                  _focus={{
                    bg: Colors.sub_gray,
                    borderWidth:1,
                    borderColor:Colors.green
                  }}
                />
              </FormControl>
            ))
          }
          <Buttone bg={Colors.green} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
