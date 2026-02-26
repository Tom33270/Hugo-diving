import '../styles/globals.css';
import Footer from "../components/Footer";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function App({ Component, pageProps }) {
  return(<>
   <Component {...pageProps} />
   <Footer />
   </>
  )
}

export default App;