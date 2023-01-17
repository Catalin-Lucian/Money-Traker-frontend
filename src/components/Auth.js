import { React, useState } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Form, Formik } from 'formik';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/jwt.interceptor";

import {
    Box, Grid, Text, VStack,
    Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Input, Button, Heading, Highlight
} from "@chakra-ui/react";

export default function Auth() {
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');

    const [messageText, setMessageText] = useState('');
    const [messageColor, setMessageColor] = useState('green');


    // ------- functions -------
    function handleRegister(e) {
        e.preventDefault();
        axiosInstance.post('/auth/register', {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            confirmPassword: registerPasswordConfirm
        }).then((res) => {
            resetInput();
            setMessageText('register successfuly');
            setMessageColor('green');

        }).catch((err) => {
            setMessageText(err.response.data.detail);
            setMessageColor('red');
        });
    }

    function handleLogin(e) {
        e.preventDefault();
        axiosInstance.post('/auth/login', {
            email: loginEmail,
            password: loginPassword
        }).then((res) => {
            setMessageText('login success');
            setMessageColor('green');

            localStorage.setItem('token', res.data?.token);

            navigate('/');
        }
        ).catch((err) => {
            setMessageText(err.response.data.detail);
            setMessageColor('red');
        });
    }

    function resetInput() {
        setMessageText('');
        setMessageColor('green');

        setLoginEmail('');
        setLoginPassword('');

        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterPasswordConfirm('');
    }



    return (
        <div>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="50vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8} >
                        <Heading lineHeight='tall'>
                            <Highlight
                                query='Money Tracker'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}
                            >
                                Welcome to Money Tracker
                            </Highlight>
                        </Heading>
                        <Tabs isFitted variant='enclosed' onChange={idx => resetInput()}>
                            <TabList mb='1em'>
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Formik>
                                        <Form onSubmit={handleLogin}>
                                            <FormControl id="loginEmail">
                                                <FormLabel>Email address</FormLabel>
                                                <Input type="email" value={loginEmail} required variant='filled'
                                                    onChange={(e) => setLoginEmail(e.target.value)} />
                                            </FormControl>

                                            <FormControl id="loginPassword">
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" value={loginPassword} required variant='filled'
                                                    onChange={(e) => setLoginPassword(e.target.value)} />
                                            </FormControl>

                                            <Button type='submit' colorScheme='blue' mt={4}>Login</Button>
                                        </Form>
                                    </Formik>
                                </TabPanel>
                                <TabPanel>
                                    <Formik>
                                        <Form onSubmit={handleRegister}>
                                            <FormControl id="name">
                                                <FormLabel>Name</FormLabel>
                                                <Input type="text" value={registerName} required variant='filled'
                                                    onChange={(e) => setRegisterName(e.target.value)} />
                                            </FormControl>

                                            <FormControl id="registerEmail">
                                                <FormLabel>Email address</FormLabel>
                                                <Input type="email" value={registerEmail} required variant='filled'
                                                    onChange={(e) => setRegisterEmail(e.target.value)} />
                                            </FormControl>

                                            <FormControl id="registerPassword">
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" value={registerPassword} required variant='filled'
                                                    onChange={(e) => setRegisterPassword(e.target.value)} />
                                            </FormControl>

                                            <FormControl id="registerPasswordConfirm">
                                                <FormLabel>Confirm Password</FormLabel>
                                                <Input type="password" value={registerPasswordConfirm} required variant='filled'
                                                    onChange={(e) => setRegisterPasswordConfirm(e.target.value)} />
                                            </FormControl>

                                            <Button type='submit' colorScheme='blue' mt={4}>Register</Button>
                                        </Form>
                                    </Formik>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Text color={messageColor} mt='10'>{messageText}</Text>
                    </VStack>
                </Grid>
            </Box>
        </div>
    )
}