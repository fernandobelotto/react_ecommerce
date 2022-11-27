import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Navbar } from "../components/Navbar";

const App = () => {
  return (
    <>
      <ColorModeSwitcher />
      <Container maxW="container.lg">
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
};

export default App;
