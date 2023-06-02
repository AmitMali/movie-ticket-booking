import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../services/provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Booking",
  description: "Created By amit mali",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </Providers>
  );
}
