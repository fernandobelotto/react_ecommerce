import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { removeBookmark } from "../store/bookmark.slice";
import { removeProductFromCart } from "../store/cart.slice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function CartPage() {
  const products = useAppSelector((state) => state.cart.products);

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <>
      <Box mb="10">
        <Heading>Cart</Heading>
        <Text>Itens in cart</Text>
      </Box>

      <SimpleGrid columns={6} spacing={5} minChildWidth="200px">
        {products.map((product) => {
          return (
            <Box
              key={product.id}
              background={useColorModeValue("gray.100", "gray.700")}
              rounded="md"
              shadow="md"
              p="2"
            >
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <IconButton
                aria-label="delete"
                colorScheme="red"
                icon={<DeleteIcon />}
                size="sm"
                onClick={() => handleRemoveFromCart(product.id)}
              ></IconButton>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
