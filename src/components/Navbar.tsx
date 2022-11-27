import { Button, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiBookmark, FiShoppingBag } from "react-icons/fi";

export function Navbar() {
  return (
    <Flex
      dir="row"
      justify="space-between"
      mb="10"
      flexWrap="wrap"
      alignItems="flex-end"
      gap="5"
    >
      <Heading>React Ecommerce</Heading>
      <Flex gap="2" flexWrap="wrap">
        <Button size="xs" as={Link} to="/" leftIcon={<FiShoppingBag />}>
          Products
        </Button>
        <Button size="xs" as={Link} to="/cart" leftIcon={<FiShoppingCart />}>
          View Cart
        </Button>
        {/* <Button size='xs' as={Link} to="/checkout" >
          Checkout
        </Button> */}
        <Button size="xs" as={Link} to="/bookmark" leftIcon={<FiBookmark />}>
          Bookmark
        </Button>
      </Flex>
    </Flex>
  );
}
