"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import ContactForm from "./contact-form"

export default function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <>
      <footer className="bg-[#0a1e64] text-white py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              © 2025 -{" "}
              <Link href="#" className="text-blue-300 hover:underline">
                CICON
              </Link>{" "}
              - All Rights Reserved
            </div>
            
          </div>
        </div>
      </footer>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}
