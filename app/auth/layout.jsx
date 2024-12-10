import localFont from "next/font/local";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nexa Authentication",
  description: "Login",
  icons: {
    icon: "/images/nexa.png",
  },
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ToastContainer />
          {children}
     
      </body>
    </html>
  );
}
