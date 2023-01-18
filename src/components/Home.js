import {
    Flex, Center, Box, Spacer, Divider, Heading,IconButton
} from '@chakra-ui/react';
import { React, useEffect, useState } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Deposit from './Deposits/Deposit';
import axiosInstance from '../utils/jwt.interceptor';
import Operation from './Operations/Operation';
import { LockIcon } from '@chakra-ui/icons';



export default function Home() {
    const [deposits, setDeposits] = useState([])
    const [operations, setOperations] = useState([])

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [perPage, setPerPage] = useState(10)

    const [selectedDeposit, setSelectedDeposit] = useState(-1)
    const [total, setTotal] = useState(0)


    // functions
    const handleDepositDelete = (id) => {
        console.log("delete "+id);
        axiosInstance.delete(`/deposits/${id}`).then((res) => {
            setDeposits(deposits.filter((deposit) => deposit.id !== id));
            setSelectedDeposit(-1);
            getOperations();
            getTotal();
        })
    }

    const handleDepositSelect = (id) => {
       setSelectedDeposit(id);
       getOperations(id, page);
    }

    const handleAddDeposit = (deposit) => {
        axiosInstance.post('/deposits', deposit).then((res) => {
            setDeposits([...deposits, res.data]);
            getTotal();
        })
    }

    const handleAddOperation = (operation) => {
        axiosInstance.post('/operations', operation).then((res) => {
            getOperations(selectedDeposit, page);
            getDeposits();
            getTotal();
        })
    }

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const handlePageChange = (page) => {
        console.log("home change page",page);
        setPage(page);
        getOperations(selectedDeposit, page);
    }

    const handleDeleteOperation = (id) => {
        axiosInstance.delete(`/operations/${id}`).then((res) => {
            getOperations(selectedDeposit, page);
            getDeposits();
        })
    }

    const getOperations = async (depositId = -1, page = 1) => {
        if (depositId === -1) {
            axiosInstance.get('/operations',{params: {page, perPage}}).then((res) =>{
                setOperations(res.data.operations);
                setTotalPages(res.data.nrPages);
                setPage(1);
            })
        }
        else{
            axiosInstance.get(`/operations/${depositId}`,{params: {page, perPage}}).then((res) =>{
                setOperations(res.data.operations);
                setTotalPages(res.data.nrPages);
                setPage(1);
            })
        }
    }
    
    const getDeposits = async () => {
        axiosInstance.get('/deposits').then((res) =>{
            setDeposits(res.data);
        })
    }

    const getTotal = () => {
        let total = 0;
        deposits.forEach((deposit) => {
            total += deposit.amount;
        })
        setTotal(total);
    }

   



    // useEffects
    useEffect(() => {
        getDeposits()
    }, [])

    useEffect(() => {
        getOperations()
    }, [])

    useEffect(() => {
        getTotal()
    }, [deposits])


    return (
        // 3 columns: 100px, 1/3, 2/3 using Vstack am grid
        <Flex direction="column" h="100vh" overflow='hidden'>

            <Flex direction="row" h="80px" bg='gray.700'>
                <Center ml='10'>
                    <Heading>Money Traker</Heading>
                </Center>
                <Spacer />
                <Center ml='10'>
                    <Heading color='green.200'>TOTAL BALANCE : {total}$ </Heading>
                </Center>
                <Spacer />
                <Center w="100px" h="80px">
                    <ColorModeSwitcher />
                </Center>
            </Flex>

            <Flex direction="row" h="100%" overflow='hidden'>

                <Center direction="row" w="50px" h="100%" ml='4'>
                    <Spacer />
                    <IconButton
                                onClick={(e) => {e.stopPropagation(); handleLogOut()}}
                                variant='outline'
                                position='absolute'
                                left="2"
                                bottom="2"
                                colorScheme='red'
                                aria-label="Logout"
                                borderRadius={20}
                                icon={<LockIcon />}
                            />
                </Center>

                <Center w="100%" h="100%" >
                    {/*2 colums: 30%, 70%  using flex*/}
                    <Flex direction="row" h="100%" w="100%" overflow='hidden'>

                        <Deposit 
                            deposits={deposits}
                            onDeleteDeposit={handleDepositDelete}
                            onSelectDeposit={handleDepositSelect}
                            onAddDeposit={handleAddDeposit} />
                        <Divider orientation='vertical' />
                        <Operation
                            operations={operations}
                            deposits={deposits}
                            onAddOperation={handleAddOperation}
                            onDeleteOperation={handleDeleteOperation} 
                            page = {page}
                            totalPages = {totalPages}
                            onChangePage={handlePageChange} />
                    </Flex>

                </Center>
            </Flex>
        </Flex>


    )
}