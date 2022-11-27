import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <>
      <Heading>Success</Heading>
      <Link to="/buys">Minhas compras</Link>
    </>
  );
}
