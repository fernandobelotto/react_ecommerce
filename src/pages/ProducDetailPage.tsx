import { Box, Button, Flex, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { Product } from "../model/Product";
import { useAppDispatch, useAppSelector } from "../store";
import { addProduct } from "../store/slices/cart";
import { setProduct } from "../store/slices/product";
import { fetchUserById } from "../store/thunks/user";

export default function ProducDetailPage() {
    const dispatch = useAppDispatch()
    const { productDetail, products } = useAppSelector(state => state.products)
    const { productId } = useParams()

    // TODO: remove above logic after integrate
    useEffect(
        () => {
            const selectedProduct = products.filter((product: Product) => {
                return product.productId === productId
            })
            dispatch(setProduct(selectedProduct[0]));
        }, [productId, products])

    useEffect(() => {
        if (productId) {
            dispatch(fetchUserById(productId))
        };
    }, [productId]);

    function handleBuy() {

    }

    function handleAddCart() {
        dispatch(addProduct(productDetail))
    }

    return <>
        <PageWrapper>
            <Flex dir='row' justify='space-evenly' align='center'>
                <Image w={400} src={productDetail?.image} />
                <Box shadow='md' p='5' m='10' h='full' rounded='xl'>
                    <VStack spacing='5' align='flex-start'>
                        <Flex dir='row' justify='space-between' align='center' width='full'>
                            <Heading>{productDetail?.name}</Heading>
                            <IconButton size='sm' aria-label="wishlist" icon={<FaHeart />} colorScheme='gray'></IconButton>
                        </Flex>
                        <Text fontSize='xl'>{productDetail?.description}</Text>
                        <Text fontSize='2xl'>{productDetail?.value}</Text>
                        <HStack alignItems={'flex-start'}>
                            <Button onClick={handleBuy} size='md' colorScheme='blue'>Buy</Button>
                            <Button onClick={handleAddCart}>Add to cart</Button>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
        </PageWrapper>
    </>;
}
