import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Nabvar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huay Hub 888 เว็บหวยจ่ายจริง 100% ",
  description: "Huay Hub 888 เว็บหวยจ่ายจริง 100% ",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
    </>
  );
}
