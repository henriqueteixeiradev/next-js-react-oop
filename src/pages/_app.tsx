import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
