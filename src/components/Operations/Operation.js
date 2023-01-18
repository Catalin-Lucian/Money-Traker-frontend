import { React } from 'react';
import { Center, Flex } from "@chakra-ui/react";
import OperationHeader from './OperationHeader';
import OperationDisplay from './OperationDisplay';

export default function Operation({ operations, deposits, onAddOperation, onDeleteOperation}) {


    return (
        <Center w="70%" h="100%">
            <Flex direction="column" h="100%" w="100%">
                <OperationHeader 
                    deposits={deposits}
                    onAddOperation={onAddOperation} />
                <OperationDisplay 
                    operations={operations}
                    onDeleteOperation={onDeleteOperation}/>
            </Flex>
        </Center>
    )
}