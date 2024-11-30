'use client'

import { Home, User, Trophy, GitBranch, Settings, BarChart } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-[300px] border-r border-gray-800 p-4 hidden lg:block">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-teal-500 rounded-lg" />
        <span className="text-xl font-bold">DevDashboard</span>
      </div>
      
      <nav className="space-y-2">
        <NavItem href="/" icon={<Home className="w-5 h-5" />} text="Dashboard" />
        <NavItem href="/profile" icon={<User className="w-5 h-5" />} text="Profile" />
        <NavItem href="/achievements" icon={<Trophy className="w-5 h-5" />} text="Achievements" />
        <NavItem href="/repositories" icon={<GitBranch className="w-5 h-5" />} text="Repositories" />
        <NavItem href="/analytics" icon={<BarChart className="w-5 h-5" />} text="Analytics" />
        
        <div className="pt-4 mt-4 border-t border-gray-800">
          <NavItem href="/settings" icon={<Settings className="w-5 h-5" />} text="Settings" />
        </div>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-sm text-gray-400 mb-2">Storage Used</p>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-teal-500" />
          </div>
          <p className="text-sm text-gray-400 mt-2">75% of 100GB</p>
        </div>
      </div>
    </aside>
  )
}

function NavItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}
