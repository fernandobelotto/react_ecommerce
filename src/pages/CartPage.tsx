import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function CartPage() {
  return (
    <>
      <Box mb="10">
        <Heading>Cart</Heading>
        <Text>Itens in cart</Text>
      </Box>

      <SimpleGrid columns={6} spacing={5}></SimpleGrid>
    </>
  );
}
