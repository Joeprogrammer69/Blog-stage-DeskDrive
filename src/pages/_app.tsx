import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarBlog from "./components/navbarblog"; 
import '../pages/styles/aboutme.css'; 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBarBlog />
      <Component {...pageProps} />
    </>
  );
}