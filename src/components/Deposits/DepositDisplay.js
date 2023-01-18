import { React, useState, useEffect } from 'react';
import { Box, Center } from '@chakra-ui/react';
import DepositCard from './DepositCard';
import axiosInstance from '../../utils/jwt.interceptor';

export default function DepositDisplay({ deposits, onDeleteDeposit, onSelectDeposit }) {
    const [selectedDeposits, setSelectedDeposits] = useState([]);


    // frunctions 
    const handleSelect = (id) => {
        if (selectedDeposits.includes(id)) {
            setSelectedDeposits(selectedDeposits.filter((d) => d !== id));
            onSelectDeposit(-1);
        } else {
            setSelectedDeposits([id]);
            onSelectDeposit(id);
        }
    };



    return (
        <Center w="100%" h="90%">
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
                {deposits.map((deposit) => (
                    <DepositCard
                        key={deposit.id}
                        deposit={deposit}
                        onDelete={onDeleteDeposit}
                        onSelect={() => handleSelect(deposit.id)}
                        isSelected={selectedDeposits.includes(deposit.id)} />
                ))}
            </Box>
        </Center>
    )
}
