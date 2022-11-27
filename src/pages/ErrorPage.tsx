import { Button, Center, Heading, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
      <Center h="100vh">
        <VStack spacing={2}>
          <Heading>404 Not Found</Heading>
          <Button as={Link} to="/">
            Go to Home
          </Button>
        </VStack>
      </Center>
    </>
  );
}
