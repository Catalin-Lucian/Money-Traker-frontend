import {
    Flex, Text, Button
} from '@chakra-ui/react';
import React from 'react';

export default function Pagination ({page, totalPages, OnChangePage}) {

    const handlePreviousPage = () => {
        if (page > 1) {
            OnChangePage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            OnChangePage(page + 1);
            console.log(page);
        }
    };

    return (
        <Flex align="center" justify="center" mt={2} ml={5}>
            <Button onClick={handlePreviousPage} mr={2} size='sm' variant='outline'>Previous page</Button>
            <Text mr={2} as='b' fontSize='2xl' >{page} / {totalPages}</Text>
            <Button onClick={handleNextPage} size='sm' variant='outline'>Next page</Button>
        </Flex>
    );
};
