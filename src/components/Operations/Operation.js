import { React } from 'react';
import { Center, Flex, Text } from "@chakra-ui/react";
import OperationHeader from './OperationHeader';
import OperationDisplay from './OperationDisplay';

export default function Operation({ operations }) {


    return (
        <Center w="70%" h="100%">
            <Flex direction="column" h="100%" w="100%">
                <OperationHeader />
                <OperationDisplay operations={operations}/>
            </Flex>
        </Center>
    )
}