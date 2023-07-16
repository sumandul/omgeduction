import "/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nabar from "../components/menu/nabar";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nabar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
