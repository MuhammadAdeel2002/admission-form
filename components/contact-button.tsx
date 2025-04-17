"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleForm = () => setIsOpen(!isOpen)

  return (
    <div 
      style={{
        height: "50px",
        width: "160px",
        position: "fixed",
        zIndex: "999999",
        bottom: "8px",
        right: "0px"
      }}
      className="flex items-center justify-center"
    >
      <Button
        onClick={toggleForm}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md flex items-center gap-2 w-full h-full transition-colors duration-200"
      >
        <MessageCircle className="h-5 w-5" />
        {isOpen ? (
          <>
            Close
            <ChevronDown className="h-4 w-4" />
          </>
        ) : (
          <>
            Contact Us
            <ChevronUp className="h-4 w-4" />
          </>
        )}
      </Button>

      {isOpen && (
        <ContactForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 