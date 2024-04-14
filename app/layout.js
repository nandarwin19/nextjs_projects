import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
// import Navbar from "@/components/Navbar";
import Navbar from "./../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js and OpenAI",
  description: "Build amazing stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-[1440px] mx-auto">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
