import { Box, Button, Heading, SimpleGrid, Text, Image, Flex, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { formatValue } from '../formatters/formatValue';
import { Product } from '../model/Product'
import { useAppDispatch, useAppSelector } from '../store'
import { Navbar } from '../components/Navbar';
import PageWrapper from '../components/PageWrapper';
import { addProduct } from '../store/slices/cart';

export default function ProducListPage() {

    const { products } = useAppSelector(state => state.products)

    const dispatch = useAppDispatch()

    const handleAddProduct = (product: Product) => {
        dispatch(addProduct(product))

    }
    const handleBuyProduct = (id: string) => {
        console.log('id', id)
    }

    return (
        <>
            <PageWrapper>
                <Heading>Product List</Heading>
                <Text mb={10}>Search products for you</Text>
                <SimpleGrid columns={6} spacing={5} >
                    {products.map((product: Product) => {
                        return (
                            <>
                                <Box p='5' border='1px solid' borderColor={'gray.300'} rounded='lg' shadow='md'>
                                    <VStack spacing='5'>
                                        <Link to={`/${product.productId}`}>
                                            <Image h={200} src={product.image} />
                                            <Heading fontSize='xl'>{product.name}</Heading>
                                        </Link>
                                        <Text>{formatValue(product.value)}</Text>
                                    </VStack>
                                </Box>
                            </>
                        )
                    })}
                </SimpleGrid>
            </PageWrapper>
        </>
    )
}
