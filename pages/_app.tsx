import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * Custom App Component
 * 
 * This is the top-level component that wraps all pages in the application.
 * Here you can add global layouts, state management providers, or context providers.
 * 
 * @param {AppProps} props - The properties passed from Next.js, including the Component (the active page) and pageProps.
 * @returns {JSX.Element} The rendered page component.
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
