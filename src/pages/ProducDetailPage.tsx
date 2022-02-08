import { Box, Button, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchUserById } from "../store/thunks/user";

export default function ProducDetailPage() {
    const dispatch = useAppDispatch()
    const { productDetail } = useAppSelector(state => state.products)
    const { productId } = useParams()

    useEffect(() => {
        if (productId) dispatch(fetchUserById(productId));
    }, [productId]);


    // if (!productDetail) return (
    //     <>
    //         <Box p='10'>
    //             <Link to='/'>Go back</Link>
    //             <Heading>Detalhe de produto</Heading>
    //             <Skeleton>
    //                 <Heading>Placeholder</Heading>
    //                 <Text>description of product</Text>
    //             </Skeleton>
    //         </Box>

    //     </>
    // )

    return <>
        <Box p={5}>
            <Link to='/'>Go back</Link>
            <Heading>Product Detail</Heading>
            <Text>{productDetail?.name}</Text>

            <Button colorScheme='teal'>Comprar</Button>
        </Box>
    </>;
}
