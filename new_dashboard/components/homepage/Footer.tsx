import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 p-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap justify-between items-center">
          {/* logo */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <img src="/logo/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          {/* links */}
          <nav className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-10">
              <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link href="/" className="hover:text-gray-900">About</Link></li>
              <li><Link href="/" className="hover:text-gray-900">Services</Link></li>
              <li><Link href="/" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </nav>
          {/* logos */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nekami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

