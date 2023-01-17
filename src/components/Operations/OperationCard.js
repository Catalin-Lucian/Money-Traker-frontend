import { React } from 'react';
import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function OperationCard({ operation }) {
    return (
        <Box rounded="lg" overflow="hidden"
            mt='2' mb='2'  ml={operation.amount > 0 ? '20': '5'} mr={operation.amount > 0 ? '0': '20'}
            bg={operation.amount > 0 ? "teal.900" : "pink.900"}>

            <Flex direction='column' h="100%" w="100%">
                <Center w='100%' h='50%' ml='2'>
                    <Flex direction='row' h="100%" w="100%" p={2}>
                        <Box w='50%' h='100%' ml='2'>
                            <Heading as="h4" size="lg" color="white" >
                                {operation.name}
                            </Heading>
                        </Box>
                        <Center w='50%' h='100%' ml='2'>
                            <Heading as="h3" color={operation.amount > 0 ? "green.500" : "red.500"} fontWeight="bold">
                                ${operation.amount} {operation.amount > 0 ? "Added" : "Withdrawn"}
                            </Heading>
                        </Center>
                    </Flex>

                </Center>
                <Box w='100%' h='50%'>
                    <Text color="gray.400" p="2">
                        Date: {operation.date}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}
