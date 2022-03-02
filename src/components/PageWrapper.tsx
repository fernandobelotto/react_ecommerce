import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export default function PageWrapper({ children }: any) {
    return (
        <>
            <Box p={10}>
                <Navbar />
                {children}

            </Box>
        </>
    )
}
