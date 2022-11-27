import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function BookmarkPage() {
  return (
    <>
      <Box mb="10">
        <Heading>Bookmarks</Heading>
        <Text>Itens bookmarked</Text>
      </Box>

      <SimpleGrid columns={6} spacing={5}></SimpleGrid>
    </>
  );
}
