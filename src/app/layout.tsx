"use client"

import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';

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
      <head>
        <title>NextJS App</title>
      </head>
      <body className={`${inter.className} bg-dark-blue`}>
        {!disableNavbar.includes(pathname) && <Navbar /> }
        {children}
      </body>
    </html>
  )
}
