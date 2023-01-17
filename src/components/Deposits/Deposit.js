import { React } from 'react';
import { Center, Flex, Spacer } from '@chakra-ui/react';

import DepositHeader from './DepositHeader';
import DepositDisplay from './DepositDisplay';


export default function Deposit({ deposits, onDeleteDeposit, onSelectDeposit, onAddDeposit}) {


    return (
        <>
            <Center w="30%" h="100%">
                <Flex direction="column" h="100%" w="100%" >
                    <DepositHeader onAddDeposit={onAddDeposit} />
                    <DepositDisplay 
                        deposits={deposits}
                        onDeleteDeposit={onDeleteDeposit}
                        onSelectDeposit={onSelectDeposit}/>
                </Flex>
            </Center>
        </>
    )
}