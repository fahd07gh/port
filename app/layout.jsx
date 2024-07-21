import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fahad Abdullah",
  description: "Fahad Abdullah's personal website and portfolio",
  image: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`flex justify-center items-center ${inter.className}`}>
        <main className="max-w-[800px] w-full min-h-screen ">{children}</main>
      </body>
    </html>
  );
}
