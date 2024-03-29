import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { bookmarkProduct } from "../store/bookmark.slice";
import { addProductToCart } from "../store/cart.slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { products } from "./ProducListPage";

export default function ProducDetailPage() {
  // const productDetail = {
  //   productId: "1",
  //   name: "Product 1",
  //   description: "Product 1 description",
  //   value: 100,
  //   image:
  //     "https://images.unsplash.com/photo-1616489953149-8b5b0b5b5b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  // };

  const params = useParams();

  const id = params.id;

  const productDetail = products.find((product) => product.id === id);

  const navigate = useNavigate();

  const bookmarkProducts = useAppSelector((state) => state.bookmark.products);

  const dispatch = useAppDispatch();

  const handleBuy = () => {
    dispatch(addProductToCart(productDetail));
    navigate("/cart");
  };

  const handleBookmark = () => {
    if(productDetail) {
      dispatch(bookmarkProduct(productDetail));
    }
  };

  const handleAddCart = () => {
    dispatch(addProductToCart(productDetail));
  };

  const isBookmarked = !!bookmarkProducts.find((product) => product.id === id);

  return (
    <>
      <Flex dir="row" justify="space-evenly" align="center" flexWrap="wrap">
        <Image w={400} src={productDetail?.image} />
        <Box shadow="md" p="5" m="10" h="full" rounded="xl">
          <VStack spacing="5" align="flex-start">
            <Flex dir="row" justify="space-between" align="center" width="full">
              <Heading>{productDetail?.name}</Heading>
              <IconButton
                size="sm"
                color={isBookmarked ? "red.500" : "gray.500"}
                onClick={handleBookmark}
                aria-label="wishlist"
                icon={<FaHeart />}
                colorScheme="gray"
              ></IconButton>
            </Flex>
            <Text fontSize="xl">{productDetail?.description}</Text>
            <Text fontSize="2xl">{productDetail?.price}</Text>
            <HStack alignItems={"flex-start"}>
              <Button onClick={handleBuy} size="md" colorScheme="blue">
                Buy
              </Button>
              <Button onClick={handleAddCart}>Add to cart</Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
