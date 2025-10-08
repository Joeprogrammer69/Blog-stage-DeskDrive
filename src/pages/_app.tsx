import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarBlog from "./components/navbarblog";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBarBlog />
      <div className="global-background d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Component {...pageProps} />
        </main>

        <footer className="text-center text-light py-3 bg-primary mt-auto shadow-sm">
          <p className="mb-0">
           
            © {new Date().getFullYear()} Deskdrive Blog van{" "}
            <strong>Steven</strong>
             <a
               href="https://github.com/Joeprogrammer69/Blog-stage-DeskDrive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light ms-2"
             >
          Mijn github
            </a>
          </p>
        
        </footer>
      </div>
    </>
  );
}
