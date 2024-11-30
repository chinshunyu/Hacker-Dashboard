'use client'

interface Language {
  name: string;
  percentage: number;
  color: string;
}

export default function LanguageChart() {
  const languages: Language[] = [
    { name: 'TypeScript', percentage: 45, color: 'bg-blue-500' },
    { name: 'Python', percentage: 30, color: 'bg-yellow-500' },
    { name: 'JavaScript', percentage: 15, color: 'bg-purple-500' },
    { name: 'Go', percentage: 10, color: 'bg-teal-500' },
  ];

  // Calculate the stroke dash array for the circular progress
  const calculateStrokeDashArray = (percentage: number): string => {
    const circumference = 2 * Math.PI * 90; // radius is 90
    return `${(percentage / 100) * circumference} ${circumference}`;
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Language Distribution</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="relative w-[240px] h-[240px]">
          <svg className="w-full h-full transform -rotate-90">
            {languages.map((lang, index) => {
              const offset = languages
                .slice(0, index)
                .reduce((acc, curr) => acc + curr.percentage, 0);
              return (
                <circle
                  key={lang.name}
                  cx="120"
                  cy="120"
                  r="90"
                  stroke={`var(--${lang.color})`}
                  strokeWidth="30"
                  fill="none"
                  strokeDasharray={calculateStrokeDashArray(lang.percentage)}
                  strokeDashoffset={`${(offset / 100) * (2 * Math.PI * 90)}`}
                  className={`${lang.color} transition-all duration-1000`}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">{languages[0].percentage}%</div>
              <div className="text-sm text-gray-400">{languages[0].name}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-sm ${lang.color}`} />
              <span className="flex-1">{lang.name}</span>
              <span className="text-gray-400">{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
