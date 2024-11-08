import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "O mais pica",
  description: "Eu mesmo",
  charset: 'UTF-8',
  author: 'GUERINELASSSS',
  keywords: 'vesgo, lindo, perfeito, melhor player do rocketleague'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
