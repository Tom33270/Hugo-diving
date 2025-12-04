import '../styles/globals.css';
import Head from 'next/head';
import 'leaflet/dist/leaflet.css';



function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hugo Diving</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
