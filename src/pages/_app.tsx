import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { NavBar } from "components/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
