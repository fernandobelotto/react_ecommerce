import { ChakraProvider, theme } from "@chakra-ui/react"
import Routes from "./pages/Routes"

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  )
}

