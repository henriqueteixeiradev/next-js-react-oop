import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";
import { ProductProvider } from "../hooks/useProductContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ProductProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ProductProvider>
    </>
  );
}

export default MyApp;
