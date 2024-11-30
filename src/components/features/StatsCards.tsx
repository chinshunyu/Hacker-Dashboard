'use client'

import { Activity, Code2, Star, GitPullRequest, GitFork } from 'lucide-react'

interface StatCard {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCards() {
  const stats: StatCard[] = [
    {
      icon: <Code2 className="text-teal-500" />,
      title: 'Contributions',
      value: '2,547',
      subtitle: 'Total commits',
      trend: {
        value: 12,
        isPositive: true
      }
    },
    {
      icon: <Activity className="text-teal-500" />,
      title: 'Activity',
      value: '87%',
      subtitle: 'Active days',
      trend: {
        value: 5,
        isPositive: true
      }
    },
    {
      icon: <Star className="text-teal-500" />,
      title: 'Stars',
      value: '1,238',
      subtitle: 'Across projects',
      trend: {
        value: 8,
        isPositive: true
      }
    },
    {
      icon: <GitPullRequest className="text-teal-500" />,
      title: 'Pull Requests',
      value: '156',
      subtitle: 'Open PRs',
      trend: {
        value: 3,
        isPositive: false
      }
    },
    {
      icon: <GitFork className="text-teal-500" />,
      title: 'Forks',
      value: '432',
      subtitle: 'Repository forks',
      trend: {
        value: 15,
        isPositive: true
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
          <div className="flex items-center space-x-2 mb-4">
            {stat.icon}
            <h3 className="text-lg font-semibold">{stat.title}</h3>
          </div>
          <p className="text-3xl font-bold mb-1">{stat.value}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">{stat.subtitle}</p>
            {stat.trend && (
              <span className={`flex items-center text-sm ${
                stat.trend.isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.trend.isPositive ? '↑' : '↓'} {stat.trend.value}%
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
