import { React, useState, useDisclosure } from 'react';
import { Center, Spacer } from '@chakra-ui/react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Button, Portal, FormControl, FormLabel, Input, IconButton
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { AddIcon } from '@chakra-ui/icons';

export default function DepositHeader({onAddDeposit}) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    // functions
    const handleAddDeposit = (e) => {
        e.preventDefault();
        setName('');
        setAmount('');
        
        onAddDeposit({ name, amount});
    }


    return (
        <>
            <Center w="100%" h="10%">
                <Spacer />
                <Popover  >
                    <PopoverTrigger>
                        <IconButton colorScheme="green" variant="solid" m={2} size='sm' icon={<AddIcon />}/>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody>
                                <Formik>
                                    <Form onSubmit={handleAddDeposit}>
                                        <FormControl id="name">
                                            <FormLabel>Deposit name</FormLabel>
                                            <Input type="text" value={name} required variant='filled'
                                                onChange={(e) => setName(e.target.value)} />
                                        </FormControl>

                                        <FormControl id="amount">
                                            <FormLabel>Deposit amount</FormLabel>
                                            <Input type="number" value={amount} required variant='filled' min='0'
                                                onChange={(e) => setAmount(e.target.value)} />
                                        </FormControl>
                                        <Center>
                                            <Button type='submit' colorScheme='blue' 
                                                variant='solid' mt={4}  width='100px'>
                                                    Add
                                            </Button>
                                        </Center>
                                    </Form>
                                </Formik>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

            </Center>
        </>
    )
} 