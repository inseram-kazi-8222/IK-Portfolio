import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inseramuddin Kazi | Web Developer",
  description: "High-end, premium portfolio of Inseramuddin Kazi, an elite Web Developer.",
  icons: {
    icon: "/ik-logo.png",
    shortcut: "/ik-logo.png",
    apple: "/ik-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
