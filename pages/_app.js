import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
        {/* <html lang="en" /> */}

      <Head>
        <title>Manish Nagar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="My Resume" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
