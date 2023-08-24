import './globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google';

export const TASA_ORBITER = localFont({
  src: "TASAOrbiterVF.woff2",
  variable: "--font-tasa",
  display: "swap",
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Proyecto ESI",
  description: "EEST N°5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${TASA_ORBITER.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}
