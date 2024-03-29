import {
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { formatValue } from "../formatters/formatValue";
import { Product } from "../model/Product";

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    description: "Product 1 Description",
    image: "https://picsum.photos/500/300",
  },
  {
    id: "2",
    name: "Product 2",
    price: 200,
    description: "Product 2 Description",
    image: "https://picsum.photos/500/500",
  },
  {
    id: "3",
    name: "Product 3",
    price: 200,
    description: "Product 3 Description",
    image: "https://picsum.photos/500/400",
  },
];

export default function ProducListPage() {
  return (
    <>
      <Heading>Product List</Heading>
      <Text mb={10}>Search products for you</Text>
      <SimpleGrid columns={6} spacing={5} minChildWidth="200px">
        {products.map((product) => {
          return (
            <>
              <Link as={ReactLink} to={`products/${product.id}`}>
                <VStack
                  key={product.id}
                  border="1px solid"
                  borderColor={"gray.500"}
                  rounded="md"
                  shadow="md"
                  overflow="hidden"
                  spacing={0}
                >
                  <Image
                    objectFit="cover"
                    w="full"
                    h={50}
                    src={product.image}
                  />
                  <VStack spacing={1} alignItems="flex-start" w="full" p={2}>
                    <Text fontWeight="bold">{product.name}</Text>
                    <Text>{formatValue(product.price)}</Text>
                  </VStack>
                </VStack>
              </Link>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
}
