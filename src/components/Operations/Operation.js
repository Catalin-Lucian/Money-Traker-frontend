import { React } from 'react';
import { Center, Flex } from "@chakra-ui/react";
import OperationHeader from './OperationHeader';
import OperationDisplay from './OperationDisplay';

export default function Operation({ operations, deposits, page, totalPages, onAddOperation, onDeleteOperation, onChangePage}) {


    return (
        <Center w="70%" h="100%">
            <Flex direction="column" h="100%" w="100%">
                <OperationHeader 
                    deposits={deposits}
                    page={page}
                    totalPages={totalPages}
                    onAddOperation={onAddOperation}
                    onChangePage={onChangePage} />
                <OperationDisplay 
                    operations={operations}
                    onDeleteOperation={onDeleteOperation}/>
            </Flex>
        </Center>
    )
}