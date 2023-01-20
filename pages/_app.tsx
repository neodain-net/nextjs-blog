import Nav from "@/src/components/Nav";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
