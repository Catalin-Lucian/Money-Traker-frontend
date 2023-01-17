import {
    Flex, Center, Text, Spacer, Divider
} from '@chakra-ui/react';
import { React, useEffect, useState } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Deposit from './Deposits/Deposit';
import axiosInstance from '../utils/jwt.interceptor';
import Operation from './Operations/Operation';



export default function Home() {
    const [deposits, setDeposits] = useState([])
    const [operations, setOperations] = useState([])

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [nr_per_page, setNrPerPage] = useState(10)


    // functions
    const handleDepositDelete = (id) => {
        console.log("delete "+id);
        axiosInstance.delete(`/deposits/${id}`).then((res) => {
            setDeposits(deposits.filter((deposit) => deposit.id !== id))
        })
    }

    const handleDepositSelect = (id) => {
        console.log('select '+id)
        

    }

    const handleAddDeposit = (deposit) => {
        axiosInstance.post('/deposits', deposit).then((res) => {
            setDeposits([...deposits, res.data])
        })
    }




     // useEffects
     useEffect(() => {
        axiosInstance.get('/deposits').then((res) =>{
            setDeposits(res.data);
        })
    }, [])

    useEffect(() => {
        axiosInstance.get('/operations',{page, nr_per_page}).then((res) =>{
            setOperations(res.data);
        })
    }, [])



    return (
        // 3 columns: 100px, 1/3, 2/3 using Vstack am grid
        <Flex direction="column" h="100vh">

            <Flex direction="row" h="80px" bg="gray.100">
                <Center w="100px" h="80px" bg="green.200">
                    <Text>Logo</Text>
                </Center>
                <Spacer />
                <Center w="100px" h="80px" bg="green.200">
                    <ColorModeSwitcher />
                </Center>
            </Flex>

            <Flex direction="row" h="100%">

                <Center w="100px" h="100%" bg="blue.300">
                    <Text>Side</Text>
                </Center>

                <Center w="100%" h="100%" >
                    {/*2 colums: 30%, 70%  using flex*/}
                    <Flex direction="row" h="100%" w="100%">

                        <Deposit 
                            deposits={deposits}
                            onDeleteDeposit={handleDepositDelete}
                            onSelectDeposit={handleDepositSelect}
                            onAddDeposit={handleAddDeposit} />
                        <Divider orientation='vertical' />
                        <Operation
                            operations={operations} />
                    </Flex>

                </Center>
            </Flex>
        </Flex>


    )
}