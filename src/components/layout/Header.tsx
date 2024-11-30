'use client'

import { Download, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-[80px] border-b border-gray-800 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <button className="lg:hidden mr-4">
          <Menu className="w-6 h-6" />
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">Capabilities</a>
          <a href="#engines" className="text-gray-300 hover:text-white transition-colors">Engines</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
          <a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a>
          <a href="#company" className="text-gray-300 hover:text-white transition-colors">Company</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <span className="hidden md:inline-flex px-2 py-1 text-xs font-medium bg-teal-500/20 text-teal-500 rounded">PRO</span>
        <button className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md transition-colors">
          <Download className="w-4 h-4" />
          <span className="hidden md:inline">Download</span>
        </button>
      </div>
    </header>
  )
}
