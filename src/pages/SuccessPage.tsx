import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function SuccessPage() {
    return (
        <>
            <PageWrapper>
                <Heading>Success</Heading>
                <Link to='/buys'>Minhas compras</Link>
            </PageWrapper>
        </>
    )
}
