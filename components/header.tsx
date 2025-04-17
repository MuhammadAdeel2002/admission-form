import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#0a1e64] text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>111 277 111</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@cicon.edu</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
