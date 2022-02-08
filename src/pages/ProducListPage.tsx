import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { formatValue } from '../formatters/formatValue';
import { Product } from '../model/Product'
import { useAppSelector } from '../store'
export default function ProducListPage() {

    const { products } = useAppSelector(state => state.products)

    return (
        <>
            <Box p='10'>

                <Heading mb='5'>Product List</Heading>
                <SimpleGrid columns={6} spacing={5} >

                    {products.map((product: Product) => {
                        return (
                            <>
                                <Link to={`/${product.productId}`}>
                                    <Box p='5' border='1px solid' borderColor={'gray.300'}>
                                        <Text>{product.name}</Text>
                                        <Text>{formatValue(product.value)}</Text>
                                    </Box>
                                </Link>
                            </>
                        )
                    })}
                </SimpleGrid>
            </Box>

        </>
    )
}
