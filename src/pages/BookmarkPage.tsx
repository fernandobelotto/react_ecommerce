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
import { useAppDispatch, useAppSelector } from "../store/store";

export default function BookmarkPage() {
  const bookmarks = useAppSelector((state) => state.bookmark.products);

  const dispatch = useAppDispatch();

  const handleRemoveFromBookmark = (id: string) => {
    dispatch(removeBookmark(id));
  };

  return (
    <>
      <Box mb="10">
        <Heading>Bookmarks</Heading>
        <Text>Itens bookmarked</Text>
      </Box>

      <SimpleGrid columns={6} spacing={5} minChildWidth="200px">
        {bookmarks.map((bookmark) => {
          return (
            <Box
              key={bookmark.id}
              rounded="md"
              background={useColorModeValue("gray.100", "gray.700")}
              shadow="md"
              p="2"
            >
              <Heading size="md">{bookmark.name}</Heading>
              <Text>{bookmark.description}</Text>
              <IconButton
                aria-label="delete"
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                onClick={() => handleRemoveFromBookmark(bookmark.id)}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
