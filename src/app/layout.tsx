"use client"

import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ['latin']
});

// Cara membuat navbar tidak tampak pada URL tertentu
const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} bg-dark-blue`}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar /> }
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
