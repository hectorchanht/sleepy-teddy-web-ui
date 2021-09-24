import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  // fonts: {
  //   body: ['Poppins', "Roboto Mono", 'sans-serif']
  // },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        borderRadius: 35,
        fontWeight: "bold", // Normally, it is "semibold"
        h: "70px",
        fontSize: "lg",
        width: ['210px', null, '320px'],
        // add _hover 
      },
    },
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
