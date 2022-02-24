import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
