import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setVisibility, Visibility } from "../visibility.slice";

export default function FilterMenu() {
  const dispatch = useAppDispatch();

  const visibility = useAppSelector((state) => state.visibility.visibility);

  const handleChangeVisibility = (e: string) => {
    dispatch(setVisibility(e as Visibility));
  };

  return (
    <>
      <RadioGroup
        onChange={(e) => handleChangeVisibility(e as Visibility)}
        value={visibility}
      >
        <Stack direction="row">
          <Radio value="all">all</Radio>
          <Radio value="todo">todo</Radio>
          <Radio value="done">done</Radio>
        </Stack>
      </RadioGroup>

      {/* <Menu closeOnSelect={true} size="sm">
        <MenuButton as={Button} size="xs">
          filters
        </MenuButton>
        <MenuList minWidth="10px" p={1}>
          <MenuOptionGroup
            
            defaultValue="all"
            value={visibility}
            title="Status"
            type="radio"
          >
            <MenuItemOption value="all">All</MenuItemOption>
            <MenuItemOption value="todo">Todo</MenuItemOption>
            <MenuItemOption value="done">Completed</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
        </MenuList>
      </Menu> */}
    </>
  );
}
