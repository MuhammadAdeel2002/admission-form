"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Close the form
      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed right-8 bottom-[66px] z-50 w-[350px] rounded-lg bg-[#1a2e6c] text-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden">
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold mb-1">Contact Form</h2>
        <p className="text-sm mb-3">What can we do for you today?</p>
        <p className="text-xs text-blue-200 mb-4">Please provide your contact information in the boxes below.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/10 text-white border-white/20 placeholder:text-white/50"
              placeholder="Full Name *"
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/10 text-white border-white/20 placeholder:text-white/50"
              placeholder="E-mail *"
            />
          </div>

          <div>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white/10 text-white border-white/20 placeholder:text-white/50"
              placeholder="Phone Number *"
            />
          </div>

          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-20 bg-white/10 text-white border-white/20 placeholder:text-white/50 resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Contact Us"}
          </Button>
        </form>
      </div>
    </div>
  )
}
