import {React} from 'react';
import {Center, Box} from "@chakra-ui/react";
import OperationCard from './OperationCard';

export default function OperationDisplay({ operations, onDeleteOperation }) {

    return (
        <Center w="100%" h="90%" >
             <Box
                w="100%"
                h="100%"
                overflowY="scroll"
                overflowX="hidden"
                css={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#888',
                        borderRadius: '24px',
                    },
                }}
            >
                {operations.reverse().map((operation) => (
                    <OperationCard  key={operation.id} operation={operation} onDeleteOperation={onDeleteOperation}/>
                ))}
            </Box>
        </Center>
    )
}