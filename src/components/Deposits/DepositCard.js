import { React } from 'react';
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';


export default function DepositCard({deposit, onDelete, onSelect, isSelected}) {
    return (
        <>
            <Box 
                maxW="sm" 
                borderWidth="0.2px"  
                rounded="lg" 
                overflow="hidden" 
                m={2}
                onClick={onSelect}
                bg={isSelected ? 'gray.900': 'gray.700'}
                _hover={{ boxShadow: "lg", borderColor:'teal'}} position="relative"
                > 
                <Box p="6">
                    <Heading as="h4" size="lg" >
                        {deposit.name}
                    </Heading>
                    <Text color="green.400" fontWeight="bold">
                        ${deposit.amount}
                    </Text>
                    <IconButton
                        onClick={(e) => {e.stopPropagation(); onDelete(deposit.id)}}
                        size='sm'
                        position="absolute" 
                        variant='ghost'
                        right="2"
                        top="2"
                        colorScheme='red'
                        aria-label="Delete"
                        icon={<DeleteIcon />}
                    />
                </Box>
            </Box>

        </>
    )
}
