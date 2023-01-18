import { React } from 'react';
import { Box, Center, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';

export default function OperationCard({ operation, onDeleteOperation }) {
    return (
        <Box rounded="lg" 
            mt='2' mb='2'  ml={operation.amount > 0 ? '20': '2'} mr={operation.amount > 0 ? '0': '20'}
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
                            <Heading color={operation.amount > 0 ? "green.500" : "red.500"} fontWeight="bold">
                                {operation.amount}$ {operation.amount > 0 ? "Added" : "Taken"}
                            </Heading>
                        </Center>
                    </Flex>

                </Center>
                <Flex direction='row' w='100%' h='50%' m='2'>
                    <Box width='90%'>
                        <Text color="gray.400" p="2">
                            Date: {operation.date}
                        </Text>
                    </Box>
                    <Center width='10%' mb='2'>
                        <IconButton
                            onClick={(e) => {e.stopPropagation(); onDeleteOperation(operation.id)}}
                            variant='ghost'
                            right="2"
                            top="2"
                            colorScheme='red'
                            aria-label="Delete"
                            borderRadius={20}
                            icon={<DeleteIcon />}
                        />
                    </Center>
                </Flex>
            </Flex>
        </Box>
    );
}
