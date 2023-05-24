import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { Colors } from "../../color";

export default function Orders() {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack space={4} justifyContent="space-between" alignItems="center" bg={Colors.dark_gray} py={5} px={2}>
            <Text fontSize={9} color={Colors.white} isTruncated>
              61846846818
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              May 19 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.green}
              _text={{
                color: Colors.white
              }}
              _pressed={{
                bg: Colors.green
              }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack space={4} justifyContent="space-between" alignItems="center" py={5} px={2}>
            <Text fontSize={9} color={Colors.red} isTruncated>
              61846846818
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              May 23 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white
              }}
              _pressed={{
                bg: Colors.green
              }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
