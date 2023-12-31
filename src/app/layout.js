import { Inter, Roboto } from "next/font/google";
import Footer from "@components/footer/footer";
import Navbar from "@components/navbar/navbar";
import { ThemeProvider } from "@utils/context/themeContext";
import { companyName } from "@utils/staticData/links";
import AuthProvider from "@components/authProvider/authProvider";
import "./globals.css";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: companyName,
  description: "What we are...",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
