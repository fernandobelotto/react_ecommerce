import { Button, Heading, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <Flex dir='row' justify='space-between' mb='10'>
            <Heading>React Ecommerce</Heading>
            <HStack spacing='5'>
                <Button as={Link} to='/'>Products</Button>
                <Button as={Link} to='/cart'>View Cart</Button>
                <Button as={Link} to='/checkout'>Go to checkout</Button>
            </HStack>
        </Flex>
    );
}
