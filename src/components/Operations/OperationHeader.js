import { React } from 'react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Button, Portal, FormControl, FormLabel, Input, IconButton,
    Center, Spacer
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { AddIcon } from '@chakra-ui/icons';


export default function OperationHeader({ deposits }) {
    


    return (
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
                                    {/* <Form onSubmit={handleAddDeposit}>
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
                                    </Form> */}
                                </Formik>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
        </Center>
    )
}