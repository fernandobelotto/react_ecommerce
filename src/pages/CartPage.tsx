import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Image, Link, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import { formatValue } from "../formatters/formatValue";
import { Product } from "../model/Product";
import { useAppDispatch, useAppSelector } from "../store";
import { removeProduct } from "../store/slices/cart";

export default function CartPage() {

    const { cart } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    function handleAddProduct(id: string) {
        console.log(id)
    }

    function handleRemoveProduct(id: string) {
        dispatch(removeProduct(id))
    }

    return <>
        <PageWrapper>
            <Box mb='10'>

                <Heading>Cart</Heading>
                <Text>Itens in cart</Text>
            </Box>

            <SimpleGrid columns={6} spacing={5} >
                {cart.map((product: Product) => {
                    return <>
                        <Box p='5' border='1px solid' borderColor={'gray.300'} rounded='lg' shadow='md'>
                            <Flex justify='space-between' flexDir={'column'} h='full'>
                                <Image h={100} objectFit='contain' src={product.image} />

                                <Heading fontSize='md'>{product.name}</Heading>
                                <Text>{formatValue(product.value)}</Text>

                                <Flex dir='row' justify='space-between' w='full'>
                                    <NumberInput size='md' maxW={24} defaultValue={1} min={1}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <IconButton
                                        onClick={() => handleRemoveProduct(product.productId)}
                                        aria-label='remove'
                                        icon={<DeleteIcon />} />
                                </Flex>
                            </Flex>
                        </Box>
                    </>
                })}
            </SimpleGrid>
        </PageWrapper>
    </>;
}
