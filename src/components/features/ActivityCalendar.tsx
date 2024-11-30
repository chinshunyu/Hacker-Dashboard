'use client'

type ActivityLevel = 0 | 1 | 2 | 3 | 4;

interface DayActivity {
  date: string;
  level: ActivityLevel;
  count: number;
}

export default function ActivityCalendar() {
  // Mock data - in real app, this would come from props or API
  const generateMockData = (): DayActivity[] => {
    const data: DayActivity[] = [];
    const today = new Date();
    
    for (let i = 83; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const level = Math.floor(Math.random() * 5) as ActivityLevel;
      const count = level * Math.floor(Math.random() * 5);
      
      data.push({
        date: date.toISOString().split('T')[0],
        level,
        count
      });
    }
    
    return data;
  };

  const activities = generateMockData();
  const weeks = [];
  
  for (let i = 0; i < activities.length; i += 7) {
    weeks.push(activities.slice(i, i + 7));
  }

  const getLevelColor = (level: ActivityLevel): string => {
    switch(level) {
      case 0: return 'bg-gray-800';
      case 1: return 'bg-teal-900';
      case 2: return 'bg-teal-700';
      case 3: return 'bg-teal-500';
      case 4: return 'bg-teal-300';
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Activity Calendar</h2>
      <div className="grid grid-cols-12 gap-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="space-y-2">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`h-8 rounded-sm ${getLevelColor(day.level)} transition-colors hover:opacity-75 cursor-pointer`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-end space-x-2 text-sm">
        <span className="text-gray-400">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-4 h-4 rounded-sm ${getLevelColor(level as ActivityLevel)}`}
          />
        ))}
        <span className="text-gray-400">More</span>
      </div>
    </div>
  )
}
