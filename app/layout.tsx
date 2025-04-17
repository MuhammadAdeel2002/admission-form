import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ContactButton from "@/components/contact-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nursing College Admission Portal",
  description: "Apply for admission to our Nursing College",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <ContactButton />
      </body>
    </html>
  )
}


import './globals.css'