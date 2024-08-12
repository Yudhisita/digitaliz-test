import { Poppins } from "next/font/google";
import "./globals.css";

//Component
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Andi-Course",
  description: "Kelas Online Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="max-w-5xl mx-auto min-h-screen px-4 md:px-0">
          {children}
        </main>
        <Footer />
        <Toaster position="top-left" closeButton />
      </body>
    </html>
  );
}
