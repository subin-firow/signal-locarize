import { Inter } from "next/font/google";
import "./globals.css";
import { ToastBar, Toaster } from "react-hot-toast";
import { duration } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Signal Locarize",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" toastOptions={{duration:1200}} />

        {children}
      </body>
    </html>
  );
}
