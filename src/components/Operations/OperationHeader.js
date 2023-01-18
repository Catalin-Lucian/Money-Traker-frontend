import { React,useState } from 'react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Button, Portal, FormControl, FormLabel, Input, IconButton,
    Center, Spacer ,Select
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import Pagination from '../Pagination';



export default function OperationHeader({ deposits, page, totalPages,  onAddOperation, onChangePage }) {
    const [deposit_id, setDepositId] = useState('')
    const [amount, setAmount] = useState('')


    const handleAddOperation = (e) => {
        e.preventDefault()
        
        setAmount('')
        setDepositId('')
        onAddOperation({deposit_id, amount})
    }

    return (
        <Center w="100%" h="10%">
            <Pagination 
                totalPages={totalPages}
                page={page}
                onChangePage={onChangePage}
            />
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
                                    <Form onSubmit={handleAddOperation}>
                                        <FormControl id="name">
                                            <FormLabel>Deposit name</FormLabel>
                                            <Select placeholder="Select deposit" value={deposit_id} required variant='filled' 
                                                onChange={e => setDepositId(e.target.value)}>
                                                {deposits.map((deposit) => (
                                                    <option key={deposit.id} value={deposit.id}>{deposit.name}</option>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <FormControl id="amount">
                                            <FormLabel>Deposit amount</FormLabel>
                                            <Input type="number" value={amount} required variant='filled'
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
    )
}