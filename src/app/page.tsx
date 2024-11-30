'use client'

import Image from 'next/image'
import StatsCards from '@/components/features/StatsCards'
import ActivityCalendar from '@/components/features/ActivityCalendar'
import LanguageChart from '@/components/features/LanguageChart'
import { Share2, Edit3 } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
        <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/dev/240"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">John Developer</h1>
              <p className="text-gray-400 mb-4">Senior Software Engineer</p>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md transition-colors">
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
              <button className="flex items-center space-x-2 border border-gray-600 hover:border-gray-500 px-4 py-2 rounded-md transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Passionate software engineer with expertise in TypeScript, Python, and Go. 
            Building scalable applications and contributing to open source projects.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Activity Calendar */}
      <div className="mb-8">
        <ActivityCalendar />
      </div>

      {/* Language Distribution */}
      <LanguageChart />
    </div>
  )
}
