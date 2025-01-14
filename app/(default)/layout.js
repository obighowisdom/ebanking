import localFont from "next/font/local";
import "../globals.css";
import Header from "../../components/HomePage/Header";
import TopNav from "../../components/HomePage/TopNav";
import Widget from "../../components/LiveChat";


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
  title: "Nexa Banking Online",
  description: "Secured Banking Platform",
  icons: {
    icon: '/images/nexa.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <TopNav />
        <Header />
        {children}

      </body>
     <Widget />
    </html>
  );
}
